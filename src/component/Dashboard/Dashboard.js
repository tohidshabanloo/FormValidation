import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("username")) {
      navigate("/login", { replace: true });
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("username");
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Dashboard;
