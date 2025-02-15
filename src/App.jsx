import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <Link to="/">Register</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
