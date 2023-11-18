// function HAnEvents() {
//   let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
// //   items = [];
//   const getMessage = () => {
//     // return items.length === 0 ? <p> No items Found</p> : null;
//     return items.length === 0 && <p> No items Found</p>;
//   };
//   return (
//     <>
//       <h1>List</h1>
//       {getMessage()}
//       <ul className="list-group">
//         {items.map((item) => (
//           <li className="list-group-item" 
//             key={item}
//             // onClick={()=> console.log("Clicked")
//             onClick={()=> console.log(item)            
//             }>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default HAnEvents;


function HAnEvents() {
    let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
  //   items = [];
    const getMessage = () => {
      // return items.length === 0 ? <p> No items Found</p> : null;
      return items.length === 0 && <p> No items Found</p>;
    };
    return (
      <>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" 
              key={item}
              // onClick={()=> console.log("Clicked")
              onClick={()=> console.log(item, index, "Clicked")            
              }>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default HAnEvents;
  