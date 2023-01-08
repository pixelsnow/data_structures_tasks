import React, { useState } from "react";

const Task2 = () => {
  const [numbers, setNumbers] = useState([]);
  const [sorted, setSorted] = useState([]);

  const handleInputChange = (e) => {
    setNumbers(
      e.target.value
        .trim()
        .split(" ")
        .map((elem) => +elem)
    );
  };

  const handleSort = () => {
    const clone = [...numbers];
    let swapHappened = true;
    while (swapHappened) {
      swapHappened = false;
      for (let i = 0; i < clone.length - 1; i++) {
        if (clone[i] > clone[i + 1]) {
          const temp = clone[i];
          clone[i] = clone[i + 1];
          clone[i + 1] = temp;
          swapHappened = true;
        }
      }
      console.log("sorting...", clone);
    }
    setSorted(clone);
  };

  return (
    <div>
      <h1>Task2</h1>
      <p>Enter numbers separated by space</p>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSort}>Sort</button>
      <p>
        <span>
          <span>[ </span>
          {numbers.join(", ")}
          <span> ]</span>
        </span>
        {` -> `}
        <span>
          <span>[ </span>
          {sorted.join(", ")}
          <span> ]</span>
        </span>
      </p>
    </div>
  );
};

export default Task2;
