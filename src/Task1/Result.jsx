import React from "react";

import classes from "./Result.module.css";

const Result = ({ isPalindrome }) => {
  return (
    <div className={isPalindrome ? classes.true : classes.false}>
      <p>{isPalindrome ? "yes" : "no"}</p>
    </div>
  );
};

export default Result;
