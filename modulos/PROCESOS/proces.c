/*
Archivo: [nombre_modulo].c
*/

// Librerías a cargar
#include <linux/module.h>
#include <linux/init.h>
#include <linux/proc_fs.h>
#include <linux/sched.h>
#include <linux/uaccess.h>
#include <linux/fs.h>
#include <linux/sysinfo.h>
#include <linux/seq_file.h>
#include <linux/slab.h>
#include <linux/mm.h>
#include <linux/swap.h>
#include <linux/timekeeping.h>
#include <sys/sysinfo.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("ANTHONY FERNANDO SON MUX");
MODULE_DESCRIPTION("MUESTRA LOS PROCESOS DEL SISTEMA");
MODULE_VERSION("0.01");

// Retorna la información del sistema
//int sysinfo(struct sysinfo *info);

/*
sysinfo () devuelve ciertas estadísticas sobre el uso de la memoria y el intercambio, como
       así como el promedio de carga.

struct sysinfo {
    long uptime;              // Segundos desde el arranque
    unsigned long loads[3];   // cargas medias en 1, 5, y 15 min
    unsigned long totalram;   // Mem. pral. total útil
    unsigned long freeram;    // Tamaño de memoria disponible
    unsigned long sharedram;  // Cantidad de memoria compartida
    unsigned long bufferram;  // Memoria empleaada por búferes
    unsigned long totalswap;  // Tamaño del espacio total de swap
    unsigned long freeswap;   // Espacio de swap aún disponible
    unsigned short procs;     // Nº de procesos actualmente
    unsigned long totalhigh;  // Tamaño total de memoria alta 
    unsigned long freehigh;   // Tamaño disponible de memoria alta 
    unsigned int mem_unit;    // Tamaño de la unidad de memoria en bytes
    char _f[20-2*sizeof(long)-sizeof(int)]; // Relleno para libc5
};
*/

static int my_proc_show(struct seq_file *m, void *v)
{
    struct sysinfo info;
    if (sysinfo(&info) == -1) return -1;

    int totalRam, usedRam, freeRam, sharedRam, bufferRam, totalSawp, freeSwap, usedSwap;

    totalRam = info.totalram/1024/1024;
    freeRam = info.freeram/1024/1024);
    usedRam = (info.totalram-info.freeram)/1024/1024);
    /*     sharedRam = info.sharedram/1024/1024);
    bufferRam = info.bufferram/1024/1024);
    totalSawp = info.totalswap/1024/1024);
    freeSwap = info.freeswap/1024/1024);
    usedSwap = (info.totalswap-info.freeswap)/1024/1024); */


    seq_printf(m, "TOTAL_RAM: %d", totalRam);

    return 0;
}


static int my_proc_open(struct inode *inode, struct file *file)
{
    return single_open(file, my_proc_show, NULL);
}

static struct file_operations my_fops = {
    .owner = THIS_MODULE,
    .open = my_proc_open,
    .release = single_release,
    .read = seq_read,
    .llseek = seq_lseek,
    .write = my_proc_write
};

// Definicion de evento principal
static int __init test_init(void)
{
    struct proc_dir_entry *entry;
    entry = proc_create("reportRAM", 0777, NULL, &my_fops);
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

static void __exit test_exit(void)
{
    remove_proc_entry("reportRAM", NULL);
    printk(KERN_INFO "@ram-module finalizado\n");
}

/*
LINKS DE REFERENCIA
http://manpages.ubuntu.com/manpages/bionic/es/man2/sysinfo.2.html
https://man7.org/linux/man-pages/man2/sysinfo.2.html
https://stackoverflow.com/questions/8987636/sysinfo-system-call-not-returning-correct-freeram-value
https://stackoverflow.com/questions/43481494/total-ram-size-linux-sysinfo-vs-proc-meminfo
*/
module_init(test_init);
module_exit(test_exit);
