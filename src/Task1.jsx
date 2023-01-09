import React, { useState } from "react";

import Result from "./Task1/Result";

import "./Task.css";

const Task1 = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const isPalindrome = (string) => {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      if (string[i] !== string[string.length - i - 1]) return false;
    }
    return true;
  };

  return (
    <div className="task_container">
      <h1>Task1</h1>
      <p>Enter text to check if it's a palindrome</p>
      <input type="text" onChange={handleInputChange} />
      {text.length > 0 && <Result isPalindrome={isPalindrome(text)} />}
    </div>
  );
};

export default Task1;
