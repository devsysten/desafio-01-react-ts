import { TaskProps } from '../App';
import styles from './Tasks.module.css';
import { Task } from './Task';
import ClipBoard from '../assets/Clipboard.svg';
interface Props {
   tasks:  TaskProps[];
   onDelete: (taskId: string) => void;
   onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const taskTotal = tasks.length;
    const taskFull = tasks.filter(task => task.isChecked).length;
    return (
        <section className={styles.headerList}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskTotal}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Tarefas concluídas</p>
                    <span>{taskFull} de {taskTotal}</span>
                </div>
            </header>
            <div className={styles.list}>
              {
                tasks.map((task) => (
                    <Task 
                       key={task.id} 
                       task={task} 
                       onDelete={onDelete}
                       onComplete={onComplete}
                    />
                ))
              }
              {tasks.length <= 0 && (
                <section className={styles.empty}>
                    <img src={ClipBoard} alt="" />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas!</p>
                        <span>Crie tarefas e organise seus itens a fazer...</span>
                    </div>
                </section>
              )}
            </div>
        </section>
    );
}