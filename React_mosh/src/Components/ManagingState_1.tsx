import { useState } from "react";

function ManagingState_1() {
    let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
    // let selectedIndex = 0;
    ////Hook
    let [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key={item}
            onClick={()=> {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
 
}

export default ManagingState_1