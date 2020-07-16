import React, { useState, useEffect } from 'react';

const Timer = ({ inicio, status }) => {
  const currSecs = +(new Date()) / 1000;
  const iniSecs = inicio / 1000;
  const [seconds, setSeconds] = useState(currSecs - iniSecs);
  const [isActive, setIsActive] = useState(Boolean(inicio) && status !='En prepración');
  console.log('estatus',status)
  console.log('inicio', inicio)

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if (!inicio) {
    return 0
  }


  console.log('currSecs', currSecs)
  console.log('iniSecs', iniSecs)
  console.log('diff', currSecs - iniSecs)
  console.log('seconds', seconds)

  return (
    <div>{(seconds/60).toFixed(2)}</div>
  );
}
export default Timer;