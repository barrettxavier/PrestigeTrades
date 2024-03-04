import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickHereBtn = () => {
    navigate("/register");
  };

  return (
    <div className="w-screen h-screen bg-slate-customDark flex justify-center items-center">
      <form
        className="bg-white bg-opacity-15 w-fit p-12 flex flex-col rounded-md"
        onSubmit={handleLogin}
      >
        <div className="mb-6 text-center">
          <h1 className="mb-4">Prestige Trades</h1>
          <p>To login, enter your username and password</p>
        </div>
        <input
          className="py-1 px-2 rounded-md text-black outline-none my-2"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          className="py-1 px-2 rounded-md text-black outline-none my-2"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <div className="w-full items-center justify-center flex flex-col mt-6">
          <button className="button_purple mb-6" type="submit">
            Log In
          </button>
          <p>
            Need to register?{" "}
            <span className="text-orange-500">
              <button onClick={handleClickHereBtn}>Click Here</button>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
