import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import World from "./World/World";

function App() {
  return (
  <div>
    <Navbar/>
    <div className="section">

    <Landing/>
    <World/>
    </div>
  
    </div>
  );
}

export default App;
