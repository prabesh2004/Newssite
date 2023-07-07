import { useEffect} from "react";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import World from "./World/World";
import Local from "./Local/Local";
import Sports from "./Sports/Sports";
import Articles from "./Articles/Articles";

function App() {

  // Animation for objects(cards)
  function observeNewsGridElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hidden = document.querySelectorAll('.hidden');
    hidden.forEach((element) => observer.observe(element));
  }
 
  // Animtion for Cards 
  function observeText() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-ani');
        }
      });
    });

    const textani = document.querySelectorAll('.hide-ani');
    textani.forEach((element) => observer.observe(element));
  }
  useEffect(() => {
    observeText();
    observeNewsGridElements();
  
  }, []);




 
  return (
  <div>

           
    <Navbar/>
  
    <div className="section">
    <Landing/>
    <World/>
    <Local/>
    <Sports/>
    <Articles/>
    </div>
    </div>
  );
}

export default App;
