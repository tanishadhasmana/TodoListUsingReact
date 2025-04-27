import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [inputvalue, setInput]= useState("");
const [todolist,setTodo]= useState([]);
function  handleChange(e){
  // console.log(e.target.value);
  setInput(e.target.value);
  
}

function handleClick(){
  let newlist=[...todolist,{
    id:Date.now(),task: inputvalue
  }];
  setTodo(newlist);
  setInput("");
  // console.log("clicked");
  
}
function handleDeletion(id){
  const itemToEdit = todolist.find(item => item.id === id);
  const updatedTask =  itemToEdit.task;  
  if (updatedTask !== null && updatedTask.trim() !== "") {
    const updatedList = todolist.map(item => {
      if (item.id === id) {
        return { ...item, task: updatedTask };
      }
      return item;
    });
    setTodo(updatedList);
  }
}

function handleEdition(id){
  let item = todolist.find(item => item.id === id);
  setInput(item.task);  
  setTodo(todolist.filter(item => item.id !== id));

}
  return (
    <>
    <div className="container">
      <div className="heading"><h1>Todo List</h1></div>
      <div ><input  id="addip"  type="text" value={inputvalue} onChange={function(e){
        handleChange(e)
      }} /> 
       <button type="button" className='btn' onClick={handleClick}>Add</button>
       
       <ul>
  {todolist.map((value) => (
    <div key={value.id}>
      <li>
        {value.task}
      </li>
      <button type="button" className='btn' onClick={() => handleDeletion(value.id)}>Remove</button>
      <button type="button" className='btn'  onClick={() => handleEdition(value.id)}>Edit</button>
    </div>
  ))}
</ul>


      </div>
    </div>
    </>
  )
}

export default App
