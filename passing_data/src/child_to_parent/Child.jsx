import React from 'react';

export default function Child({setCount}){
    return (
        <div className='child'>
            <p>Child</p>
            <button onClick={() => setCount(1)}>1</button>
            <button onClick={() => setCount(2)}>2</button>
            <button onClick={() => setCount(3)}>3</button>
        </div>
    )
}