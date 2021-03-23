package main

import (
	"bytes"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/streadway/amqp"
)

func main() {

	conexion, err := amqp.Dial("amqp://guest:guest@rabbitmq:5672/")
	if err != nil {
		log.Fatalf("%s: %s", "Error, conexion Rabbit. ", err)
	}
	defer conexion.Close()

	canal, err := conexion.Channel()
	if err != nil {
		log.Fatalf("%s: %s", "Error, abrir canal. ", err)
	}
	defer canal.Close()

	q, err := canal.QueueDeclare(
		"colaSOPES1",
		false,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		log.Fatalf("%s: %s", "Error, crear cola. ", err)
	}

	mensajes, err := canal.Consume(
		q.Name,
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		log.Fatalf("%s: %s", "Error, al consumir cola. ", err)
	}

	ciclico := make(chan bool)

	go func() {
		for msg := range mensajes {
			log.Printf("Recibiendo mensaje... %s", msg.Body)
			cuerpoAEnviar := []byte(string(msg.Body))
			req, err := http.Post("http://34.94.243.121/mensajeria/", "application/json", bytes.NewBuffer(cuerpoAEnviar))
			if err != nil {
				log.Fatalf("%s: %s", "Error, Post del mensaje. ", err)
			}
			defer req.Body.Close()

			req.Header.Set("Content-Type", "application/json")
			cuerpoRecibido, err := ioutil.ReadAll(req.Body)
			if err != nil {
				log.Fatalf("%s: %s", "Error, leyendo respuesta Post. ", err)
			}
			cuerpoCadena := string(cuerpoRecibido)
			log.Printf(cuerpoCadena)
		}
	}()

	log.Printf("----> Estamos esperando mensajes, CTRL + C para matar el proceso")
	<-ciclico
}
