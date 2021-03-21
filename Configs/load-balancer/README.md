# Configuracion Google Load Balancer

- [Configuracion Google Load Balancer](#configuracion-google-load-balancer)
  - [Primer paso crear las maquinas virtuales](#primer-paso-crear-las-maquinas-virtuales)
  - [Creamos las maquinas restantes que son necesarias](#creamos-las-maquinas-restantes-que-son-necesarias)
  - [Una vez creadas las maquinas, creamos un grupo de instancias, donde en este van nuestras maquinas anteriomente creadas](#una-vez-creadas-las-maquinas-creamos-un-grupo-de-instancias-donde-en-este-van-nuestras-maquinas-anteriomente-creadas)
  - [Una vez creado nuestro grupo configuramos el load balancer y queda de la siguiente manera](#una-vez-creado-nuestro-grupo-configuramos-el-load-balancer-y-queda-de-la-siguiente-manera)
  - [Una vez configurado nuestro load balancer ya podemos utilizarlo con locust](#una-vez-configurado-nuestro-load-balancer-ya-podemos-utilizarlo-con-locust)
    - [usamos esta ip](#usamos-esta-ip)
    - [y levantamos nuestros contenedores de docker en cada maquina y obtenemos finalmente el siguiente resultado.](#y-levantamos-nuestros-contenedores-de-docker-en-cada-maquina-y-obtenemos-finalmente-el-siguiente-resultado)

## Primer paso crear las maquinas virtuales 
<center>

![alt](./images/Screenshot%20from%202021-03-20%2014-19-51.png)

<center>

## Creamos las maquinas restantes que son necesarias

<center>

![Una vez creada todas las maquinas, crea](./images/Screenshot%20from%202021-03-20%2014-21-28.png)

<center>

## Una vez creadas las maquinas, creamos un grupo de instancias, donde en este van nuestras maquinas anteriomente creadas


<center>

![alt](./images/Screenshot%20from%202021-03-20%2014-47-55.png)


![alt](./images/Screenshot%20from%202021-03-20%2017-09-37.png)

<center>

## Una vez creado nuestro grupo configuramos el load balancer y queda de la siguiente manera 

<center>

![alt](./images/Screenshot%20from%202021-03-20%2017-11-14.png)

![alt](./images/Screenshot%20from%202021-03-20%2017-11-34.png)

![alt](./images/Screenshot%20from%202021-03-20%2017-11-39.png)

![alt](./images/Screenshot%20from%202021-03-20%2017-21-56.png)

<center>

## Una vez configurado nuestro load balancer ya podemos utilizarlo con locust

### usamos esta ip 
    http://34.96.121.87

### y levantamos nuestros contenedores de docker en cada maquina y obtenemos finalmente el siguiente resultado.

![alt](./images/Screenshot%20from%202021-03-20%2015-01-06.png)

