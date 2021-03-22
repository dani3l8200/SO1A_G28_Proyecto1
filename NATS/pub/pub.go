package main // indpenediente al subcriber

import (
	"encoding/json"
	"github.com/nats-io/nats.go"
	"fmt"

	"net/http" //para escuchar peticiones HTTP	
)

const (
	URL_LISTEN = "nats://nats-server:4222"
)

type Mensaje struct{
	Name string `json:"name,omitempty"` //para ser mas explicito de lo que espero recibir
	Location string `json:"location,omitempty"` // nombre como lo espero ,  caracteristica no nulo
	Age	int 	`json:"age,omitempty"`
	Infectedtype string `json:"infectedtype,omitempty"`
	State string `json:"state,omitempty"`
}

func main() {
	http.HandleFunc("/",publicar_por_HTTP)
	println("escuchando en el puerto 5000")
	http.ListenAndServe(":5000",nil)
}

func publicar_por_HTTP(res http.ResponseWriter , req * http.Request){
	switch req.Method {
	case "POST":
			var mensaje Mensaje
			_ = json.NewDecoder(req.Body).Decode(&mensaje)			
			data, _ := json.Marshal(mensaje) // LO CODIFICA A JSON 
			json_byte :=[]byte(string(data))
			publicar(json_byte)
		default:
			fmt.Fprintf(res, "Metodo %s no soportado \n", req.Method)
			return
	}
}

func publicar(mensaje []byte){
	nc,_:=nats.Connect(URL_LISTEN)
	defer nc.Close()

	 nc.Publish("SOPES1", mensaje)
	 fmt.Println("MESAJE ENVIADO:  " , string(mensaje))
	 nc.Flush()
}