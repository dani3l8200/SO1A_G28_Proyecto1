package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/streadway/amqp"
)

func enviarACola(writer http.ResponseWriter, request *http.Request) {

	writer.Header().Set("Content-Type", "application/json")

	if request.Method == "GET" {
		writer.WriteHeader(http.StatusOK)
		mapD := map[string]string{"message": "ok"}
		mapB, _ := json.Marshal(mapD)
		writer.Write([]byte(mapB))
		return
	}

	var cuerpo map[string]interface{}
	err := json.NewDecoder(request.Body).Decode(&cuerpo)

	if err != nil {
		log.Fatalf("%s: %s", "Error, Parseo a Json. ", err)
	}

	cuerpo["canal"] = "rabbit"
	cuerpoFinal, _ := json.Marshal(cuerpo)

	connexion, err := amqp.Dial("amqp://guest:guest@rabbitmq:5672/")
	if err != nil {
		log.Fatalf("%s: %s", "Error, Conexion a Rabbit. ", err)
	}
	defer connexion.Close()

	canal, err := connexion.Channel()
	if err != nil {
		log.Fatalf("%s: %s", "Error, Creacion Canal. ", err)
	}
	defer canal.Close()

	q, err := canal.QueueDeclare(
		"colaSOPES1", // nombre cola
		false,        // durable
		false,        // eliminar cuando no se use
		false,        // exclusiva
		false,        // no-wait
		nil,          // argumentos
	)
	if err != nil {
		log.Fatalf("%s: %s", "Error, Creacion Cola. ", err)
	}

	datosFinales := string(cuerpoFinal)
	err = canal.Publish(
		"",
		q.Name,
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(datosFinales),
		})
	if err != nil {
		log.Fatalf("%s: %s", "Error, Publicacion Mensaje. ", err)
	}
	log.Printf(" Se ha enviado %s", datosFinales)

	writer.WriteHeader(http.StatusCreated)
	writer.Write([]byte(datosFinales))

}

func manejadorSolicitudes() {
	http.HandleFunc("/", enviarACola)
	log.Fatal(http.ListenAndServe(":3500", nil))
}

func main() {
	manejadorSolicitudes()
}
