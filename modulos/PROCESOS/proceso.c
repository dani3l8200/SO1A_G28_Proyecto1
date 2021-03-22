#include <linux/module.h>
#include <linux/init.h>
#include <linux/proc_fs.h>
#include <linux/seq_file.h>
#include <linux/kernel.h>
#include <linux/sched.h>

MODULE_LICENSE("GPL-2.0");
MODULE_AUTHOR("Anthony Fernando Son Mux");
MODULE_DESCRIPTION("Modulo de procesos del sistema");
MODULE_VERSION("0.1");

/**
 * Performs a DFS on a given task's children.
 *
 * @void
 */
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

static int my_proc_show(struct seq_file *m, void *v)
{
    seq_printf(m,"[\n");
    DFS(&init_task,m);
    seq_printf(m,"\n]\n");
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

static void __exit test_exit(void)
{
    remove_proc_entry("process_module.json", NULL);
    printk(KERN_INFO "@process_module finalizado\n");
}

module_init(test_init);
module_exit(test_exit);

/*
http://web-sisop.disca.upv.es/lxr/source/linux/include/linux/sched.h#0528
https://stackoverflow.com/questions/19208487/kernel-module-that-iterates-over-all-tasks-using-depth-first-tree
http://sop.upv.es/gii-dso/es/t3-procesos-en-linux/gen-t3-procesos-en-linux.html
*/