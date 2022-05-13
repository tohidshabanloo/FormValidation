import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link className="register" to="/LoginForm">
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
