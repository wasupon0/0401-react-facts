import { useState } from "react";
import "./App.css";
import jellyFish from "./assets/jellyfish.svg";
import reactLogo from "./assets/react.svg";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
