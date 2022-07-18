import React, { useState } from 'react';
//CSS
import styles from "./app.module.css"

//components
import Footer from './Components/footer';
import Header from './Components/header';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

//interfaces 
import { ITask } from "./Interfaces/Task";

function App() {

  const [tasklist, SetTaskList] = useState<ITask[]>([])

  const DeleteTask = (id : number) => {
    SetTaskList(
      tasklist.filter(task =>{
        return task.Id !== id;
      })
    )
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você planeja fazer? </h2>
          <TaskForm btnText="Criar tarefa" TaskList ={tasklist} SetTaskList={SetTaskList}/>
        </div>
        <div>
          <h2> Suas tarefas </h2>
          <TaskList tasklist ={tasklist} handleDelete={DeleteTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
