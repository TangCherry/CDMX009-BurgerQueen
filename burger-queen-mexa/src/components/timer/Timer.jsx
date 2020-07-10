import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // console.log('segunditos',seconds);
    function toggle() {
        setIsActive(!isActive);
    }
    useEffect(() => { 
        let interval = null;
        if(isActive) {
            interval = setInterval(() => { 
                setSeconds(seconds => seconds +1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        seconds,
        isActive
    )
}

export default withRouter(Timer);
