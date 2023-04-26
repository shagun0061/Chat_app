import React, {  createContext, useState,useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export const ChatContext = createContext();

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState("chek");
  const navigate = useNavigate();
   
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("Chat_App_User"));
    if (user) {
      setUser(user);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <ChakraProvider>
      <ChatContext.Provider value={user}>
        <div>
          <Navbar />
          chat
        </div>
      </ChatContext.Provider>
    </ChakraProvider>
  );
};

export default Chat;
