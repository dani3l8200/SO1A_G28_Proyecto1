package main// MAIN PORQUE VA TRABAJAR INDEPENDIENTE AL PUBLISHER

import (
	"log"
	"flag"
	"runtime"
	"time"
	"github.com/nats-io/nats.go"
	//"fmt"
	"encoding/json"
)

func ImprimirMensaje(m *nats.Msg, i int) {

cadena := string(m.Data)
obj_msg_sender, _ := json.Marshal(cadena)
println(string(obj_msg_sender))
log.Printf("[#%d] Received on [%s]: '%s'", i, m.Subject, string(obj_msg_sender))
}

func main() {
	var urls = flag.String("s", nats.DefaultURL, "URL DE NATS")
	var showTime = flag.Bool("t", false, "FECHA , HORA Y ZONA")

	log.SetFlags(0)
	flag.Parse()

	// Connect Options.
	opciones := []nats.Option{nats.Name("SUBSCRIBER DE NATS")}
	opciones = establecerOptiones(opciones)


	// Connect to NATS
	nc, err := nats.Connect(*urls, opciones...)
	if err != nil {
		log.Fatal(err)
	}


	CanalEscucha, i := "SOPES1", 0

	nc.Subscribe(CanalEscucha, func(msg *nats.Msg) {
		i += 1
		ImprimirMensaje(msg, i)
		// RECIBO EL WHATSAPASO :V
	})
	nc.Flush()// creo que limpia la cola

	if err := nc.LastError(); err != nil {
		log.Fatal(err)
	}

	log.Printf("Escuchando(-"+string( CanalEscucha)+"-)")
	if *showTime {
		log.SetFlags(log.LstdFlags)
	}

	runtime.Goexit()
}

func establecerOptiones(opciones []nats.Option) []nats.Option {
	totalEspera := 10 * time.Minute
	delay_ := time.Second

	opciones = append(opciones, nats.ReconnectWait(delay_))
	opciones = append(opciones, nats.MaxReconnects(int(totalEspera/delay_)))
	opciones = append(opciones, nats.DisconnectErrHandler(func(nc *nats.Conn, err error) {
		log.Printf("Desconetado = :%s, intentos =  %.0fm", err, totalEspera.Minutes())
	}))
	opciones = append(opciones, nats.ReconnectHandler(func(nc *nats.Conn) {
		log.Printf("reconetando... [%s]", nc.ConnectedUrl())
	}))
	opciones = append(opciones, nats.ClosedHandler(func(nc *nats.Conn) {
		log.Fatalf("saliendo por : %v", nc.LastError())
	}))
	return opciones
}