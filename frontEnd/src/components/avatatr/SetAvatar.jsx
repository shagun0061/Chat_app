import React, { useEffect, useState } from "react";
import "./style.scss";
import loader from "../../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../../utils/apiRoutes";
import axios from "axios";

export const SetAvatar = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  async function setProfilePicture() {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem("chat-app-current-user")
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        toast("avatar updated 👍", toastOptions);
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-app-current-user", JSON.stringify(user));
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  }

  async function getdata() {
    const data = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2AtHue77BMQExNbuAxH3k3B1IWqMcM44OMFGGJJ-8sARIQcFlxW9kbGHXGRxoQG_tgc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUF-wkEUfqNx7IIudXfmbaFg-ILMZwYYy2Tg-t4LrW2WFCwWPQoxxmI2-1UDL_Mhpe7U&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY2WJcq5Kc6dBwxsOG1d0ThNAuBifIMt7rbSMEGCaDp7TdA2_Hgw5cXLQT9cCnirO4X4&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DV--0QFWZYJ0vYl2vInKkgz6X8LCDeldzUi8WM3MnKQ837ov9guuSEiNP2xpgRqMR4I&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU",
    ];

    setTimeout(() => {
      setAvatars(data);
      setIsLoading(false);
    }, 3000);
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("chat-app-current-user"));
    if (!data) {
      navigate("/login");
    }
    console.log("data is ", data);
    if (data.isAvatarImageSet) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <img src={loader} alt="loader" className="loader" />
        </div>
      ) : (
        <div className="container">
          <div className="title-container">
            <h1>Pick an Avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${
                    selectedAvatar === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={setProfilePicture}
            className={`submit-btn ${
              selectedAvatar !== undefined ? "btn_col" : ""
            } `}
          >
            Set as Profile Picture
          </button>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};
