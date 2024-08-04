import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post("http://localhost:5000/login", value);
      console.log(login.data);
      setValue({
        email: "",
        password: "",
      });
      alert("Logged in to account");
      navigate("/");
    } catch (error) {
      console.error("Login error", error);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="email"
            onChange={handleChange}
            value={value.email}
            name="email"
          />
          <input
            placeholder="password"
            value={value.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Click here
          </span>
        </p>
      </div>
    </>
  );
}
