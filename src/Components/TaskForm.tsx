import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
//css
import styles from "./TaskForm.module.css"
//interfaces 
import { ITask } from "../Interfaces/Task";

interface Props{
    btnText : string
    TaskList : ITask[]
}
const TaskForm = ({btnText, TaskList} : Props) => {

    const [Id, SetId] = useState<number>(0)
    const [Title, SetTitle] = useState<string>("")
    const [dif, SetDif] = useState<number>(0)

    const AddTaskHandler = () => {

    }

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            SetTitle(e.target.value)
        }else{
            SetDif(parseInt(e.target.value))
        }
        console.log(Title)
        console.log(dif)
    };

    return(
        <form onSubmit={AddTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="Title">Titulo: </label>
                <input type="text" name="title" placeholder="Qual a sua tarefa?" onChange={HandleChange}></input>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="dificulty">Dificuldade: </label>
                <input type="text" name="difivulty" placeholder="Dificuldade da tarefa?"></input>
            </div>
            <input type="submit" value={btnText}></input>
        </form>
    )
}

export default TaskForm;   