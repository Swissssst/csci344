import React, { useState } from "react";

export default function ButtonCount({initialValue}) {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(initialValue);

    function addOne() {
        // sets the state variable and redraws the screen
        setCount(count + 1);
    }

    function resetCounter() {
        // sets the state variable and redraws the screen
        setCount(0);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}