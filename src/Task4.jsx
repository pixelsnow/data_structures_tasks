import React, { useState } from "react";

const Task4 = () => {
  const [queue, setQueue] = useState([]);
  const [enqueueInput, setEnqueueInput] = useState("");
  const [dequeued, setDequeued] = useState(null);

  const handleInputChange = (e) => {
    setEnqueueInput(e.target.value);
  };

  const handleEnqueue = (e) => {
    e.preventDefault();
    const newItem = enqueueInput.trim();
    console.log(newItem);
    if (newItem.length) {
      setQueue([...queue, newItem]);
    }
    setEnqueueInput("");
    console.log(queue);
  };

  const handleDequeue = () => {
    if (queue.length) {
      const res = queue.shift();
      setDequeued(res);
    } else {
      setDequeued("");
    }
  };

  return (
    <div className="task_container">
      <h1>4. Queue</h1>
      <form>
        <input type="text" value={enqueueInput} onChange={handleInputChange} />
        <button type="submit" onClick={handleEnqueue}>
          Enqueue
        </button>
      </form>
      <p>
        <span className="legend">front</span>
        <span className="bracket"> [ </span>
        {queue.join(", ")}
        <span className="bracket"> ] </span>
        <span className="legend">back</span>
      </p>
      <button onClick={handleDequeue}>Dequeue</button>
      {dequeued !== null && <p>{dequeued}</p>}
    </div>
  );
};

export default Task4;
