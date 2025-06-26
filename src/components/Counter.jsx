import { useState } from "react"

const Counter = () => {
 
const [counter, setCounter] = useState(0)

  return (
    <div>
        <h1> value is = {counter}</h1>
        <button onClick={()=>
        {
            setCounter(a => a+1)
            setCounter(a => a+1)
            setCounter(a => a+1)
        }
        
        }>increment</button>
        <button onClick={()=>setCounter(counter-1)}>decrement</button>
    </div>
  )
}

export default Counter