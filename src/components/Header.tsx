import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './Header.module.css';
import logo02 from '../assets/Logo02.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {

    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event?.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={logo02} alt="" />
            <form className={styles.formNewTask} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Adicione nova tarefa'
                    onChange={onChangeTitle}
                    value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle  size={20}/>
                </button>
            </form>
        </header>
    );
}