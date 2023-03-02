import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddSong from "./components/AddSong";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/addSong" element={<AddSong />} />
      </Routes>
    </>
  );
}

export default App;
