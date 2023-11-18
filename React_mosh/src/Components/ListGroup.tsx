// import {Fragment} from "react";// instead of multiple elements, Fragments allow us to make it a simgle element.


// // <Fragment</Fragment> is similiar as <></>

//     items.map(item =><li>{item}</li>)

//   return (
//     <Fragment>
//         <h1>List</h1>
//             <ul className="list-group">
//               <li className="list-group-item">An item</li>
//               <li className="list-group-item">A second item</li>
//               <li className="list-group-item">A third item</li>
//               <li className="list-group-item">A fourth item</li>
//               <li className="list-group-item">And a fifth one</li>
//             </ul>        
//     </Fragment>
//   );
// }

// export default ListGroup;


import {Fragment} from "react";// instead of multiple elements, Fragments allow us to make it a simgle element.


// <Fragment</Fragment> is similiar as <></>
function ListGroup() {
    const items = [ 'New york', 'San francisco', 'Tokyo', 'London', 'Paris' ];

   // // items.map(item =><li>{item}</li>) // normal map function.

  return (
    <Fragment>
        <h1>List</h1>
            <ul className="list-group">
              {/* <li className="list-group-item">An item</li> */}
              {items.map((item) =><li className="list-group-item" key={item}>{item}</li>)}
            </ul>        
    </Fragment>
  );
}

export default ListGroup;
