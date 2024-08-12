import { useState } from "react"

export function CreateTodo() {
  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");
  
  return (
    <div>
      <input id="title" type="text" placeholder="enter title" onChange={function(e){
      const value = e.target.value;
      setTitle(value)
      }}/> <br/>
      <input id="description" type="text" placeholder="enter description" onChange={function(e){
      const value = e.target.value;
      setDesc(value)
      }}/><br/>
      <button onClick={async ()=>
      {await fetch('http://localhost:3000/todo',{
             method:'POST',
            body : JSON.stringify({
              title: title,
              description: desc
            }),
      headers: {
        "Content-Type":"application/json"
      }}
            ).then(async function(res){
              const json = await res.json();
              alert("todo added")
            })}
      }>Add ToDo</button> 
    </div>
  )
}