import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./counerSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <p>Count {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
