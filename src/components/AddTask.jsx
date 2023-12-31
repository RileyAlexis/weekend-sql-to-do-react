import {useState} from 'react';
import axios from 'axios';

function AddTask({setDisplayWin, fetch}) {

const [title, setTitle] = useState('');
const [due_date, setDue_date] = useState('');
const [due_time, setDue_time] = useState('');
const [notes, setNotes] = useState('');

const addTask = (event) => {
    event.preventDefault();
    axios.post('/todo/', {title: title, 
                    due_date: due_date, 
                    due_time: due_time, 
                    notes: notes,
                    complete: false})
    .then((response) => {
        fetch();
        setDisplayWin(false);
    }).catch((error) => {
        console.error(error);
    });
    setTitle('');
    setDue_date('');
    setDue_time('');
    setNotes('');
}

const exitWin = () => {
    setDisplayWin(false);
}

    return (
        <div className="newTask-box">
            <button className="delete" onClick={exitWin}>X</button>
            <h3>Add New Task</h3>
            <div className="form-box">
            <form onSubmit={addTask}>
            <label>Title:</label>
            <input required 
            value={title}
                    type="text" 
                    max-length={255}
                    onChange={event => setTitle(event.target.value)}/>
            <br />
            <label>Due Date:</label>
            <input type="date" 
            value={due_date}
                   onChange={event => setDue_date(event.target.value)} />
            <br />
            <label>Due Time:</label>
            <input type="time"
                    value={due_time}
                    onChange={event => setDue_time(event.target.value)}/>
            <br />
            <label>Notes:</label>
            
            <textarea maxLength={255} rows={5} cols={51} className="notes-box" 
                    value={notes}
                        onChange={event => setNotes(event.target.value)}/>
        
            <button className="edit" type="submit">Add Task</button>
            </form>
            </div>
            
        </div>

    )
}

export default AddTask;