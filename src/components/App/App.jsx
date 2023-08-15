import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TaskList from '../TaskList';
import Header from '../Header';

function App () {
  
  const [taskList, setTaskList] = useState(null);
  const [markForDelete, setMarkForDelete] = useState('');


  const fetchTodoList = () => {
    axios.get('/todo/')
    .then((response) => {
      setTaskList(response.data);
      console.log('Fetching Data', response.data);
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
      <div className="task-list">
        {taskList?.map((task) => <TaskList key={task.id} task={task} />)}
      </div>










      </div>









  );

}

export default App
