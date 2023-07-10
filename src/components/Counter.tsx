import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  // +
  const handleIncrease = () => {
    setCount(count + 1);
    // console.log("count+", count);
  };

  // -
  const handleDecrease = () => {
    if (count) {
      setCount(count - 1);
    }
    // count && setCount(count - 1);
    // console.log("count-", count);
  };

  return (
    <div>
      <h1 className="heading">Counter</h1>
      <p className="count">{count}</p>

      <div className="buttons">
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default Counter;
