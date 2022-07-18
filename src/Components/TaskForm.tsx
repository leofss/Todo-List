import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
//css
import styles from "./TaskForm.module.css"
//interfaces 
import { ITask } from "../Interfaces/Task";

interface Props{
    btnText : string
    TaskList : ITask[]
    SetTaskList? : React.Dispatch<React.SetStateAction<ITask[]>>
}
const TaskForm = ({btnText, TaskList, SetTaskList} : Props) => {

    const [Id, SetId] = useState<number>(0)
    const [Title, SetTitle] = useState<string>("")
    const [Dif, SetDif] = useState<number>(0)

    const AddTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000)

        const NewTask : ITask = {Id, Title, Dif}

        SetTaskList!([...TaskList, NewTask])

        SetTitle("");

        console.log(TaskList)
     }

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            SetTitle(e.target.value)
        }else{
            SetDif(parseInt(e.target.value))
        }
    };

    return(
        <form onSubmit={AddTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="Title">Titulo: </label>
                <input type="text" name="title" placeholder="Qual a sua tarefa?" onChange={HandleChange} value={Title}></input>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="dificulty">Dificuldade: </label>
                <input type="text" name="difivulty" placeholder="Dificuldade da tarefa?" onChange={HandleChange}  value={Dif}></input>
            </div>
            <input type="submit" value={btnText}></input>
        </form>
    )
}

export default TaskForm;   