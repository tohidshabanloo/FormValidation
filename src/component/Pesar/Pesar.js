import React, { forwardRef } from "react";
import "./Pesar.css";

const Pesar = forwardRef((props, inpRef) => {
  const { func } = props;
  const handleClick = () => {
    func((e) => ++e);
  };
  return (
    <div>
      <input ref={inpRef} />
      <button onClick={handleClick}>COMP</button>
    </div>
  );
});
export default Pesar;
