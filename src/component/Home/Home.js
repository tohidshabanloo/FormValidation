import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const username = window.localStorage.getItem("username");
  return (
    <>
      <div>Home</div>
      <Link to="/login">Login</Link>
      {username && <p>username:{username}</p>}
    </>
  );
};

export default Home;
