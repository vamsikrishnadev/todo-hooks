import React,{useState,useRef,useEffect} from 'react'

function TodoForm(props){
    const focusinput=useRef()
    const [input, setInput]=useState('')
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    //for focus
    const focusTxt=(e)=>{
        e.preventDefault()
        focusinput.current.focus()
    }
    const prevTodo=useRef('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })
        setInput('')

    }
    useEffect(()=>{
        prevTodo.current=input
    },[input])
    return(
        <form onSubmit={handleSubmit}>
            <div>previous todo title: {prevTodo.current}</div>
            <input type="text" ref={focusinput} placeholder="Add todo" value={input} name="text" onChange={handleChange}></input>
            <button >Add Todo</button>
            <button onClick={focusTxt}>Focus</button>
        </form>
    )
}

export default TodoForm