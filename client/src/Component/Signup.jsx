import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
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
    const register = await axios.post("http://localhost:5000/register", value);
    console.log(register.data);
    setValue({
      name: "",
      email: "",
      password: "",
    });
    alert("Account created");
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            onChange={handleChange}
            value={value.name}
            name="name"
          />
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
          <button type="submit">Sign Up</button>

          <p>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
        </form>
      </div>
    </>
  );
}
