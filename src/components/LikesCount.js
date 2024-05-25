import React, { useState, useCallback } from "react";

const LikesCount = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return children(count, incrementCount);
};

export default LikesCount;
