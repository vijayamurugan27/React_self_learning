import React, {useState} from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';
import Child5 from './Child5';


function Parent_1() {
    let first_name = 'Raju';
    let degree = 'ECE';
    let rollno = 610496

    // for Child3
    
    let data = 0;
    const [x, setX] = useState(0);
    
    const btnClick = ()=>{
        setX(x+1);
    }
    
    const btnClick10 = ()=>{
        setX(x+10);
    }


  return (
    <>
    <div>Parent_1</div>
    <hr></hr>
    <h3> Passing data from parent to child using props.</h3>
        {/* <Child1 first_name = {first_name} degree = {degree} rollno = {rollno}></Child1> */}
    <hr></hr>

    <h3> Destructuring of data in props.</h3>
        {/* <Child2 first_name = {first_name} degree = {degree} rollno = {rollno}></Child2> */}
    <hr></hr>

     
    <h3>Counter - Normal function.</h3> 
        <button onClick={()=>{btnClick()}}> Click Me {x}</button> 
        <br></br><hr></hr>
        <h1>passing value from parent to child.</h1> 
        <Child3 data =   {x}></Child3><br></br><hr></hr>
    <hr></hr>

    <h4> Passing of Function using props.</h4> 
        {/* <Child4 data = {x} fn = {setX}></Child4>  */}
    <hr></hr>

    
    
    




    </>
  )
}

export default Parent_1