import { useState } from 'react';
import axios from 'axios';


function EditTask ({setDisplayEditWin, task, fetch}) {

const [editTitle, setEditTitle] = useState(task.title);
const [editDueDate, setEditDueDate] = useState(task.due_date);
const [editDueTime, setEdutDueTime] = useState(task.due_time);
const [editNotes, setEditNotes] = useState(task.notes);

const submitEdits = (event) => {
    event.preventDefault();
    axios.put(`todo/edit/${task.id}`, {
        title: editTitle,
        due_date: editDueDate,
        due_time: editDueTime,
        notes: editNotes
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
                    
                    value={editTitle}
                    type="text" 
                    max-length={255}
                    onChange={event => setEditTitle(event.target.value)}
                    />
            <br />
            <label>Due Date:</label>
            <input type="date" 
                    value={editDueDate}
                   onChange={event => setEditDueDate(event.target.value)} />
            <br />
            <label>Due Time:</label>
            <input type="time"
                    value={editDueTime}
                    onChange={event => setEdutDueTime(event.target.value)}/>
            <br />
            <label>Notes:</label>
            
            <textarea maxLength={255} rows={5} cols={51} className="notes-box" 
                    value={editNotes}
                        onChange={event => setEditNotes(event.target.value)}/>
        
            <button className="edit" type="submit">Submit</button>
            </form>        
            </div>
        </div>



    )
}

export default EditTask;