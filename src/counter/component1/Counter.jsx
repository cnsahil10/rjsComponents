import React, { createContext, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

export const userContext= createContext()
const Counter = () => {
    const[counter,setCounter]=useState(0);
  return (
    <div>
      <userContext.Provider value={{counter,setCounter}}>
         <Component1/>
         <Component2/>
      </userContext.Provider>
    </div>
  )
}

export default Counter
