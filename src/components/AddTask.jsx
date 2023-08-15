import {useState} from 'react';
import axios from 'axios';

function AddTask({fetch}) {

const [title, setTitle] = useState('');
const [due_date, setDue_date] = useState('');
const [due_time, setDue_time] = useState('');
const [notes, setNotes] = useState('');

const addTask = (event) => {
    event.preventDefault();
    axios.post('/todo/', {title: title, 
                    due_date: due_date, 
                    due_time: due_time, 
                    notes: notes})
    .then((response) => {
        fetch();
    }).catch((error) => {
        console.error(error);
    });
}

    return (
        <div className="newTask">
            <form onSubmit={addTask}>
            <label>Title:</label>
            <input required 
            value={title}
                    type="text" 
                    max-length={255}
                    onChange={event => setTitle(event.target.value)}/>
            <br/>
            <label>Due Date:</label>
            <input type="date" 
            value={due_date}
                   onChange={event => setDue_date(event.target.value)} />
            <br/>
            <label>Due Time:</label>
            <input type="time"
                    value={due_time}
                    onChange={event => setDue_time(event.target.value)}/>
                    {console.log(due_time)}
            <br/>
            <label>Notes:</label>
            <br/>
            <textarea className="notes-box" 
                        onChange={event => setNotes(event.target.value)}/>
            <br/><br/>
            <button className="edit" type="submit">Add Task</button>
            </form>
        </div>

    )
}

export default AddTask;