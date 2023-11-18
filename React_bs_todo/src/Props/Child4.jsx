import React from 'react'

function Child4({data, fn} ) {
  return (
    <>
    <div>Child4</div>
    <button onClick={()=>{fn(10)} }>Set 10</button>
    {data}
    </>
  )
}

export default Child4


