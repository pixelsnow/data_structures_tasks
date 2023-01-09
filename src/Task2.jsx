import React, { useState } from "react";

const Task2 = () => {
  const [numbers, setNumbers] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [showSorted, setShowSorted] = useState(false);

  const handleInputChange = (e) => {
    setNumbers(
      e.target.value
        .trim()
        .split(" ")
        .map((elem) => +elem)
    );
    setShowSorted(false);
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
    setShowSorted(true);
  };

  return (
    <div className="task_container">
      <h1>2. Bubble sort</h1>
      <p>Enter numbers separated by spaces</p>
      <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleSort}>Sort</button>
      </div>

      <p>
        <span>
          <span className="bracket">[ </span>
          {numbers.join(", ")}
          <span className="bracket"> ] </span>
        </span>
        {showSorted && (
          <span>
            {` -> `}
            <span className="bracket"> [ </span>
            {sorted.join(", ")}
            <span className="bracket"> ]</span>
          </span>
        )}
      </p>
    </div>
  );
};

export default Task2;
