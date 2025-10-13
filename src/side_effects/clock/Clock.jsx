import { useState, useEffect } from "react";

export default function Clock ({ delay, running = true }){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        if (!running) return; // do not start interval when not running

        // Start the clock ticking
        const id = setInterval(() => {
            // Need to assign a new time instance
            setTime(new Date());
        }, delay);

        return () => {
            clearInterval(id);
        };
    }, [delay, running]);

    return (
        <>
            <h1>Timer:</h1>
            <h2>{`${time.toLocaleTimeString()} and ${time.getMilliseconds().toString().padStart(3, '0')} ms`}</h2>
        </>
    );
}