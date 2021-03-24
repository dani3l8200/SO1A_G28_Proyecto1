# Manual Tecnico 
- [Manual Tecnico](#manual-tecnico)
  - [Introduccion](#introduccion)
  - [Objetivos](#objetivos)
  - [Arquitectura Utilizada](#arquitectura-utilizada)
  - [Locust](#locust)
    - [Comando para instalar](#comando-para-instalar)
    - [Como correr Locust](#como-correr-locust)
    - [se abre una ventana en el navegador locahot:8089](#se-abre-una-ventana-en-el-navegador-locahot8089)
    - [si se quiere indicar el url, numero de usuarios, spawn rate es con el siguiente comando](#si-se-quiere-indicar-el-url-numero-de-usuarios-spawn-rate-es-con-el-siguiente-comando)
  - [GRPC](#grpc)
    - [Cosas necesarias por si se desea modificar el proto en la carpeta infectedpb](#cosas-necesarias-por-si-se-desea-modificar-el-proto-en-la-carpeta-infectedpb)
      - [Instalar proto y clang-format para esto hacemos lo siguiente](#instalar-proto-y-clang-format-para-esto-hacemos-lo-siguiente)
      - [si se desea generar de nuevo el proto si modificaste algo en el archivo solo basta con ejecutar el script](#si-se-desea-generar-de-nuevo-el-proto-si-modificaste-algo-en-el-archivo-solo-basta-con-ejecutar-el-script)
    - [Pasos para instalar Grpc y todo lo necesario y poder ejecutar el archivo sin problemas esto es opcional ahora, ya que se agregaron los archivos .mod y .sum que estos descargan automaticamente las dependencias.](#pasos-para-instalar-grpc-y-todo-lo-necesario-y-poder-ejecutar-el-archivo-sin-problemas-esto-es-opcional-ahora-ya-que-se-agregaron-los-archivos-mod-y-sum-que-estos-descargan-automaticamente-las-dependencias)
    - [Con todo esto ya puedes ejecutar el servidor y cliente de gRPC con locust. solo hace falta agregar que se puede comunicar al backend y ver lo de load balancer.](#con-todo-esto-ya-puedes-ejecutar-el-servidor-y-cliente-de-grpc-con-locust-solo-hace-falta-agregar-que-se-puede-comunicar-al-backend-y-ver-lo-de-load-balancer)
    - [Se agrego los archivos docker y docker-compose como ejecutarlo? bueno ingresamos a la carpeta infected_server y introducimos el siguiente comando.](#se-agrego-los-archivos-docker-y-docker-compose-como-ejecutarlo-bueno-ingresamos-a-la-carpeta-infected_server-y-introducimos-el-siguiente-comando)
    - [de manera similar lo hacemos para el cliente](#de-manera-similar-lo-hacemos-para-el-cliente)
    - [ejecutamos el docker-compose con el siguiente comando](#ejecutamos-el-docker-compose-con-el-siguiente-comando)
    - [para ejecutar ahora lo que nos creo el compose es con el siguiente comando](#para-ejecutar-ahora-lo-que-nos-creo-el-compose-es-con-el-siguiente-comando)
    - [si queremos ver los mensajes de consola](#si-queremos-ver-los-mensajes-de-consola)
  - [Google Pub Sub](#google-pub-sub)
    - [Cosas necesarias para la utilizacion de Google Pub/Sub](#cosas-necesarias-para-la-utilizacion-de-google-pubsub)
    - [o bien solo es necesario de ejecutar los archivos de pub y sub para descarga con los archivos necesarios](#o-bien-solo-es-necesario-de-ejecutar-los-archivos-de-pub-y-sub-para-descarga-con-los-archivos-necesarios)
    - [configuramos nuestros dockerfile para luego poder desplegarlo con docker-compose](#configuramos-nuestros-dockerfile-para-luego-poder-desplegarlo-con-docker-compose)
    - [configuramos nuestros docker-compose de la siguiente manera, se utilizan volumenes para mayor persistencia con los datos.](#configuramos-nuestros-docker-compose-de-la-siguiente-manera-se-utilizan-volumenes-para-mayor-persistencia-con-los-datos)
    - [una vez configurado levantamos nuesto compose de la siguiente manera donde:](#una-vez-configurado-levantamos-nuesto-compose-de-la-siguiente-manera-donde)
  - [NATS](#nats)
    - [Descargamos los siguientes paquetes si lo queremos ejecutar de manera local.](#descargamos-los-siguientes-paquetes-si-lo-queremos-ejecutar-de-manera-local)
    - [O bien podemos dejar que go los descargue automaticamente con los archivos .mod agregados y solo corremos los archivos .go](#o-bien-podemos-dejar-que-go-los-descargue-automaticamente-con-los-archivos-mod-agregados-y-solo-corremos-los-archivos-go)
    - [Configuramos nuestros dockerfiles de la siguiente manera](#configuramos-nuestros-dockerfiles-de-la-siguiente-manera)
    - [Configuramos nuestro docker-compose](#configuramos-nuestro-docker-compose)
    - [una vez configurado levantamos nuesto compose de la siguiente manera donde:](#una-vez-configurado-levantamos-nuesto-compose-de-la-siguiente-manera-donde-1)
  - [RabbitMQ](#rabbitmq)
    - [Descargams los siguientes paquetes si lo queremos ejecutar de manera local](#descargams-los-siguientes-paquetes-si-lo-queremos-ejecutar-de-manera-local)
    - [o bien solo es necesario de ejecutar los archivos de pub y sub para descarga con los archivos necesarios](#o-bien-solo-es-necesario-de-ejecutar-los-archivos-de-pub-y-sub-para-descarga-con-los-archivos-necesarios-1)
    - [Configuramos nuestros dockerfiles de la siguiente manera](#configuramos-nuestros-dockerfiles-de-la-siguiente-manera-1)
    - [Configuramos nuestro docker-compose](#configuramos-nuestro-docker-compose-1)
    - [una vez configurado levantamos nuesto compose de la siguiente manera donde:](#una-vez-configurado-levantamos-nuesto-compose-de-la-siguiente-manera-donde-2)
  - [Configuracion Load Balancer](#configuracion-load-balancer)
    - [Primer paso crear las maquinas virtuales](#primer-paso-crear-las-maquinas-virtuales)
    - [Creamos las maquinas restantes que son necesarias](#creamos-las-maquinas-restantes-que-son-necesarias)
    - [Una vez creadas las maquinas, creamos un grupo de instancias, donde en este van nuestras maquinas anteriomente creadas](#una-vez-creadas-las-maquinas-creamos-un-grupo-de-instancias-donde-en-este-van-nuestras-maquinas-anteriomente-creadas)
    - [Una vez creado nuestro grupo configuramos el load balancer y queda de la siguiente manera](#una-vez-creado-nuestro-grupo-configuramos-el-load-balancer-y-queda-de-la-siguiente-manera)
    - [Una vez configurado nuestro load balancer ya podemos utilizarlo con locust](#una-vez-configurado-nuestro-load-balancer-ya-podemos-utilizarlo-con-locust)
      - [usamos esta ip](#usamos-esta-ip)
      - [y levantamos nuestros contenedores de docker en cada maquina y obtenemos finalmente el siguiente resultado.](#y-levantamos-nuestros-contenedores-de-docker-en-cada-maquina-y-obtenemos-finalmente-el-siguiente-resultado)
  - [Configuracion Backend y Persistencia de Mongo en Docker](#configuracion-backend-y-persistencia-de-mongo-en-docker)
    - [Para la configuracion del dockerfile (backend) se hace de la siguiente manera](#para-la-configuracion-del-dockerfile-backend-se-hace-de-la-siguiente-manera)
    - [Configuacion del docker-compose y volumenes](#configuacion-del-docker-compose-y-volumenes)
    - [una vez configurado levantamos nuesto compose de la siguiente manera donde:](#una-vez-configurado-levantamos-nuesto-compose-de-la-siguiente-manera-donde-3)
  - [Google Cloud Run](#google-cloud-run)
    - [Para configurar google cloud run se creo el siguiente dockerfile](#para-configurar-google-cloud-run-se-creo-el-siguiente-dockerfile)
    - [Una vez creado el dockerfile se usaron los siguientes comandos.](#una-vez-creado-el-dockerfile-se-usaron-los-siguientes-comandos)
    - [En la pagina registry container muestra la imagen](#en-la-pagina-registry-container-muestra-la-imagen)
    - [En google cloud run se da crear servicio y se realiza la siguiente configuracion.](#en-google-cloud-run-se-da-crear-servicio-y-se-realiza-la-siguiente-configuracion)
    - [En el puerto es de suma importancia que se ponga la del contenedor en este caso como es un servidor de NGINX, por default es el 80 por lo que se coloca este puerto.](#en-el-puerto-es-de-suma-importancia-que-se-ponga-la-del-contenedor-en-este-caso-como-es-un-servidor-de-nginx-por-default-es-el-80-por-lo-que-se-coloca-este-puerto)
  - [Conclusiones](#conclusiones)
  - [Bibliografia](#bibliografia)

## Introduccion 

Dada la situación actual, con la pandemia COVID-19, se require hacer un análisis en tiempo real de los datos de
infecciones alrededor de Guatemala. Por ello, es necesario realizar un sistema que pueda almacenar los datos
de infecciones y mostrar gráficas relevantes; así tomar mejor decisiones en la búsqueda de métodos para
sobrellevar la contingencia de la mejor manera.

El sistema contará con una carga masiva de datos, los cuales tendrán un formato específico detallado más
adelante; además, contarán con una app web que mostrará las gráficas y métricas más relevantes de los datos
que se suministren al sistema, por último, mostrará el estado de la RAM y un listado de procesos del servidor
donde se almacenarán los datos.

Se utilizarán cuatro alternativas de middlewares de mensajería; cada uno de ellos será utilizado para enviar el
tráfico generado en conjunto, esto con el fin de tener una respuesta más rápida al momento de cargar datos,
además de utilizar tecnología de vanguardia para sobrellevar este sistema.

## Objetivos 
1. Aplicar conocimiento de contenedores, imágenes, archivos de composición y redes entre contenedores.
2.  Experimentar y utilizar tecnologías nativas de la nube que ayudan a desarrollar sistemas distribuidos modernos.
3. Generar tráfico y dividirlo en la red utilizando herramientas específicas como Locust y Google Cloud Load Balancer.
4. Crear una app web utilizando React, uno de los frameworks con más demanda laboral en el mercado.
5. Comparar cuatro diferentes middlewares orientados a mensajería: gRPC, NATS, RabbitMQ y Google Pub/Sub.

## Arquitectura Utilizada 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20214537.png)

## Locust 

### Comando para instalar
    pip3 install locust

### Como correr Locust 
    locust -f filename.py 
### se abre una ventana en el navegador locahot:8089 

### si se quiere indicar el url, numero de usuarios, spawn rate es con el siguiente comando
    locust -f traffic.py -u 1 -r 1 --host url 

## GRPC 
### Cosas necesarias por si se desea modificar el proto en la carpeta infectedpb

#### Instalar proto y clang-format para esto hacemos lo siguiente 

    sudo apt-get install clang-format 

    curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip

    unzip protoc-3.5.1-linux-x86_64.zip -d protoc3

    sudo mv protoc3/bin/* /usr/local/bin/

    sudo mv protoc3/include/* /usr/local/include/

    sudo chown [YourUser] /usr/local/bin/protoc
    
    sudo chown -R [YourUser] /usr/local/include/google

#### si se desea generar de nuevo el proto si modificaste algo en el archivo solo basta con ejecutar el script 

### Pasos para instalar Grpc y todo lo necesario y poder ejecutar el archivo sin problemas esto es opcional ahora, ya que se agregaron los archivos .mod y .sum que estos descargan automaticamente las dependencias.

    go get -u google.golang.org/grpc
    go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
    go get -u github.com/gorilla/mux

### Con todo esto ya puedes ejecutar el servidor y cliente de gRPC con locust. solo hace falta agregar que se puede comunicar al backend y ver lo de load balancer.


### Se agrego los archivos docker y docker-compose como ejecutarlo? bueno ingresamos a la carpeta infected_server y introducimos el siguiente comando.
    docker build -t nameimage:version . 
    docker build -t server:v1 . 
### de manera similar lo hacemos para el cliente 
    docker build -t client:v1 
### ejecutamos el docker-compose con el siguiente comando 
    docker-compose build 
### para ejecutar ahora lo que nos creo el compose es con el siguiente comando 
    docker-compose up -d 
### si queremos ver los mensajes de consola 
    docker logs -f nombrecontenedor 
    docker logs -f server 
    docker logs -f client 

## Google Pub Sub
### Cosas necesarias para la utilizacion de Google Pub/Sub
    go get cloud.google.com/go/pubsub v1.10.1
	go get github.com/golang/protobuf v1.5.1
### o bien solo es necesario de ejecutar los archivos de pub y sub para descarga con los archivos necesarios
    go run pub.go
    go run sub.go
### configuramos nuestros dockerfile para luego poder desplegarlo con docker-compose 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20180533.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20180748.png)

### configuramos nuestros docker-compose de la siguiente manera, se utilizan volumenes para mayor persistencia con los datos.
![alt](./img/Captura%20de%20pantalla%202021-03-23%20180955.png)
### una vez configurado levantamos nuesto compose de la siguiente manera donde:
d: detach mode 
up: levantar el compose 
--build: compila las images en caso que no se hayan creado

    docker-compose up -d --build

## NATS 
### Descargamos los siguientes paquetes si lo queremos ejecutar de manera local.
    go get github.com/nats-io/nats.go v1.10.0
### O bien podemos dejar que go los descargue automaticamente con los archivos .mod agregados y solo corremos los archivos .go
    go run pub.go 
    go run sub.go
### Configuramos nuestros dockerfiles de la siguiente manera 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20181528.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20181548.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20181612.png)

### Configuramos nuestro docker-compose
![alt](./img/Captura%20de%20pantalla%202021-03-23%20181828.png)
### una vez configurado levantamos nuesto compose de la siguiente manera donde:
d: detach mode 
up: levantar el compose 
--build: compila las images en caso que no se hayan creado

    docker-compose up -d --build

## RabbitMQ
### Descargams los siguientes paquetes si lo queremos ejecutar de manera local
    go get github.com/streadway/amqp v1.0.0 

### o bien solo es necesario de ejecutar los archivos de pub y sub para descarga con los archivos necesarios
    go run publica.go
    go run consume.go 
### Configuramos nuestros dockerfiles de la siguiente manera 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20182334.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20182347.png)
### Configuramos nuestro docker-compose
![alt](./img/Captura%20de%20pantalla%202021-03-23%20182503.png)
### una vez configurado levantamos nuesto compose de la siguiente manera donde:
d: detach mode 
up: levantar el compose 
--build: compila las images en caso que no se hayan creado

    docker-compose up -d --build
## Configuracion Load Balancer 
### Primer paso crear las maquinas virtuales 
<center>

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2014-19-51.png)

<center>

### Creamos las maquinas restantes que son necesarias

<center>

![Una vez creada todas las maquinas, crea](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2014-21-28.png)

<center>

### Una vez creadas las maquinas, creamos un grupo de instancias, donde en este van nuestras maquinas anteriomente creadas


<center>

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2014-47-55.png)


![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2017-09-37.png)

<center>

### Una vez creado nuestro grupo configuramos el load balancer y queda de la siguiente manera 

<center>

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2017-11-14.png)

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2017-11-34.png)

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2017-11-39.png)

![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2017-21-56.png)

<center>

### Una vez configurado nuestro load balancer ya podemos utilizarlo con locust

#### usamos esta ip 
    http://34.96.121.87

#### y levantamos nuestros contenedores de docker en cada maquina y obtenemos finalmente el siguiente resultado.
![alt](./Configs/load-balancer/images/Screenshot%20from%202021-03-20%2015-01-06.png)

## Configuracion Backend y Persistencia de Mongo en Docker 
### Para la configuracion del dockerfile (backend) se hace de la siguiente manera 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20183944.png)
### Configuacion del docker-compose y volumenes 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20184040.png)
### una vez configurado levantamos nuesto compose de la siguiente manera donde:
d: detach mode 
up: levantar el compose 
--build: compila las images en caso que no se hayan creado

    docker-compose up -d --build
## Google Cloud Run 
### Para configurar google cloud run se creo el siguiente dockerfile 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20212946.png)

### Una vez creado el dockerfile se usaron los siguientes comandos. 
    docker build -t fronted:prod .
melodic-arcadia-308307: es el id del proyecto de google cloud

    docker tag fronted:prod gcr.io/melodic-arcadia-308307/fronted:v1.0.2
    docker push gcr.io/melodic-arcadia-308307/fronted
Para que funcionen sin problema estos comandos debemos estar logueados en nuestro sistema operativo con GCP 

### En la pagina registry container muestra la imagen 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20210958.png)

### En google cloud run se da crear servicio y se realiza la siguiente configuracion. 
![alt](./img/Captura%20de%20pantalla%202021-03-23%20211128.png)
### En el puerto es de suma importancia que se ponga la del contenedor en este caso como es un servidor de NGINX, por default es el 80 por lo que se coloca este puerto.
![alt](./img/Captura%20de%20pantalla%202021-03-23%20213511.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20213532.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20215737.png)

![alt](./img/Captura%20de%20pantalla%202021-03-23%20215758.png)

## Conclusiones 
1. Las ventajas de Docker hacen que la implementacion de software sea mucho mas eficiente que antes. Gracias a esto, los desarrolladores no tendran problemas para saber como se ejecutara su aplicacion fuera del entorno de prueba. Por otro lado, el administrador del sistema no tendra que luchar con los cambios o buscar las bibliotecas necesarias. 
2. En general la virtualizacion esta es una excelente herramienta muy util para las empresas y para los usuarios que tienen que probar una aplicacion y practicar alguna configuracion en red sin necesidad de equipos fisicos.

## Bibliografia
1. Albornoz, D. (9 de septiembre de 2020). Cómo instalar y configurar Docker en Ubuntu 18.04. Recuperado el 19 de octubre de 2020, de https://www.hostinger.es/tutoriales/comoinstalar-y-usar-docker-en-ubuntu/
2. Castillo, J. A. (5 de noviembre de 2018). Qué es la virtualización y para qué sirve. Recuperado el 19 de octubre de 2020, de https://www.profesionalreview.com/2018/11/05/que-esvirtualizacion/
3. Docker. (s.f.). Recuperado el 19 de octubre de 2020, de https://www.docker.com/
4. Hypervisor: el medio para la virtualización. (06 de agosto de 2020). Recuperado el 19 de octubre de 2020, de https://www.ionos.es/digitalguide/servidores/know-how/que-esun-hypervisor/
5. Pacheco Mengual, J. (29 de julio de 2015). Docker for dummies. Recuperado el 19 de octubre de 2020, de https://www.adictosaltrabajo.com/2015/07/29/docker-for-dummies/
