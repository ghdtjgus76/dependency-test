import React from "react";
import { useState } from "react";

export const TestComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
  );
};
