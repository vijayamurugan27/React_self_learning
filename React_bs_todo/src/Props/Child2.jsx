import React from 'react'

function Child2({first_name ,degree, rollno}) {
  return (
    <>
    <div>Child2 - destructuring</div>
    <h1>Displayed from Child component using Parent Component Using props, destructuring.</h1>
    <div>First Name: {first_name }</div>
    <div>Degree : {degree}</div>
    <div>Roll.No : {rollno} </div>
    </>
  )
}

export default Child2