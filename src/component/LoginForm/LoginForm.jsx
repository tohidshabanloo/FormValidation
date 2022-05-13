import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);
  const handleChange = (key) => (e) => {
    const val = e.target.value;
    setData({
      ...data,
      [key]: val,
    });
  };

  return [data, handleChange];
};

const LoginForm = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(false);
  const [more, setMore] = useState(false);
  const [d, hc] = useForm({ Email: "", Password: "" });
  const condition = () => {
    if (d?.Email.includes("@") && d?.Email.includes(".com")) {
      setShow("Email is OK");
    } else {
      setShow("Email is not Ok");
    }
  };
  const conditionPass = () => {
    if (d?.Password.length <= 8) {
      setPass("Pass is OK");
    } else {
      setPass("Pass is not OK");
    }
  };
  const conditionPass16 = () => {
    if (d?.Password.length <= 16) {
      setMore("Pass is Less than 16");
    } else {
      setMore("Pass is more than 16");
    }
  };

  const handlePass = (e) => {
    const val = e.target.value;
    if (val.length <= 16) {
      hc("Password")(e);
    }
  };
  const finalFunc = () => {
    condition();
    conditionPass();
    conditionPass16();
  };
  // const refHandeler = () => {
  //   console.log(inputRef, inputRef.current.value);
  // };

  //   console.log(d.Password);

  const navigate = useNavigate();

  const validation = (event) => {
    event.preventDefault();
  };
  return (
    <div className="content" onClick={validation}>
      <p className="inputEmail">Username:</p>
      <input value={d?.Email} onChange={hc("Email")} type="text" />
      <div className="correct">{show}</div>
      <p className="inputPass">Password:</p>
      <input
        value={d?.Password}
        onChange={handlePass}
        className="lastChild"
        type="text"
      />

      <div className="pass">{pass}</div>
      <div className="more">{more}</div>

      {/* <button>
        <Navigate to="/" replace={true} />
      </button> */}

      <Link className="register" to="/Dashboard">
        Signup
      </Link>
      {/* <button onClick={finalFunc}> SUBMIT</button> */}
      {/* <input type="text" ref={inputRef} />
      <button onClick={refHandeler}>RE REnder</button> */}
    </div>
  );
};

export default LoginForm;
