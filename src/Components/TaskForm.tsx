import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
//css
import styles from "./TaskForm.module.css"
//interfaces 
import { ITask } from "../Interfaces/Task";


interface Props{
    btnText : string
    TaskList : ITask[]
    SetTaskList? : React.Dispatch<React.SetStateAction<ITask[]>>
    task? : ITask | null;
    handleUpdate?(Id : number, Title : string, Dif : number, Desc : string) : void 
}
const TaskForm = ({btnText, TaskList, SetTaskList, task, handleUpdate} : Props) => {

    const [Id, SetId] = useState<number>(0)
    const [Title, SetTitle] = useState<string>("")
    const [Desc, SetDesc] = useState<string>("")
    const [Dif, SetDif] = useState<number>(0)

    useEffect(() =>{
        if(task){
            SetId(task.Id)
            SetTitle(task.Title)
            SetDif(task.Dif)
            SetDesc(task.Desc)
        }
    }, [task])

    const AddTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(handleUpdate){
            handleUpdate(Id, Title, Dif, Desc)
        }else{
            const id = Math.floor(Math.random() * 1000)
            const NewTask : ITask = {Id, Title, Dif, Desc}
            SetTaskList!([...TaskList, NewTask])
            SetTitle("");
            SetDesc("");
        }
     }

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            SetTitle(e.target.value)
        }else if(e.target.name === "desc"){
            SetDesc(e.target.value)
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
            <div className={styles.input_container}>
                <label htmlFor="Desc">Descrição: </label>
                <input type="text" name="desc" placeholder="Descreva a tarefa" onChange={HandleChange}  value={Desc}></input>
            </div>
            <input type="submit" value={btnText}></input>
        </form>
    )
}

export default TaskForm;   