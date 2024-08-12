import {useState} from 'react'
import { CreateTodo } from '/components/createtodo.jsx'
import{ TodoItems } from '/components/todolist.jsx'
 function App() {
  const [todos,setTodos] = useState([]);
  fetch('http://localhost:3000/todo').then(async function(res){
    const json = await res.json()
    setTodos(json.todos)
  }) 
  return (
   <div>
     <CreateTodo/>
     <TodoItems todos={todos}></TodoItems>
   </div>
  )
}

export default App