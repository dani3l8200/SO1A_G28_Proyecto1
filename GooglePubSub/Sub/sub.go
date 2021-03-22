package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"sync"

	"cloud.google.com/go/pubsub"
	"github.com/sirupsen/logrus"
)

const (
	SUBSCRIPTION = "Messenger-Sub"
	PROJECTID    = "proyecto1-sopes1-308206"
)

type InfectedOutput struct {
	Name         string `json:"name"`
	Location     string `json:"location"`
	Age          int32  `json:"age"`
	InfectedType string `json:"infectedtype"`
	State        string `json:"state"`
	Canal 		 string `json:"canal"`
}

func ImprimirMensaje(m *pubsub.Message, i int) {
	cadena := string(m.Data)
	var msg InfectedOutput
	err := json.Unmarshal(m.Data, &msg)
	logrus.Infoln(cadena)
	if err != nil {
		fmt.Printf("Error decodificando: %v\n", err)
	} else {
		// lo mando
		datos := strings.NewReader(string(m.Data))
		res, err := http.Post("http://34.94.243.121/mensajeria", "application/json; charset=UTF-8", datos)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
	}

	// obj_msg_sender, _ := json.Marshal(cadena)
	// log.Printf("(%d)[%s]:'%s'", i, m.Subject, string(obj_msg_sender))
}

func subscriber() error {
	ctx := context.Background()

	client, err := pubsub.NewClient(ctx, PROJECTID)

	if err != nil {
		log.Fatalf("error found %v", err)
		return err
	}
	var mu sync.Mutex
	received := 0
	sub := client.Subscription(SUBSCRIPTION)

	cctx, cancel := context.WithCancel(ctx)

	err = sub.Receive(cctx, func(ctx context.Context, msg *pubsub.Message) {
		logrus.Infof("Got mesagge %v", string(msg.Data))
		ImprimirMensaje(msg,received)
		msg.Ack()
		mu.Lock()
		defer mu.Unlock()
		received++
		if received == 2000{
			cancel()
		}
	})

	if err != nil {
		log.Fatalf("error found %v", err)
		return err
	}
	return nil
}

func main() {
	logrus.Infoln("Start Suscribrer")
	subscriber()
}
