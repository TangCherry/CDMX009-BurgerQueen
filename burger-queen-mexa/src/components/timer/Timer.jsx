import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    useEffect(() => { 
        let interval = null;
        if(isActive) {
            invertal = setInterval(() => { 
                setSeconds(seconds => seconds +1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
            
        </div>
    )
}

export default withRouter(Timer);
