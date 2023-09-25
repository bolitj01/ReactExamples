import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div className="parent">
            <p>Parent</p>
            <p>Count: {count}</p>

            <Child setCount={setCount}></Child>
        </div>
    )
}