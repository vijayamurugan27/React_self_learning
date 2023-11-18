import React, {useRef, useState} from 'react'
import Child5 from './Child5';

function Parent_2() {

    const inputRef = useRef(null);
    const [data,setData] = useState([]);

  return (
    <>
    <div>Parent_2</div>

    {/* <h3>Using useRef to get any element </h3> */}

        {/* <input type='text' ></input> &ensp; */}
        {/* <button>Submit</button> &ensp; */}

        {/* <input type='text' ref = {inputRef}></input> &ensp; */}
        {/* <button onClick={()=>{console.log(inputRef.current.value)}}>Submit</button> &ensp; */}
                    {/* <button onClick={()=>{console.log(inputRef)}}>Submit</button> &ensp; */}

        <input type='text' ref = {inputRef}></input> &ensp;
        <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button> &ensp;
        {data.map((item, index)=>{return <h2 key={index}>{item}</h2>})}
    
    <Child5/>
        
</>
  )
}

export default Parent_2