package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/go-playground/validator"
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"

	"cloud.google.com/go/pubsub"
)

const (
	PROJECTID = "proyecto1-sopes1-308206"
	TOPICID   = "Messenger-Pub-Sub"
	PORT      = 6000
)

var validate *validator.Validate

type InfectedInput struct {
	Name         string `json:"name" validate:"required"`
	Location     string `json:"location" validate:"required"`
	Age          int32  `json:"age" validate:"required"`
	InfectedType string `json:"infectedtype" validate:"required"`
	State        string `json:"state" validate:"required"`
}

func publisher(msg string) error {
	ctx := context.Background()

	client, err := pubsub.NewClient(ctx, PROJECTID)

	if err != nil {
		log.Fatalf("error found %v", err)
		return err
	}

	t := client.Topic(TOPICID)

	result := t.Publish(ctx, &pubsub.Message{Data: []byte(msg)})

	id, err := result.Get(ctx)

	if err != nil {
		log.Fatalf("error found %v", err)
		return err
	}
	log.Infof("Published a message with id: %v", id)
	return nil
}

func conexion(w http.ResponseWriter, r *http.Request) {
	log.Debug("")
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Fatalf("Error with conection %v", err)
	}

	var infectedInput InfectedInput
	err = json.Unmarshal(body, &infectedInput)

	if err != nil {
		log.Fatalf("error in decoding request %v", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = validate.Struct(&infectedInput)

	if err != nil {
		log.Fatalf("error in validate data %v", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// fmt.Println("Hello I'm a client")

	infectedJSON, err := json.Marshal(infectedInput)

	if err != nil {
		log.Fatalf("error in conver data to JSON %v", err)
	}

	// log.Infof("Received the following text to categorize: %s", infectedJSON)
	publisher(string(infectedJSON))

}

func main() {
	address := fmt.Sprintf(":%d", PORT)
	log.Infof("Starting HTTP REST API at port %s ...", address)
	log.SetLevel(log.InfoLevel)
	validate = validator.New()

	// initialize router and add endpoints
	router := mux.NewRouter()
	router.HandleFunc("/", conexion).Methods(http.MethodPost)

	// start http server
	log.Fatal(http.ListenAndServe(address, router))
}
