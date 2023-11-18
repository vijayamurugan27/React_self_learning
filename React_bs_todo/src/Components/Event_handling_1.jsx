import React, {useState} from 'react'

function Event_handling_1() {

        // let x = 0;
        
        const [x, setX] = useState(0);
        
    const btnClick = () => {
        // alert('You have Clicked the button, it is an event function.', x)

        setX(x+1);
        
    }

  return (
    <>
    <div>Event_handling_1</div>
    <button onClick={()=>{btnClick()}}>Click ME</button>
    <h1>Number of times the Button Clicked:   {x}</h1>
    </>
  )
}

export default Event_handling_1