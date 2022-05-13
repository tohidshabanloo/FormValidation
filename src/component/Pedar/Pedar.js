import React, { useRef, useState } from "react";
import Pesar from "../Pesar/Pesar";
import Dokhtar from "../Dokhtar/Dokhtar";
import "./Pedar.css";

const Pedar = () => {
  const [state, setState] = useState(0);
  const inputRef = useRef();
  return (
    <div>
      <p>{state}</p>
      <Pesar func={setState} ref={inputRef} />
    </div>
  );
};

export default Pedar;
