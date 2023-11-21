import React, { useState, useEffect } from "react";


function clock(){
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(240);
    const [timerOn, setTimerOn] = useState(false);
    const [timeStart, setTimeStart] = useState(240);

    const startTimer = () => {
      if(!timerOn){
        const totalTimer = minutes * 60 + seconds;
        setTimerOn(true);
      }
    };

    const pauseTimer = () => {
      if(timerOn){
        setTimerOn(false);
      }
    }


    const setDesiredTime = () => {
      setTimerOn(false);
      const totalTimer = minutes * 60 + seconds;
      setTime(totalTimer);
      setTimeStart(totalTimer);
    }

    const resetTimer = () => {
      setTimerOn(false);
      setMinutes(0);
      setSeconds(0);
      setTime(timeStart);
      
    };
    const formatTime = (time) => {
      // Your logic to format the time goes here
      return `${Math.floor(time / 60)}:${(time % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
    };
    const setClockTo30 = () => {
      setTimerOn(false);
      setTime(30);
      setTimeStart(30);
    }
    const setClockTo1 = () => {
      setTimerOn(false);
      setTime(60);
      setTimeStart(60);
    }

    const setClockTo5 = () => {
      setTimerOn(false);
      setTime(300);
      setTimeStart(300);
    }
    const setClockTo10 = () => {
      setTimerOn(false);
      setTime(600);
      setTimeStart(600);
    }
    const setClockTo15 = () => {
      setTimerOn(false);
      setTime(900);
      setTimeStart(900);
    }

    useEffect(() => {
      if(timerOn){
        const interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [timerOn]);

    return (
        <div>
          <div>
            <input id = "input"
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input id = "input"
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            {timerOn ? (
              <button id= "actionButton" onClick={pauseTimer}>Pause</button>
            ) : (
              <button id="actionButton" onClick={startTimer}>Start</button>
            )}
            
            <button id="actionButton" onClick={resetTimer}>Reset</button>
            <button id="actionButton" onClick={setDesiredTime}>Set</button>
          </div>
          <div className="clock">{formatTime(time)}
          
          </div>
          <button id="presets" onClick={setClockTo30}>30</button>
          <button id="presets" onClick={setClockTo1}>1</button>
          <button id="presets" onClick={setClockTo5}>5</button>
          <button id="presets" onClick={setClockTo10}>10</button>
          <button id="presets" onClick={setClockTo15}>15</button>
        </div>
      );
}

export default clock;