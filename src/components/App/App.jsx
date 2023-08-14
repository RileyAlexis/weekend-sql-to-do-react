import React from 'react';
// import {useState, useEffect} from 'react';
import CardList from '../cards/card_list.jsx';
import axios from 'axios';
import '../App/App.css';

const useState = React.useState;
const useEffect = React.useEffect;

function App () {
  
  const [taskList, setTaskList] = useState([]);


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
    console.log(taskList);
  }, []);


  return (
    <div className="container">
      <div className="cardlist">
      <CardList title="Task List" taskList={taskList} />
      </div>










      </div>









  );

}

export default App
