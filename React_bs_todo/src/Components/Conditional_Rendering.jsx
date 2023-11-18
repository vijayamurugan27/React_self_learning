import React from 'react'
function Conditional_Rendering() {
    const data = "Boy";
    return (
    <>
    <div>Conditional_Rendering</div>
    <h1>hai hello welcome</h1>
    
    {data == "Boy"?<h1>Boy</h1>  :<h1>Girl</h1> }
    
    {/* <h1>Boy, Girl</h1> */}
    
    </>
  )
}
export default Conditional_Rendering



// import React from 'react';
// function ConditionalRendering() {
//   const data = "Boy";
//   // Define components for boy and girl
//   const BoyComponent = <p>This is a boy.</p>;
//   const GirlComponent = <p>This is a girl.</p>;

//   return (
//     <>
//       <div>Conditional Rendering</div>
//       <h1>hai hello welcome</h1>
//       {/* Conditionally render components based on the value of data */}
//       {data === "Boy" ? BoyComponent : GirlComponent}
//     </>
//   );
// }

// export default ConditionalRendering;
