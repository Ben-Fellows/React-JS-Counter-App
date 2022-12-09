import "./App.css";
import { useState } from "react";

function App() {
  // Counter
  const [count, setCount] = useState(0);

  // Increment counter function
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Decrement counter function
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>ReactJS Counter App</h1>
        <h2>Count: {count}</h2>
        <div className="count_btn">
          {/* On button click, call the increment count function */}
          <button onClick={incrementCount}>+</button>
          {/* On button click, call the decrement count function */}
          <button onClick={decrementCount}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
