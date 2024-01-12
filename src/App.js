import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNum, incDec} from './action'
function App() {
  const myState= useSelector((state) => state.changeNumber)
  const dispatch= useDispatch()
  return (
    <>
      <h1> Guduuu </h1>
      <button onClick={()=> dispatch(incNum())}>+</button>
      <br/>
      <label>{myState}</label>
      <br/>
      <button onClick={() => dispatch(incDec())}>-</button>
    </>
  );
}

export default App;
