export function TodoItems({todos}){
 return(
    <div>
      {
        todos.map(function (todo){
          return<div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={async()=>{await fetch('http://localhost:3000/completed',{
            method:'PUT',
            body:JSON.stringify({
              id : todo._id
            }),
            headers: {
              "Content-Type":"application/json"
            }
            })}}
            >{todo.status==true? "Completed" : "Mark as completed"}</button>
          </div>
        })
      }
    </div>
  )
}