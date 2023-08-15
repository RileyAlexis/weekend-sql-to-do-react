import Ticker from './Ticker';

function TaskList ({key, task, fetch}) {
 
const display = task.complete ? 'completed' : 'notCompleted';

    return (
        <div className={`task-listing ${display}`} >
            <Ticker id={task.id} fetch={fetch} complete={task.complete}/>
            <p className="task-title">{task.title}</p>
            <p className="due-date">Due: {task.due_date}</p>
            
            <div className="button-container">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
            </div>
        </div>


    )
}

export default TaskList;