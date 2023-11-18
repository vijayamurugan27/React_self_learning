// Conditional rendering
function LGrp1() {
    let items = ["New york", "San francisco", "Tokyo", "London", "Paris"];
    // items = [];
      return (
        <>
            <h1>List</h1>
          {items.length ===0 ? <p> No items Found</p>: null}
            <ul className="list-group">           
                {items.map((item) => (
                <li className="list-group-item" key={item}>
                    {item}
                </li>
            ))}
          </ul>
        </>
      );
  }
export default LGrp1;
  