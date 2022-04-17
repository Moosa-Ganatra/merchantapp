import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import UserProfile from "./views/UserProfile";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="user-profile" element={<UserProfile/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
