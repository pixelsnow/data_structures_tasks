import React, { useState } from "react";

const Task3 = () => {
  const [stack, setStack] = useState([]);
  const [pushInput, setPushInput] = useState("");

  const handleInputChange = (e) => {
    setPushInput(e.target.value);
  };

  const handlePush = (e) => {
    e.preventDefault();
    const newItem = pushInput.trim();
    console.log(newItem);
    if (newItem.length) {
      setStack([...stack, newItem]);
    }
    setPushInput("");
    console.log(stack);
  };

  const handlePop = () => {};

  return (
    <div>
      <h1>Task3</h1>
      <form>
        <input type="text" value={pushInput} onChange={handleInputChange} />
        <button type="submit" onClick={handlePush}>
          Push
        </button>
      </form>

      <p>
        <span>
          <span>[ </span>
          {stack.join(", ")}
          <span> ]</span>
        </span>
      </p>
      <button onClick={handlePop}>Pop</button>
      <p></p>
    </div>
  );
};

export default Task3;
