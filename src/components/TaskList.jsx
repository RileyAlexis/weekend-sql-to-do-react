import {useState} from 'react';
import axios from 'axios';
import Ticker from './Ticker';
import swal from 'sweetalert';

import EditTask from './EditTask';

function TaskList ({key, task, fetch}) {
 
const display = task.complete ? 'completed' : 'notCompleted';
const [displayEditWin, setDisplayEditWin] = useState(false);

const deleteTask = () => {
    swal({
        title: `Delete ${task.title}?`,
        text: 'Are you sure?',
        icon: "warning",
        buttons: true,
        dangerMode: true
        })
        .then((value) => {
            if (value) {
            axios.delete(`todo/${task.id}`)
            .then((response) => {
                fetch();
            }).catch((error) => {
                console.log(error);
            })
        }
    }
        )
}

const toggleWin = (dis) => {
    if (dis) return {display: 'flex'}
    else return {display: 'none'}
  }

const editTask = () => {
    setDisplayEditWin(true);
}

    return (
        <div className={`task-listing ${display}`} >
            <Ticker id={task.id} fetch={fetch} complete={task.complete}/>
            <div className="task-title">{task.title}</div>
            <div className="due-date">Due: {task.frm_due_date}</div>
            
        <div className="button-container">
            <button onClick={deleteTask} className="delete">X</button>
            <button onClick={editTask} className="edit">Edit</button>
            </div>
            <div className="newTask-container" style={toggleWin(displayEditWin)}>
        <EditTask setDisplayEditWin={setDisplayEditWin} task={task} fetch={fetch}/>
      </div>
        </div>


    )
}

export default TaskList;