import React from "react";
import {Link} from "react-router-dom";
import "./style.scss"
const Login = () => {
  return (
    <div className="loginBox">
    <span className="borderLine"></span>
      <form>
        <h2>Login</h2>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>User name</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="">Forgot Password</a>
          <Link to="/register">Register</Link>
        </div>
        <input type="submit" value="Login" ></input>
      </form>
    </div>
  );
};

export default Login;
