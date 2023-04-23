import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { SetAvatar } from "./components/avatatr/setAvatar";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/setAvatar" element={<SetAvatar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
