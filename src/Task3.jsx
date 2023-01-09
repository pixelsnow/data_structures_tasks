import React, { useState } from "react";

const Task3 = () => {
  const [stack, setStack] = useState([]);
  const [pushInput, setPushInput] = useState("");
  const [popped, setPopped] = useState(null);

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

  const handlePop = () => {
    if (stack.length) {
      const res = stack.pop();
      setPopped(res);
    } else {
      setPopped("");
    }
  };

  return (
    <div className="task_container">
      <h1>3. Stack</h1>
      <form>
        <input type="text" value={pushInput} onChange={handleInputChange} />
        <button type="submit" onClick={handlePush}>
          Push
        </button>
      </form>
      <p>
        <span className="legend">bottom</span>
        <span className="bracket"> [ </span>
        {stack.join(", ")}
        <span className="bracket"> ] </span>
        <span className="legend">top</span>
      </p>
      <button onClick={handlePop}>Pop</button>
      {popped !== null && <p>{popped}</p>}
    </div>
  );
};

export default Task3;
