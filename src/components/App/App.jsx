import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TaskList from '../TaskList';
import Header from '../Header';
import AddTask from '../AddTask';

function App () {
  
  const [taskList, setTaskList] = useState(null);
  const [markForDelete, setMarkForDelete] = useState('');
  const [displayWin, setDisplayWin] = useState(false);

  const toggleWin = (dis) => {
    if (dis) return {display: 'flex'}
    else return {display: 'none'}
  }

  const fetchTodoList = () => {
    axios.get('/todo/')
    .then((response) => {
      setTaskList(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    fetchTodoList();
  }, []);

  

// Todo List - 
//  - Allow repeating tasks
//  - Allow editing of tasks
//  - Set icons for each task
// - Order by priority
// - Include additional data such as URL on mouseOver
// - Allow grouping of tasks into lists
// - DONE - Fix weird sorting issue when marking as complete - fixed by sorting array on server

  return (
    <div className="container">
      <Header setDisplayWin={setDisplayWin} title="Task List"/>
      <div className="task-list-container">
        {taskList?.map((task) => <TaskList key={task.id} task={task} fetch={fetchTodoList} />)}
        </div>
      <div className="newTask-container" style={toggleWin(displayWin)}>
        <AddTask setDisplayWin={setDisplayWin} fetch={fetchTodoList}/>
      </div>
      
    </div>

  );

}

export default App;
