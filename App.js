import logo from './logo.svg';
import React, {useState} from 'react';
import Todolist from './Todolist';
import './App.css';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newtodos = [...todos,task];
    setTodos(newtodos);
    setTask("");
  }
  const deleteHandler = (indexvalue) =>{
    const newTodos = todos.filter((todos,index) => index !== indexvalue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <div className='card-title'><h2>TO DO MANAGEMENT APPLICATION</h2></div>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp; &nbsp; 
              <input type="submit" value="Add" name="Add"/>
            </form>
           <Todolist todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
        </center>
      
    </div>
  );
}

export default App;
