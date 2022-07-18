import React, { useState } from 'react';
//CSS
import styles from "./app.module.css"

//components
import Footer from './Components/footer';
import Header from './Components/header';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Modal from "./Components/Modal";

//interfaces 
import { ITask } from "./Interfaces/Task";

function App() {

  const [tasklist, SetTaskList] = useState<ITask[]>([])
  const [taskupdate, SetTaskUpdate] = useState<ITask | null>(null)

  const DeleteTask = (id : number) => {
    SetTaskList(
      tasklist.filter(task =>{
        return task.Id !== id;
      })
    )
  }
  const AddOrShowModal = (display : boolean) =>{
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const EditTask = (task : ITask) : void =>{
    AddOrShowModal(true);
    SetTaskUpdate(task);
  }

  const UpdateTask = (Id : number, Title : string, Dif : number) => {
    const UpDate : ITask = {Id, Title, Dif}

    const UpDateItems = tasklist.map((task) =>{
      return task.Id === UpDate.Id ? UpDate : task
    })

    SetTaskList(UpDateItems)
    AddOrShowModal(false);
    
  }
  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar tarefa" TaskList={tasklist} task={taskupdate} handleUpdate={UpdateTask}/>} title={''}/>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você planeja fazer? </h2>
          <TaskForm btnText="Criar tarefa" TaskList ={tasklist} SetTaskList={SetTaskList} />
        </div>
        <div>
          <h2> Suas tarefas </h2>
          <TaskList tasklist ={tasklist} handleDelete={DeleteTask} handleEdit={EditTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
