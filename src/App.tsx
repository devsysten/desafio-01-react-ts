import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';

import './global.css';

export interface TaskProps {
  id: string;
  title: string;
  isChecked: boolean;
}

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export function App() {

  const [ tasks, setTasks ] = useState<TaskProps[]>([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  },[]);

  function setTasksAndSave(newTasks: TaskProps[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string){
    return (
      setTasksAndSave([...tasks, 
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isChecked: false 
        }
      ])
    )
  }

  function onDelete(taskId: string){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string){
     const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
     });
     setTasksAndSave(newTasks);
  }
  
  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
         tasks={tasks} 
         onDelete={onDelete}
         onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

