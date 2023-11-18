import './Css/Todo.css'


import React, { useState,useRef, useEffect } from 'react'
import Todoitems from './Todoitems'


let count =0;

function Todo() {

    const [todos, SetTodos] = useState([]);
    const inputRef = useRef(null);
    const add = ()=>{
        SetTodos([...todos,{no:count++, text:inputRef.current.value, display:""}])
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count)
    }
    useEffect(()=>{
        SetTodos(JSON.parse(localStorage.getItem('todos')));
        count = localStorage.getItem("todos_count");
    },[])
 
    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos))
        }, 100);
     },[todos])
     
     
  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List.</div>
                
                <div className='todo-add'>

                    <input ref={inputRef}
                    type='text' placeholder='Add your task' className='todo-input'></input>
                    &ensp;&ensp;
                    <div 
                        onClick={()=> {add( )}}
                        className='todo-add-btn'>ADD</div>

                    </div>

                    <div className="todo_list">
                        {todos.map((item,index)=>{
                            return <Todoitems key={index} SetTodos = {SetTodos} no = {item.no} display = {item.display} text = {item.text}></Todoitems>
                        })}

                     </div>

        
        
        
        
        
    </div>
  )
}

export default Todo