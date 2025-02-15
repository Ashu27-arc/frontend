import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { username, password });
      alert("User registered successfully");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
