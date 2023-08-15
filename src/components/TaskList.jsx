
function TaskList ({task}) {
    return (
        <div className="task-list">
            <p className="task-title">{task.title}</p>
            <p className="due-date">Due: {task.due_date}</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
        </div>


    )
}

export default TaskList;