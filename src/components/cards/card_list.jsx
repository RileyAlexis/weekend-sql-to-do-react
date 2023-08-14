import React from 'react';
import './card_list.css';

function CardList(props) {

    
    return (
        <div className="card">
            <h3>{props.title}</h3>
                {props.taskList.map((tasks) =>
                <>
                <table>
                    <tbody>
                        <tr>
                <td><input className="roundedCheckBox" type="checkbox" /></td>
                <td><button className="taskButton" 
                key={tasks.id}>
                    <span className="title">{tasks.title} </span>
                    <span className="sub">{tasks.due_date} </span>
                    </button></td>
                    </tr>
                    </tbody>
                    </table>
                    
                    </>)}
                    
                
                   
            
        </div>
    )
}

export default CardList;