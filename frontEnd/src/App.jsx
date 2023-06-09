import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
