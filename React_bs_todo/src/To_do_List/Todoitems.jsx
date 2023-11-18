import './Css/Todoitems.css'
 
import circle from './Assets/circle.png';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';

import React from 'react'

function Todoitems({no, display, text,SetTodos}) {

    const delete_2 = (no)=>{  let data = JSON.parse(localStorage.getItem("todos"));
                            data = data.filter((todo)=> todo.no!==no);
                            SetTodos(data);
                            }
    const toggle = (no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i=0; i<data.length;i++)
        {
            if (data[i].no===no){
                if(data[i].display===""){
                    data[i].display="line-through";
                }
                else{
                    data[i].display="";
                }
                break;
            }
        }
        SetTodos(data);
     }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={circle} alt='Non -  Completed'></img>:<img src={tick} alt='delete'></img>}
                       
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={()=> {delete_2(no)}} src={cross} alt='Completed'></img>







    </div>
  )
}

export default Todoitems