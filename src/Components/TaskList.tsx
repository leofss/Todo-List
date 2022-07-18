import React from 'react';

//interface
import {ITask} from '../Interfaces/Task'

//css
import styles from "./TaskList.module.css"

interface Props{
    tasklist : ITask[];
    handleDelete(id: number) : void;
    handleEdit(task : ITask) : void
}

const TaskList = ({tasklist, handleDelete, handleEdit} : Props) => {
    return(
    <>
      {tasklist.length > 0 ?(
        tasklist.map((task) => (
            <div key={task.Id} className={styles.task}>
                <div className={styles.details}>
                    <h4>{task.Title}</h4>
                    <p>Dificuldade: {task.Dif}</p>
                </div>
                <div className={styles.actions}>
                    <i className="bi bi-pencil" onClick={()=>{handleEdit(task)
                    }}></i>
                    <i className="bi bi-trash" onClick={()=>{handleDelete(task.Id)
                    }}></i>
                </div>
            </div>
        ))
      ): (
        <p>Você não possui tarefas no momento!</p>
      )}
    </>
    );
};

export default TaskList

