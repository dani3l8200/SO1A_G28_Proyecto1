# Conexion a virtuales por SSH 

## Estando en ubuntu corremos los siguientes comandos 
    ssh-keygen -t rsa -f ~/.ssh/my-ssh-key -C [USERNAME]
### Username es el usuario de GCP, en este caso tendriamos que hacerlo con el siguiente, a todo le dan enter no hay que introducir nada
    ssh-keygen -t rsa -f ~/.ssh/my-ssh-key -C luiserniqueroman010012
## nos dirigmos en donde esta el ssh que generamos 
    cd ~/.ssh/
## ahora mostramos el contenido de la llave publica 
    cat ~/.ssh/my-ssh-key.pub
## este contenido me lo tienen que pasar para que yo les de acceso, una vez realizado esto ingresamos el siguiente comando 
    ssh -i ~/.ssh/my-ssh-key [USERNAME]@[IP_ADDRESS]
## En este caso serian las siguientes ips y quedaria de la siguiente manera 
    ssh -i ~/.ssh/my-ssh-key luiserniqueroman010012@34.94.94.141
    ssh -i ~/.ssh/my-ssh-key luiserniqueroman010012@34.94.103.54
    ssh -i ~/.ssh/my-ssh-key luiserniqueroman010012@34.94.188.53
    ssh -i ~/.ssh/my-ssh-key luiserniqueroman010012@34.94.243.121
1. Google Pub Sub
2. gRPC
3. NATS
4. REST-API