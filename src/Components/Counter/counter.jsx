import { useState } from "react"
import './counter.css'
function Counter(){
    
    const[count, setCount] = useState(0);
    
    const handleIncrement=()=>{
        setCount(count + 1)
    }
    const handleDecrement=()=>{
        if(count > 0)
        setCount(count - 1)
    }
    return(
        
        <div className="main-div">
        <h1 className="heading-1">Counter.</h1>
        <p className="counter-variable">{count}</p>
        <div className="button-div">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
        </div>
        
    )
}

export default Counter