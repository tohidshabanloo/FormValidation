import React from "react";
import "./LoginForm.css";
import { useState } from "react";

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
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(false);
  const [d, hc] = useForm({ Email: "", Password: "" });
  const condition = () => {
    if (d?.Email.includes("@") && d?.Email.includes(".com")) {
      setShow("Email is OK");
    } else {
      setShow("Email is not ERROR");
    }
  };
  const conditionPass = () => {
    if (d?.Password.length <= 8) {
      setPass("Pass is OK");
    } else {
      setPass("Pass is not ok");
    }
  };
  const conditionPass16 = () => {
    if (d?.Password.length <= 16) {
      setPass("Pass is Less than 16");
    } else {
      setPass("Pass is more than 16");
    }
  };
  const finalFunc = () => {
    condition();
    conditionPass();
    conditionPass16();
  };

  //   console.log(d.Password);
  return (
    <div className="content">
      <input value={d?.Email} onChange={hc("Email")} type="text" />
      <div className="correct">{show}</div>

      <input
        value={d?.Password}
        onChange={hc("Password")}
        className="lastChild"
        type="text"
      />

      <div>{pass}</div>

      <button onClick={finalFunc}> SUBMIT</button>
    </div>
  );
};

export default LoginForm;
