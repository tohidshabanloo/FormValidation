import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>RERENDER</button>
    </div>
  );
};

export default Ref;
