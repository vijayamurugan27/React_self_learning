// Conditional rendering
function LGrp() {
  let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Items Found.</p> 
      </>
    );
  else
    return (
      <>
        <h1>List</h1>
        <ul className="list-group">
          {/* <li className="list-group-item">An item</li> */}
          {items.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default LGrp;
