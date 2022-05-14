import "./App.css";
import LoginForm from "./component/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Awesome Website!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Pedar /> */}
      {/* <Dokhtar /> */}
      {/* <Ref /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
