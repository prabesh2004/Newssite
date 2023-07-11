import React, { useEffect } from 'react';
import Navbar from "./Navbar/Navbar";
import Landing from "./Home/Landing/Landing";
import World from "./Home/World/World";
import Local from "./Home/Local/Local";
import Sports from "./Home/Sports/Sports";
import Articles from "./Home/Articles/Articles";
import Footer from './Footer/Footer';

function App() {

  // Animation for objects (cards)
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

  // Animation for cards 
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
      <Navbar />
      <div className="section">
        <Landing />
        <World />
        <Local />
        <Sports />
        <Articles />
      </div>
      <Footer />
     
    </div>
  );
}

export default App;





