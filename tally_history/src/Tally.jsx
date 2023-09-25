import React, { useState, useEffect }from 'react';

const Tally = () => {
    const [count, setCount] = useState(0);
    const [change, setChange] = useState("");
    const [changes, setChanges] = useState([]);

    useEffect(() => {
       
      setChanges([...changes, count])
      
    }, []);
    

    console.log("Rerendered!");

    return (
        <>
            <p>{count}</p>
            <input type="text" name="" id="" onChange={(e) => setChange(e.target.value)}/>
            <button onClick={() => setCount((prev) => prev + Number(change))}>Update</button>
        </>
    );
};

export default Tally;