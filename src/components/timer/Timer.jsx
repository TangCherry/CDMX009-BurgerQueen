import React, { useState, useEffect } from "react";

const Timer = ({ inicio, status }) => {
  const currSecs = +new Date() / 1000;
  const iniSecs = inicio / 1000;
  let [seconds, setSeconds] = useState(currSecs - iniSecs);
  const [isActive] = useState(inicio);

  useEffect(() => {
    let interval = null;
    if (isActive && status === "En preparación") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if ((status === "Listo", !isActive)) {
      clearInterval(interval);
      console.log("toy aqui adentro", seconds);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return <div>{(seconds / 60).toFixed(2)}</div>;
};
export default Timer;
