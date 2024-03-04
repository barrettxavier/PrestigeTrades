import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("auth/register", {
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      if (response.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickHereBtn = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-slate-customDark flex justify-center items-center">
      <form
        className="bg-white bg-opacity-15 w-fit p-12 flex flex-col rounded-md"
        onSubmit={handleRegister}
      >
        <div className="mb-6 text-center">
          <p>Welcome to</p>
          <h1 className="my-4">Prestige Trades</h1>
          <p>To register, enter a username and password</p>
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
        {/* <input
          className="py-1 px-2 rounded-md text-black outline-none my-2"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        /> */}
        <div className="w-full flex flex-col items-center justify-center  mt-6">
          <button className="button_purple mb-6" type="submit">
            Register
          </button>

          <p>
            Already a registered user?{" "}
            <span className="text-orange-500">
              <button onClick={handleClickHereBtn}>Click Here</button>
            </span>{" "}
            to login
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
