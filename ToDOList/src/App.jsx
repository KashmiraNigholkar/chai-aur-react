import { useState } from 'react'

import './App.css'

function App() {
  let [todolist, setTodoList] = useState([])

  let saveToDoList = (event) => {

    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname]
      setTodoList(finalDolist)

    }
    else {
      alert("ToDo Name is already Exist..")
    }
    event.preventDefault();
  }

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNumber={index}todolist={todolist} setTodoList={setTodoList} />
    )
  })

  return (<div className='App'>
    <h1 className='h1 '> ToDoList</h1>
    <form action="action" onSubmit={saveToDoList}>
      <input type="text" name='toname' />
      <button>Save</button>
    </form>
    <div className='outerDiv'>
      <ul>
        {list}
      </ul>
    </div>

  </div>

  )
}

export default App

function ToDoListItems({value,indexNumber,todolist,setTodoList}) {

  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexNumber)
  setTodoList(finalData)
  }
 
  return (
    <li>{value}<span onClick={deleteRow} style={{cursor:"pointer",color:"red"}}>&times;</span></li>

  )
}