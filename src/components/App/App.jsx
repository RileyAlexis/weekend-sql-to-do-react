import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TaskList from '../TaskList';
import Header from '../Header';
import AddTask from '../AddTask';

function App () {
  
  const [taskList, setTaskList] = useState(null);
  const [markForDelete, setMarkForDelete] = useState('');


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


  return (
    <div className="container">
      <Header title="Task List"/>
      <div className="task-list-container">
        {taskList?.map((task) => <TaskList key={task.id} task={task} fetch={fetchTodoList} />)}
        </div>
      <div className="newTask-container">
        <AddTask fetch={fetchTodoList}/>

      </div>









      </div>









  );

}

export default App
