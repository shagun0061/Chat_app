import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../../utils/apiRoutes";
import axios from "axios";

const Register = () => {
  const [pic, setPic] = useState("");

  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
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

  function handelSetValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  const handelFormSubmit = async (event) => {
     
    event.preventDefault();
    if (FormValidation()) {
      const formdata = new FormData();
      formdata.append("userName", value.userName);
      formdata.append("email", value.email);
      formdata.append("password", value.password);
      formdata.append("myFile", value.profilePic, value.profilePic.name);

      const { data } = await axios.post(registerRoute, formdata);
      if (data.status == true) {
        toast(` Register Sucessfull 🥰`, toastOption);
        
        // localStorage.setItem("chat_app_user", JSON.stringify(data.userRes));
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (data.status == false) {
        toast(` ${data.msg} 😓 `, toastOption);
      }
    }
  };
  function FormValidation() {
    const { userName, email, password, confirmPassword } = value;

    if (confirmPassword !== password) {
      toast.error("password and confirmPassword are not same 😈", toastOption);
      return false;
    } else if (userName.length < 5) {
      toast.error(
        "useName should be greater then 4 characters 😒",
        toastOption
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "password should be equal or greater then 8 characters 🙄",
        toastOption
      );
      return false;
    } else {
      return true;
    }
  }

  function handelpic(event) {
    setValue({ ...value, profilePic: event.target.files[0] });
  }
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={(event) => handelFormSubmit(event)}>
        <h2>Register</h2>
        <div className="inputbox">
          <input
            type="text"
            name="userName"
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
            type="email"
            name="email"
            onChange={(event) => {
              handelSetValue(event);
            }}
            required
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            onChange={(event) => {
              handelSetValue(event);
            }}
            required
          />
          <span>Password</span>
          <i></i>
        </div>

        <div className="inputbox">
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => {
              handelSetValue(event);
            }}
            required
          />
          <span>Confirm Password</span>
          <i></i>
        </div>
        <div className="profile_pic">
          <span>Uplode Profile pic<span className="dot_red">*</span></span>
          <input
            type="file"
            name="profilePic"
            onChange={(event) => {
              handelpic(event);
            }}
            required
          />

          <i></i>
        </div>
        <div className="links">
          <a href=""> </a>
          <div className="allready">
            <h5 style={{ color: "#EDE9D5" }}>
              Already have a account ?{" "}
              <Link to="/login">
                {" "}
                <h6
                  style={{
                    color: "#000000",
                    display: "inline",
                    fontSize: "16px",
                  }}
                >
                  Login
                </h6>
              </Link>
            </h5>
          </div>
        </div>
        <input type="submit" value="Register"></input>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
