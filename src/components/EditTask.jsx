import axios from 'axios';


function EditTask ({setDisplayEditWin, task, fetch}) {

let title = '';
let due_date = '';
let due_time = ''
let notes = '';

const submitEdits = (event) => {
    event.preventDefault();
    axios.put(`todo/edit/${task.id}`, {
        title: title,
        due_date: due_date,
        due_time: due_time,
        notes: notes
        })
        .then((response) => {
            fetch();
            exitWin();
        })
        .catch((error) => {
            console.log(error);
        })
}

const exitWin = () => {
    setDisplayEditWin(false);
}

    return (
        <div className="newTask-box">
        <button className="delete" onClick={exitWin}>X</button>
            <h3>Edit Task {task.title}</h3>
            <div className="form-box">
            <form onSubmit={submitEdits}>
            <label>Title:</label>
            <input required 
                    placeholder={task.title}
                    type="text" 
                    max-length={255}
                    onChange={event => title = event.target.value}/>
            <br />
            <label>Due Date:</label>
            <input type="date" 
                    placeholder={task.due_date}
                   onChange={event => due_date = event.target.value} />
            <br />
            <label>Due Time:</label>
            <input type="time"
                    placeholder={task.due_time}
                    onChange={event => due_time = event.target.value}/>
            <br />
            <label>Notes:</label>
            
            <textarea maxLength={255} rows={5} cols={51} className="notes-box" 
                    placeholder={task.notes}
                        onChange={event => notes = event.target.value}/>
        
            <button className="edit" type="submit">Submit</button>
            </form>        
            </div>
        </div>



    )
}

export default EditTask;