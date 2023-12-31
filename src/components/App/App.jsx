//React Imports
import React from 'react';
import {useState, useEffect} from 'react';
//Libraries
import axios from 'axios';
//Components
import TaskList from '../TaskList';
import Header from '../Header';
import AddTask from '../AddTask';

function App () {
  
  const [taskList, setTaskList] = useState(null);
  const [markForDelete, setMarkForDelete] = useState('');
  const [displayWin, setDisplayWin] = useState(false);
  const [currentDay, setCurrentDay] = useState(null);

//Gets today's date and stores in currentDay state
  const getToday = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setCurrentDay(today.toDateString());
  }

  //Toggles visibility of the AddNewTask element
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
    getToday();
  }, []);

  

// Todo List - 
//  - Allow repeating tasks
//  - DONE - Allow editing of tasks
//  - Set icons for each task
// - Order by priority
// - Include additional data such as URL on mouseOver
// - Allow grouping of tasks into lists
// - DONE - Fix weird sorting issue when marking as complete - fixed by sorting array on server

  return (
    <div className="container">
      <Header setDisplayWin={setDisplayWin} currentDay={currentDay} title="Task List"/>
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
