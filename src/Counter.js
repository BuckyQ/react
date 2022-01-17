import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [time]

  const handleClickUp = () =>{
    setCounter(counter + 1)
  } 

  const handleClickDown = () =>{
    setCounter(counter - 1)
  } 

  const handleClickUpOdd = () =>{
    if (counter % 2 == 1){
      setCounter(counter +1);
    }

  }

  const handleClickWait = () =>{
    setTimeout(setCounter(counter+1), 10000);////???
  }



  return (
    <div>
      Counter App: {counter}
      <br></br>
      <button onClick={handleClickUp}>Increment</button>
      <button onClick={handleClickDown}>Decrement</button>
      <br></br>
      <button onClick={handleClickUpOdd}>Increment-If-Odd</button>
      <button onClick={handleClickWait}>Async-Inc</button>
      <br></br>
      Timer-add-button:
      <br></br>
      <button>Start</button>
      <button>Stop</button>
    </div>

  )
}

export default Counter;