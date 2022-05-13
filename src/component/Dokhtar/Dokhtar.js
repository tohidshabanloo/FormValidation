import React from "react";
import { useState } from "react";

const Dokhtar = () => {
  const [state, setState] = useState(1);
  const handleClick = (e) => {
    setState((e) => ++e);
  };

  return (
    <div>
      <input value={state} />
      <button onClick={handleClick}>BTN</button>
    </div>
  );
};

export default Dokhtar;
