import React from 'react';

//interface
import {ITask} from '../Interfaces/Task'
//css
import styles from "TaskList.module.css"

interface Props{
    tasklist : ITask[];
}

const TaskList = ({tasklist} : Props) => {
    return(
    <>
      {tasklist.length > 0 ?(
        tasklist.map((task) => (
            <div key={task.Id}>
                <div>
                    <h4>{task.Title}</h4>
                    <p>Dificuldade: {task.Dif}</p>
                </div>
                <div>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                </div>
            </div>
        ))
      ): (
        <p> Não tem</p>
      )}
    </>
    );
};

export default TaskList