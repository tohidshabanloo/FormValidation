import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Link className="register" to="/LoginForm">
        Register Here
      </Link>
      <br />
      <br />
      <br />
      {/* <button> LOG IN</button> */}
      <div className="username">username</div>
    </div>
  );
};

export default Home;
