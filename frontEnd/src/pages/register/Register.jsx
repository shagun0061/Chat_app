import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form>
        <h2>Register</h2>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>User name</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input type="text" name="" id="" required />
          <span>Confirm Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href=""> </a>
          <div className="allready">
            <h5 style={{color:"#EDE9D5"}}>
              Already have a account ?  <Link to="/login"> <h6 style={{color:"#000000",display:"inline",fontSize:"16px"}}>Login</h6></Link>
            </h5>
          </div>
        </div>
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;
