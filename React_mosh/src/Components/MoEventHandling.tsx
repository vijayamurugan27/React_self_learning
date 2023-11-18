import {MouseEvent } from "react";

function MoEventHandling() {

    let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
  //   items = [];
  
  //Event handler
  const handleClick = (e:MouseEvent) =>console.log(e)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={()=> console.log("Clicked")
            // onClick={(e) => console.log(e)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
 
}

export default MoEventHandling