import { useState } from "react";

function MyCounter(){
    var [counterVal, updateCount] = useState(0);
    
    function increment(){
        updateCount(prevCount => prevCount+1);
    }
    function decrement(){
        updateCount(prevCount => prevCount-1);
    }

    return(
        <div className="counter">
            <button onClick={decrement}>-</button>
            {counterVal}
            <button onClick={increment}>+</button>
        </div>
    )

}

export default MyCounter 