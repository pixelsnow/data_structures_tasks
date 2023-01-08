import React from "react";

const Result = ({ isPalindrome }) => {
  return (
    <div>
      <p>{isPalindrome ? `yes` : `no`}</p>
    </div>
  );
};

export default Result;
