import React, { useState, useEffect } from 'react';
import './App.scss';
import Hour from './components/Hour.js';
import Minute from './components/Minute.js';
import Second from './components/Second.js';

function App() {

  const [currentHour, setCurrentHour] = useState('');
  const [currentMinute, setCurrentMinute] = useState('');
  const [currentSecond, setCurrentSecond] = useState('');

  useEffect(() => {
    //this will run every 0.1 seconds for perfect sync, otherwise there is a bit of a delay
    const interval = setInterval(() => {
      const currentDate = new Date();

      //set hour, if not double digits then add leading Zero(0)
      setCurrentHour(() => {
        return currentDate.getHours().toString().length === 2 ?
          currentDate.getHours().toString() :
          "0" + currentDate.getHours().toString()
      });
      //set minute, if not double digits then add leading Zero(0)
      setCurrentMinute(() => {
        return currentDate.getMinutes().toString().length === 2 ?
          currentDate.getMinutes().toString() :
          "0" + currentDate.getMinutes().toString()
      });
      //set second, if not double digits then add leading Zero(0)
      setCurrentSecond(() => {
        return currentDate.getSeconds().toString().length === 2 ?
          currentDate.getSeconds().toString() :
          "0" + currentDate.getSeconds().toString()
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="backgroundImage">
      <div className="App">
        <div className="clock">
          <Hour hour={currentHour} />
          <div className="comma"> : </div>
          <Minute minute={currentMinute} />
          <div className="comma"> : </div>
          <Second second={currentSecond} />
        </div>
      </div>
    </div>
  );
}

export default App;
