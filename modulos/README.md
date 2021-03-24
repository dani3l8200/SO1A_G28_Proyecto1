# EJECUCIÓN DEL MODULO KERNEL
## COMPILAR EL CÓDIGO
Este comando nos generará un archvio con la extensión .ko, si la compilación del código fue exitoso.

    make

## AGREGAR UN NUEVO MÓDULO AL KERNEL

    sudo insmod [nombre del módulo].ko


## ELIMMINAR UN MÓDULO DEL KERNEL

    sudo rmmod [nombre del módulo]


## VISUALIZAR LOS MÓDULOS CARGADOS AL KERNEL

    sudo dmesg [nombre del módulo]

## SALIDA DE LOS MÓDULOS
Si el módulo genera algún archivo este se encontrará ubicado en la dirección

    /proc/

## VISUALIZAR LA SALIDA
Para leer el contenido de alguna de estas salidas se puede utilzar el comando cat

    cat /proc/[nombre del archivo[. tipo de extensión]]