//React Imports
import {useState} from 'react';
//Libraries
import axios from 'axios';
import swal from 'sweetalert';
//Components
import Ticker from './Ticker';
import EditTask from './EditTask';

function TaskList ({task, fetch}) {
 
//Var to toggle className for each task item
const display = task.complete ? 'completed' : 'notCompleted';
//State to toggle visilibty of edit element
const [displayEditWin, setDisplayEditWin] = useState(false);

const compareDate = new Date(task.due_date);
const timeElapsed = Date.now();
const currentDay = new Date(timeElapsed);

//Toggles className for overDue items(sets background red, font white)
const overDue = currentDay.toISOString() > compareDate.toISOString() ? 'overdue' : '';

//Calls sweet alert window for confirmation and then deletes task from database
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

//Provides CSS to hide/display window
const toggleWin = (dis) => {
    if (dis) return {display: 'flex'}
    else return {display: 'none'}
  }

  //Onclick of edit button triggers display change of edit window
const editTask = () => {
    setDisplayEditWin(true);
}

    return (
        <div className={`task-listing ${display} ${overDue}`} >
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