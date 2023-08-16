import axios from 'axios';
import Ticker from './Ticker';
import swal from 'sweetalert';

function TaskList ({key, task, fetch}) {
 
const display = task.complete ? 'completed' : 'notCompleted';

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

    return (
        <div className={`task-listing ${display}`} >
            <Ticker id={task.id} fetch={fetch} complete={task.complete}/>
            <span className="task-title">{task.title}</span>
            <span className="due-date">Due: {task.frm_due_date}</span>
            
            <div className="button-container">
                {/* Todo - create edit button functionality */}
            {/* <button className="edit">Edit</button> */}
            <button onClick={deleteTask} className="delete">Delete</button>
            </div>
        </div>


    )
}

export default TaskList;