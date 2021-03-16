# Utilizacion gRPC

## Cosas necesarias por si se desea modificar el proto en la carpeta infectedpb

### Instalar proto y clang-format para esto hacemos lo siguiente 

    sudo apt-get install clang-format 

    curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip

    unzip protoc-3.5.1-linux-x86_64.zip -d protoc3

    sudo mv protoc3/bin/* /usr/local/bin/

    sudo mv protoc3/include/* /usr/local/include/

    sudo chown [YourUser] /usr/local/bin/protoc
    
    sudo chown -R [YourUser] /usr/local/include/google

### si se desea generar de nuevo el proto si modificaste algo en el archivo solo basta con ejecutar el script 

## Pasos para instalar Grpc y todo lo necesario y poder ejecutar el archivo sin problemas.

    go get -u google.golang.org/grpc
    go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
    go get -u github.com/gorilla/mux

## Con todo esto ya puedes ejecutar el servidor y cliente de gRPC con locust. solo hace falta agregar que se puede comunicar al backend y ver lo de load balancer.