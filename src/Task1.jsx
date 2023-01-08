import React, { useState } from "react";

import Result from "./Task1/Result";

const Task1 = () => {
  const { text, setText } = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const isPalindrome = (string) => {};

  return (
    <div>
      <h1>Task1</h1>
      <input type="text" onChange={handleInputChange} />
      <Result isPalindrome={false} />
    </div>
  );
};

export default Task1;
