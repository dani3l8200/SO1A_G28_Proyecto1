package main // indpenediente al subcriber

import (
	"flag"
	"encoding/json"
	"github.com/nats-io/nats.go"
	"fmt"
	"os"
	"log"
)



func usage() {
	log.Printf("Usage: nats-pub [-s server] [-creds file] <subject> <msg>\n")
	flag.PrintDefaults()
}

func showUsageAndExit(exitcode int) {
	usage()
	os.Exit(exitcode)
}

func main() {
	publicar()
}

func publicar( ) {
	var urls = flag.String("s", nats.DefaultURL, "PUBLISH")
	log.SetFlags(0)
	flag.Parse()
	args := flag.Args() // por el momento
	if len(args) != 1 {
		showUsageAndExit(1) 
	}
	
	opciones := []nats.Option{nats.Name("SERVER PUBLISHER DE NATS")}//conexion
	nc, err := nats.Connect(*urls, opciones...) // conexion al server de nats 
	if err != nil {
		log.Fatal(err)
	}
	defer nc.Close()

	CanalEscucha := "SOPES1"
	msg := []byte(args[0])// ACA MANDARIA EL JSON
	type Auto struct {
	ID int
	Modelo string
	}
	var auto Auto
	data, _ := json.Marshal(auto) // LO CODIFICA A JSON 
	fmt.Println(msg)
	fmt.Println(string(data))
	json_byte :=[]byte(string(data))
	nc.Publish(CanalEscucha, json_byte)
	nc.Flush()
	if err := nc.LastError(); err != nil {
		log.Fatal(err)
	} else {
		log.Printf("PUBLICANDO EL MSG DE(-%s-) : '%s'\n", CanalEscucha, msg)
	}
}
