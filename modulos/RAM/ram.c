#include <linux/module.h>
#include <linux/sysinfo.h>
#include <linux/init.h>
#include <linux/proc_fs.h>
#include <linux/seq_file.h>
#include <linux/swap.h>
#include <linux/mm.h>
#include <linux/vmstat.h>

#define total_swapcache_pages()			0UL
MODULE_LICENSE("GPL-2.0");
MODULE_AUTHOR("Anthony Fernando Son Mux");
MODULE_DESCRIPTION("Modulo el estado de la memória RAM");
MODULE_VERSION("0.1");

static int my_proc_show(struct seq_file *m, void *v)
{
    struct sysinfo info;

	si_meminfo(&info);
    /*
    page_alloc.c
    #include <linux/mm.h>
    
    
    #include <linux/errno.h>
    void si_meminfo(struct sysinfo *val)
    {
        val->totalram = totalram_pages;
        val->sharedram = 0;
        val->freeram = global_page_state(NR_FREE_PAGES);
        val->bufferram = nr_blockdev_pages();
        val->totalhigh = totalhigh_pages;
        val->freehigh = nr_free_highpages();
        val->mem_unit = PAGE_SIZE;
    }
    */
   	long cached = global_node_page_state(NR_FILE_PAGES) + total_swapcache_pages() + info.bufferram;
	if (cached < 0)
		cached = 0;
    //si_swapinfo(&info);
    /*
    #include <linux/swap.h>

    void si_swapinfo(struct sysinfo *val)
{
	unsigned int type;
	unsigned long nr_to_be_unused = 0;

	spin_lock(&swap_lock);
	for (type = 0; type < nr_swapfiles; type++) {
		struct swap_info_struct *si = swap_info[type];

		if ((si->flags & SWP_USED) && !(si->flags & SWP_WRITEOK))
			nr_to_be_unused += si->inuse_pages;
	}
	val->freeswap = atomic_long_read(&nr_swap_pages) + nr_to_be_unused;
	val->totalswap = total_swap_pages + nr_to_be_unused;
	spin_unlock(&swap_lock);
}
    */
    
    seq_printf(m,"Uptime: %ld:%ld:%ld\n", info.uptime/3600, info.uptime%3600/60, info.uptime%60);
    seq_printf(m,"Total RAM: %ld kb\n", info.totalram*info.mem_unit/1024);
    seq_printf(m,"Free RAM: %ld kb\n", info.freeram*info.mem_unit/1024);
    seq_printf(m,"Free CACHE: %ld kb\n", (cached*info.mem_unit)/1024  );
    seq_printf(m,"Used RAM: %ld kb\n", ((info.totalram-info.freeram-cached)*info.mem_unit)/1024);
    seq_printf(m,"Process count: %d\n", info.procs);

    return 0;
}

static ssize_t my_proc_write(struct file *file, const char __user *buffer, size_t count, loff_t *f_pos)
{
    return 0;
}

static int my_proc_open(struct inode *inode, struct file *file)
{
    return single_open(file, my_proc_show, NULL);
}

static struct proc_ops my_fops={
    .proc_open = my_proc_open,
    .proc_release = single_release,
    .proc_read = seq_read,
    .proc_lseek = seq_lseek,
    .proc_write = my_proc_write
};

static int __init test_init(void)
{
    struct proc_dir_entry *entry;
    entry = proc_create("ram_module", 0777, NULL, &my_fops);
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
    remove_proc_entry("ram_module", NULL);
    printk(KERN_INFO "@ram-module finalizado\n");
}

module_init(test_init);
module_exit(test_exit);