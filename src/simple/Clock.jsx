import { useState, useEffect } from "react";

export default function Clock (props){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        //Start the clock ticking
        setInterval(
            () => {
                //Need to assign a new time instance
                setTime(new Date());
            }
        , props.delay);
    
    }, []); //Empty [] indicates one execution only
    

    //Empty <> is a react fragment
    return (
        <>
            <h1>Timer:</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </>
    )
}