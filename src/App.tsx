import React from 'react';
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
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você planeja fazer? </h2>
          <TaskForm btnText="Criar tarefa"/>
        </div>
        <div>
          <h2> Suas tarefas </h2>
          <TaskList/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
