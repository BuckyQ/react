import React, {Component, useState} from "react";

const Counter =() => {

  const [counter, setCounter] = useState(0);
  var updatecounter=counter;

  const run = () => {
    updatecounter++;
    setCounter(updatecounter);
  };

  const start = () => {
    setInterval(run, 1000);
  };


  const stop = () =>{
    clearInterval();
  };


  const handleClickUp = () =>{
    setCounter(counter + 1)
  } 

  const handleClickDown = () =>{
    setCounter(counter - 1)
  } 

  const handleClickUpOdd = () =>{
    if (counter % 2 === 1){
      setCounter(counter +1);
    }

  }

  const handleClickWait = () =>{
    setTimeout(setCounter(counter+1), 10000);////???
  }



  return (
    <div>
      <h1>Counter App: {counter}</h1>
      <br></br>
      <button onClick={handleClickUp}>Increment</button>
      <button onClick={handleClickDown}>Decrement</button>
      <br></br>
      <button onClick={handleClickUpOdd}>Increment-If-Odd</button>
      <button onClick={handleClickWait}>Async-Inc</button>
      <div className="start_btm">
        <button onClick={start}>Start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  )
}

export default Counter;