import React, { useState } from "react";

import Result from "./Task1/Result";

const Task1 = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const isPalindrome = (string) => {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      console.log("len = ", string.length, ", i = ", i);
      if (string[i] !== string[string.length - i - 1]) {
        console.log(string[i], "=/=", string[string.length - i - 1]);
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <h1>Task1</h1>
      <input type="text" onChange={handleInputChange} />
      <Result isPalindrome={isPalindrome(text)} />
    </div>
  );
};

export default Task1;
