import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../utils/apiRoutes";
import axios from "axios";

const Login = () => {
  const [value, setValue] = useState({
    userName: "",
    password: "",
  });
  const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  let navigate = useNavigate();

  const handelSetValue = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const { userName, password } = value;

    if (userName === "" && password == "") {
      toast("userName and password required 😎", toastOption);
      return false;
    }
    return true;
  };
  const handelFormSubmit = async (event) => {
    event.preventDefault();
    if (formValidation()) {
      let { data } = await axios.post(loginRoute, { ...value });
      console.log(data);
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        localStorage.setItem(
          "chat-app-current-user",
          JSON.stringify(data.userRes)
        );
        toast("Login Sucessfull 😃", toastOption);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }
  };

  return (
    <div className="loginBox">
      <span className="borderLine"></span>
      <form onSubmit={(event) => handelFormSubmit(event)}>
        <h2>Login</h2>
        <div className="inputbox">
          <input
            type="text"
            name="userName"
            id=""
            onChange={(event) => {
              handelSetValue(event);
            }}
            required
          />
          <span>User name</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="password"
            id=""
            onChange={(event) => {
              handelSetValue(event);
            }}
            required
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="">Forgot Password</a>
          <Link to="/register">Register</Link>
        </div>
        <input type="submit" value="Login"></input>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
