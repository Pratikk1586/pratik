import React, { useState } from 'react';

export function Counterapp() {

    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); }


    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const reset = () => { setCount(0); }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}