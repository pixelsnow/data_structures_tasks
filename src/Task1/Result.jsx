import React from "react";

import classes from "./Result.module.css";

const Result = ({ isPalindrome }) => {
  return (
    <div className={isPalindrome ? classes.true : classes.false}>
      <p>{isPalindrome ? "Palindrome!" : "Not a palindrome"}</p>
    </div>
  );
};

export default Result;
