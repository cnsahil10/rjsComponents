import React, { useContext } from 'react'
import { userContext } from './Counter'

const Component1 = () => {
    const{counter,setCounter}=useContext(userContext);
  return (
    <div>
      <h1>Counter Value: {counter}</h1>
      <button onClick={()=>setCounter((counter)=>counter+1)}>Add</button>
      <button onClick={()=>setCounter((counter)=>counter-1)}>Minus</button>
    </div>
  )
}

export default Component1
