import React from "react";
import logo from "./assets/Facebook.svg";
import NavHero from "./components/NavHero";

function App() {
  return (
    <div className="bg-primary">
      App
      <img src={logo} alt="logo" />
        <NavHero/>
    </div>
  );
}

export default App;
