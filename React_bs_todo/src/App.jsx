import React from 'react'
import { Navbar } from './Components/Navbar'
import Conditional_Rendering from './Components/Conditional_Rendering';
import Event_handling_1 from './Components/Event_handling_1';
import First_Component_1 from './Components/First_Component_1';
import Parent_1 from './Props/Parent_1';
import Parent_2 from './Props/Parent_2';
import Todo from './To_do_List/Todo';


let x = "Web development from Vijaya Murugan.A"

let arr = ["user1", "user2", "user3", "user4", "user5"];

export const App = () => {
  return (
    <>
        
        {/* <div>App</div>
        <Navbar/> */}

        {/* displaying of single data and an array.<br></br>
        {x}
        {arr.map((user) => <h1>{user}</h1>)} */}
        
        {/* <h1>Conditional Rendering.</h1>
        <h2><Conditional_Rendering/></h2>    */}


        {/* <h1>Event Handling.</h1>
        <Event_handling_1/>  */}

        {/* <First_Component_1></First_Component_1> */}

        {/* <h1>Props using parent and child</h1>
        <Parent_1/> */}

        {/* <Parent_2/> */}

        <Todo></Todo>

    </>
    )
} 


export default App