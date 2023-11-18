import EventHandling from "./Components/EventHandling";
import HAnEvents from "./Components/HAnEvents";
import LGrp from "./Components/LGrp";
import LGrp2 from "./Components/LGrp2";
import ListGroup from "./Components/ListGroup";
import MoEventHandling from "./Components/MoEventHandling";
import LGrp1 from "./Components/LGrp1";
import ManagingState_1 from "./Components/ManagingState_1";
import Props12 from "./Components/Props_1/Props12";
import Props13 from "./Components/Props_1/Props13";
import Alert_1 from "./Components/Props_1/Alert_1";
import Alert_2 from "./Components/Props_1/Alert_2";
import Buttons from "./Components/Props_1/Buttons";

import Alert_3 from "./Components/Props_1/Alert_3";
import Buttons_1 from "./Components/Props_1/Buttons_1";

import {useState}  from 'react';

// import Message from "./Message";


function App() {
  // let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) =>{
  //   console.log(item);
  

  const [alertVisible, setAlertVisible] = useState(false);


  return (
    <>
    {/* <div>App</div> */}
    {/* <Message></Message> */}
    {/* <ListGroup/> */}
    {/* <LGrp></LGrp> */}
    {/* <LGrp1></LGrp1> */}
    {/* <LGrp2></LGrp2> */}
    {/* <HAnEvents></HAnEvents> */}
    {/* <EventHandling></EventHandling> */}
    {/* <MoEventHandling></MoEventHandling> */}
    {/* <ManagingState_1/> */}
    {/* <Props12 items={items} heading=" Cities"/> */}
    {/* <Props13 items={items} heading=" Cities" onSelectItem={handleSelectItem}/> */}
      {/* <Alert_1 text = "Hello world" /> */}

      {/* <Alert_2>
        Hello <span> World </span>
      </Alert_2>
      <Buttons color="danger" onClick={()=> console.log('Clicked') }> My Buttons </Buttons>
      <Buttons color="secondary" onClick={()=> console.log('Clicked') }> My Buttons </Buttons> */}
      
      
      <div>
            { alertVisible && <Alert_3 onClose={()=> setAlertVisible(false)}>  Hello <span> World </span> </Alert_3> }
            <Buttons_1 color="danger" onClick={()=> setAlertVisible(true) }> My Buttons </Buttons_1>

      </div>
      
    
    </>
  )
}

export default App;