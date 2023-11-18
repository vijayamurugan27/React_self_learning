import React from 'react'

function Child1(props) {
  return (
    <>
    <div>Child1 - using props keyword</div>

    <h1>Displayed from Child component using Parent Component Using props.</h1>
    <div>First Name: {props.first_name }</div>
    <div>Degree : {props.degree}</div>
    <div>Roll.No : {props.rollno} </div>

    </>
  )
}

export default Child1