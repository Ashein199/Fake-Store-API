import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import "./Login.css";

const Login = ({ token, setToken }) => {
  const nameInputRef = useRef();
  const passInputRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    nameInputRef.current.value = "";
    passInputRef.current.value = "";
  }, []);

  const loginHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPass = passInputRef.current.value;
    console.log(enteredName, enteredPass);

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: enteredName,
        password: enteredPass,
      },
    })
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
        console.log(token);
        localStorage.setItem("userToken", token);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };
  return (
    <div className="login">
      <form onSubmit={loginHandler} className="login-items">
        <input type="text" ref={nameInputRef} placeholder="Username" />
        <input type="password" ref={passInputRef} placeholder="Password" />
        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
