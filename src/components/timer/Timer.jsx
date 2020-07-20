import React, { useState, useEffect } from 'react';

const Timer = ({ inicio, status, close}) => {
  const currSecs = +(new Date()) / 1000;
  const iniSecs = inicio / 1000;
  let [seconds, setSeconds] = useState(currSecs - iniSecs);
  const [isActive, setIsActive] = useState((inicio));
  // let [show, setShow]=useState();
  // const [isActive, setIsActive] = useState(Boolean(inicio) && status !='Listo');
  // console.log('close',close)

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && status ==='En preparación' ) {
      interval = setInterval(() => {
         setSeconds(seconds => seconds + 1);
      }, 1000)
    } else if (status ==='Listo', !isActive) {
      // setIsActive(!isActive);
      clearInterval(interval)
      console.log("toy aqui adentro", seconds)
   
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

 
  // if (!inicio) {
  //   return 0
  // }

  // if (status !='En preparacion'){
  //   setShow((seconds/60).toFixed(2))
  // }

  // console.log('currSecs', currSecs)
  // console.log('iniSecs', iniSecs)
  // console.log('diff', currSecs - iniSecs)
  // console.log('seconds', seconds)

  return (
    // <div>{show}</div>
    <div>{(seconds/60).toFixed(2)}</div>
    // <div>{Math.floor((seconds / 60) % 60)}</div>
  );
}
export default Timer;