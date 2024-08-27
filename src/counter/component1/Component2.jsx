import React, { useContext } from 'react'
import { userContext } from './Counter'

const Component2 = () => {
    const{counter}=useContext(userContext)
  return (
    <div>
      <h1>Counter Value:{counter}</h1>
    </div>
  )
}

export default Component2
