package main

import (
	"context"
	"fmt"
	"infectedserver/infectedpb"
	"log"
	"net"
	"strconv"

	"google.golang.org/grpc"
)

type server struct{}

func (*server) Infected(ctx context.Context, req *infectedpb.InfectedRequest) (*infectedpb.InfectedResponse, error) {
	fmt.Printf("Greet function was invoked with %v", req)
	fmt.Println()
	name := req.GetInfected().GetName()
	location := req.GetInfected().GetLocation()
	age := req.GetInfected().GetAge()
	infectedType := req.GetInfected().GetInfectedtype()
	state := req.GetInfected().GetState()
	result := "Hello nombre: " + name + "\nlocation: " + location + "\nedad: " + strconv.FormatInt(int64(age), 10) + "\ntipo infectado: " + infectedType + "\nestado:" + state
	res := &infectedpb.InfectedResponse{
		Result: result,
	}

	return res, nil
}

func main() {
	fmt.Println("Hello World")

	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		log.Fatalf("Failled to listend: %v", err)
	}

	s := grpc.NewServer()

	infectedpb.RegisterInfectedServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to server %v", err)
	}
}
