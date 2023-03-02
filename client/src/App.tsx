import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
