import { TbTrash } from 'react-icons/tb';
import { TaskProps } from '../App';
import styles from './Task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
  task: TaskProps;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void
}

export function Task({task, onDelete, onComplete }: Props){

    return(
       <div className={styles.task}>
          <button 
             className={styles.checkContainerButton}
             onClick={() => onComplete(task.id)}
          >
            {task.isChecked ? <BsFillCheckCircleFill /> : <div />}
          </button>
          <p className={task.isChecked ? styles.textCompleted : ""}>
            {task.title}
          </p>
          <button className={styles.deleteTask} onClick={() => onDelete(task.id)}>
            <TbTrash fontSize={20}/>
          </button>
       </div>
    );
}