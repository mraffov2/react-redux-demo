import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
  const dispactch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button className="increment" onClick={() => dispactch(increment())}>+</button>
      <button className="decrement"  onClick={() => dispactch(decrement())}>-</button>
    </div>
  );
}

export default App;
