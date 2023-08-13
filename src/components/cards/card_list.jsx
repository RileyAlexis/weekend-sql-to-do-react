import React from 'react';
import './card_list.css';

function CardList(props) {

    
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <input className="roundedCheckBox" type="checkbox" />
                {props.taskList.map(tasks => 
                <button className="taskButton" 
                key={tasks.id}>
                    {tasks.title} - {tasks.due_date}
                    </button>)}
                
            
        </div>
    )
}

export default CardList;