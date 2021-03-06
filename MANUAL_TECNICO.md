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
  - [Modulos Kernel](#M??dulos-Kernel)
    - [Makefile](#Makefile)
    - [M??dulo RAM](#M??dulo-RAM)
    - [M??dulo Lista de Proceso](#M??dulo-Lista-de-Proceso)
    - [Compilaci??n](#Compilaci??n)
  - [Conclusiones](#conclusiones)
  - [Bibliografia](#bibliografia)

## Introduccion 

Dada la situaci??n actual, con la pandemia COVID-19, se require hacer un an??lisis en tiempo real de los datos de
infecciones alrededor de Guatemala. Por ello, es necesario realizar un sistema que pueda almacenar los datos
de infecciones y mostrar gr??ficas relevantes; as?? tomar mejor decisiones en la b??squeda de m??todos para
sobrellevar la contingencia de la mejor manera.

El sistema contar?? con una carga masiva de datos, los cuales tendr??n un formato espec??fico detallado m??s
adelante; adem??s, contar??n con una app web que mostrar?? las gr??ficas y m??tricas m??s relevantes de los datos
que se suministren al sistema, por ??ltimo, mostrar?? el estado de la RAM y un listado de procesos del servidor
donde se almacenar??n los datos.

Se utilizar??n cuatro alternativas de middlewares de mensajer??a; cada uno de ellos ser?? utilizado para enviar el
tr??fico generado en conjunto, esto con el fin de tener una respuesta m??s r??pida al momento de cargar datos,
adem??s de utilizar tecnolog??a de vanguardia para sobrellevar este sistema.

## Objetivos 
1. Aplicar conocimiento de contenedores, im??genes, archivos de composici??n y redes entre contenedores.
2.  Experimentar y utilizar tecnolog??as nativas de la nube que ayudan a desarrollar sistemas distribuidos modernos.
3. Generar tr??fico y dividirlo en la red utilizando herramientas espec??ficas como Locust y Google Cloud Load Balancer.
4. Crear una app web utilizando React, uno de los frameworks con m??s demanda laboral en el mercado.
5. Comparar cuatro diferentes middlewares orientados a mensajer??a: gRPC, NATS, RabbitMQ y Google Pub/Sub.

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

# RABBITMQ
## Middleware de mensajer??a, AMQP.
# 

<div style="text-align: justify">
Se procede a la creaci??n de una m??quina virtual haciendo uso de GCP, dicha m??quina virtual aloja un conjunto de contenedores que son dirigidos por una herramienta llamada Docker-Compose. 

El Docker-Compose tiene a su cargo tres contenedores clave, un contenedor aloja el *sender*, otro contenedor aloja el *receiver* y otro aloja el *servidor de rabbit*, todos ellos cumplen con una funci??n definida. Se detalla la funci??n de las partes.

- Sender, es el encargado de publicar los mensajes en la cola de Rabbit.
- Receiver, es el encargado de consumir los mensajes de la cola de Rabbit.
- Servidor Rabbit, contiene la cola de mensajes, interactua con el Sender y Receiver.

</div>

<div align="center">
    <p align="center">
        Figura 1. Arquitectura utilizada con RabbitMQ.
    </p>
    <img src="./img/estructura.png" width="300">
</div>
<br>
<div style="text-align: justify">
Basicamente se divide en dos partes programables, la primera el Consumidor y el Publicador.
</div>

# 
## PUBLICADOR
<div style="text-align: justify">
Se centra en estar recibiendo peticiones externas, debido a ello fue el ??nico contenedor en el cual se expone su puerto. Se program?? en GO, su nucleo est?? en en recibir peticiones haciendo uso de net/http y se mantiene esperando eun determinado puerto.
<br>
<br>

<div align="center">
    <p align="center">
        Figura 2. Base de funcionamiento
    </p>
    <img src="./img/handleFunc.png" width="300">
</div>

<br>
Luego de recibir un mensaje procedemos a realizar una conexi??n con el servidor de Rabbit para poder encolar el mensaje, antes de ello extraemos el cuerpo del mensaje y le hacemos un parseo a formato Json. Le agregamos un atributo del canal por el cual ha sido enviado y establecemos la conexi??n con el servidor de RabbitMq, ese contenedor se encuentra en un contenedor.

<br>
<br>

<div align="center">
    <p align="center">
        Figura 3. Preparar mensaje y conexi??n a Rabbit
    </p>
    <img src="./img/tec_rab1.png" width="300">
</div>
<br>

Procedemos a crear un canal por el cual viajar?? el mensaje, y con ello creamos una cola con sus atributos correspondientes del nombre, durabilidad, excluisividad, entre otros.
<br>
<br>

<div align="center">
    <p align="center">
        Figura 4. Preparar mensaje y conexi??n a Rabbit
    </p>
    <img src="./img/tec_rab2.png" width="300">
</div>
<br>

En caso de que todo suceda correctamente procedemos a publicar el mensaje haciendo uso del canal creado, agreagamos a qu?? cola se agregar?? y datos extras del mensaje.
<br>
<br>

<div align="center">
    <p align="center">
        Figura 5. Preparar mensaje y conexi??n a Rabbit
    </p>
    <img src="./img/tec_rab3.png" width="300">
</div>
<br>

</div>


# 
## CONSUMIDOR
<div style="text-align: justify">
Se procede a realizar la conexi??n con el servidor de Rabbit que se encuentra en un contenedor, luego de ello abrimos un canal para que el mensaje pueda ser transmitido, de igual forma declaramos una cola con los mismos atributos declarados en el publicador.

<br>
<br>

<div align="center">
    <p align="center">
        Figura 5. Preparar entorno para consumir mensaje
    </p>
    <img src="./img/tec_rab4.png" width="300">
</div>
<br>

Luego de ello se consume el mensaje que se encuentra dentro de la cola haciendo uso del canal, esto se realiza de forma indeterminada debido a que hace uso de una subrutina para ejecutarse, luego de recibir el mensaje de la cola procede a enviar ese mensaje a trav??s de un m??todo POST hacia un servidor de node para almacenarlo.
<div align="center">
    <p align="center">
        Figura 5. Preparar entorno para consumir mensaje
    </p>
    <img src="./img/tec_rab5.png" width="300">
</div>
<br>

</div>









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

## M??dulos Kernel

### M??dulo RAM

Definiremos una variable para obtener el otoal de p??ginas en cah??

    #define total_swapcache_pages()			0UL

Es lo que decide la salida.

    static int my_proc_show(struct seq_file *m, void *v)
    {
        struct sysinfo info;
        long cached;
        si_meminfo(&info);
        cached = global_node_page_state(NR_FILE_PAGES) - total_swapcache_pages() - info.bufferram;
        if (cached < 0)
            cached = 0;
    
        seq_printf(m,"{\n ");
        seq_printf(m,"\t\"total\" : %ld,\n", info.totalram*info.mem_unit/1024);
        seq_printf(m,"\t\"free\" : %ld,\n", info.freeram*info.mem_unit/1024);
        seq_printf(m,"\t\"cache\" : %ld,\n", (cached*info.mem_unit)/1024  );
        seq_printf(m,"\t\"used\" : %ld\n", ((info.totalram-info.freeram-cached)*info.mem_unit)/1024);
        seq_printf(m,"}");
        return 0;
    }

Para crear un pseudoarchivo en el sistema de archivos proc.

    static ssize_t my_proc_write(struct file *file, const char __user *buffer, size_t count, loff_t *f_pos)
    {
        return 0;
    }

Es la devoluci??n de llamada abierta, llamada cuando se abre el archivo proc.

    static int my_proc_open(struct inode *inode, struct file *file)
    {
        return single_open(file, my_proc_show, NULL);
    }

Definici??n del evento principal

    static int __init test_init(void)
    {
        struct proc_dir_entry *entry;
        entry = proc_create("ram_module.json", 0777, NULL, &my_fops);
        if (!entry)
        {
            return -1;
        }
        else
        {
            printk(KERN_INFO "@ram-module iniciado\n");
        }
        return 0;
    }

Definici??n del evento de Salida

    static void __exit test_exit(void)
    {
        remove_proc_entry("ram_module.json", NULL);
        printk(KERN_INFO "@ram-module finalizado\n");
    }

Esta llamada carga la funci??n que se ejecutar?? en el init

    module_init(event_init);

Esta llamada carga la funci??n que se ejecutar?? en el exit  

    module_exit(event_exit);

### M??dulo Lista de Proceso
M??todo recusivo que nos mostrar?? la cola de procesos.

    void DFS(struct task_struct *task,struct seq_file *m)
    {   
        struct task_struct *child;
        struct list_head *list;

        seq_printf(m,"\t{\n");
        seq_printf(m,"\t\t\"nombre\" : \"%s\",\n", task->comm);
        seq_printf(m,"\t\t\"pid\" : %d,\n", task->pid);
        seq_printf(m,"\t\t\"state\" : %li,\n", task->state);
        seq_printf(m,"\t\t\"pidp\" : %d\n", task->parent->pid);
        seq_printf(m,"\t}");
        list_for_each(list, &task->children) {
            seq_printf(m,",\n");
            child = list_entry(list, struct task_struct, sibling);
            DFS(child,m);
        }
    }

Es lo que decide la salida.

    static int my_proc_show(struct seq_file *m, void *v)
    {
        seq_printf(m,"[\n");
        DFS(&init_task,m);
        seq_printf(m,"\n]\n");
        return 0;
    }

Para crear un pseudoarchivo en el sistema de archivos proc.

    static ssize_t my_proc_write(struct file *file, const char __user *buffer, size_t count, loff_t *f_pos)
    {
        return 0;
    }

Es la devoluci??n de llamada abierta, llamada cuando se abre el archivo proc.

    static int my_proc_open(struct inode *inode, struct file *file)
    {
        return single_open(file, my_proc_show, NULL);
    }

Definici??n del evento principal

    static int __init test_init(void)
    {
        struct proc_dir_entry *entry;
        entry = proc_create("process_module.json", 0777, NULL, &my_fops);
        if (!entry)
        {
            return -1;
        }
        else
        {
            printk(KERN_INFO "@process_module-module iniciado\n");
        }
        return 0;
    }


Definici??n del evento de Salida

    static void __exit test_exit(void)
    {
        remove_proc_entry("process_module.json", NULL);
        printk(KERN_INFO "@process_module finalizado\n");
    }

Esta llamada carga la funci??n que se ejecutar?? en el init

    module_init(event_init);

Esta llamada carga la funci??n que se ejecutar?? en el exit  

    module_exit(event_exit);


### Makefile

Es necisario de un archivo de texto plano llamado Makefile, el cual servir?? para la compilaci??n del c??digo escrito en el m??dulo

    obj-m += [nombre del m??dulo].o
    all:
        # Definir que se har?? cuando se compile
        make -C /lib/modules/$(shell uname -r)/build M=$(shell pwd)
    modulesclean:
        # Definir que se har?? cuando se limpie el m??dulo
	    make -C /lib/modules/$(shell uname -r)/build M=$(shell pwd) clean

### Compilaci??n

Se deber?? ingresar el siguiente comando, en el directorio donde tendremos nuestro Makefile y el achivo a ser compilado, para poder realizar la compilaci??n del m??dulo el cu??l en su salida crear?? un archivo [nombre del m??dulo].ko que ser?? nuestro m??dulo para el kernel.

    make

## Conclusiones 
1. Las ventajas de Docker hacen que la implementacion de software sea mucho mas eficiente que antes. Gracias a esto, los desarrolladores no tendran problemas para saber como se ejecutara su aplicacion fuera del entorno de prueba. Por otro lado, el administrador del sistema no tendra que luchar con los cambios o buscar las bibliotecas necesarias. 
2. En general la virtualizacion esta es una excelente herramienta muy util para las empresas y para los usuarios que tienen que probar una aplicacion y practicar alguna configuracion en red sin necesidad de equipos fisicos.

## Bibliografia
1. Albornoz, D. (9 de septiembre de 2020). C??mo instalar y configurar Docker en Ubuntu 18.04. Recuperado el 19 de octubre de 2020, de https://www.hostinger.es/tutoriales/comoinstalar-y-usar-docker-en-ubuntu/
2. Castillo, J. A. (5 de noviembre de 2018). Qu?? es la virtualizaci??n y para qu?? sirve. Recuperado el 19 de octubre de 2020, de https://www.profesionalreview.com/2018/11/05/que-esvirtualizacion/
3. Docker. (s.f.). Recuperado el 19 de octubre de 2020, de https://www.docker.com/
4. Hypervisor: el medio para la virtualizaci??n. (06 de agosto de 2020). Recuperado el 19 de octubre de 2020, de https://www.ionos.es/digitalguide/servidores/know-how/que-esun-hypervisor/
5. Pacheco Mengual, J. (29 de julio de 2015). Docker for dummies. Recuperado el 19 de octubre de 2020, de https://www.adictosaltrabajo.com/2015/07/29/docker-for-dummies/
