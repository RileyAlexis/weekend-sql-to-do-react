
function TaskList ({task}) {
    return (
        <div className="task-listing">
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