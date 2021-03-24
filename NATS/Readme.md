
## NATS

se utilizo la arquitectura publisher-subscriber

# paso 1
correr el comando en la ruta  ./pub y en la ruta ./sub
- go mod download


## paso 2
correr en su respetiva carpeta:
 -   go run pub.go
 -   go run sub.go
 -   levantar el server de nast con una imagen de docker que escuche en el puerto 4222


el publisher consiste en un servidor cliente de nats y ademas capaz de recibir peticiones HTTTP en el puerto 5000


el subscriber consiste en un servidor que recibe o se subscribe  a lo que el publicador haya mandado luego de eso tambien tiene la capacidad de realizar una peticion a un servidor de Node para que se almacene la info en mongoDB.