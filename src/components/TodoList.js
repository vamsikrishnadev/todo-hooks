import React,{useState,useEffect,useRef} from 'react'
import TodoForm from './TodoForm'

function TodoList(){
    const [todos,setTodos]=useState([])
    const [todosCount,setTodosCount]=useState(0)
    

    useEffect(()=>{
        console.log("todos count updated")
        
        setTodosCount(todos.length)
    },[todos])
    
    const addTodo=(todo)=>{
        const newTodo=[...todos,todo]
        setTodos(newTodo)
        //observe difference
        console.log(todos)
        console.log(...todos)
        }
    const removeTodo=(e)=>{
        console.log(todos)
        const newTodoList=todos.filter(todo=>{
            
            return todo.id!=e.target.id
        })
        console.log(newTodoList)
        setTodos(newTodoList)
    }
    return(
        <div>
            <div>What's the plan today</div>
            <div>Number of todos {todosCount}</div>
            <TodoForm onSubmit={addTodo}/>
            {
                todos.map((todo,index)=>(
                    <div key={todo.id} id={todo.id} onClick={removeTodo}>{todo.text}</div>
                ))
            }
        </div>
    )
}

export default TodoList