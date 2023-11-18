import { useState } from "react";
// Passing Data via Props

interface Props{
  items: string[];
  heading : string;
  onSelectItem:(item: string)=> void;
}

function Props13({items, heading, onSelectItem}: Props ) {
    // let items = ["New york", "San francisco", "Tokyo", "London", "Paris"]; //moving to App components
    // as these are props 

    // let selectedIndex = 0;
    ////Hook
    let [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key={item}
            onClick={()=> {setSelectedIndex(index); onSelectItem(item);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
 
}

export default Props13