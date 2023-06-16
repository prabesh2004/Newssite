import React, { useState, useEffect } from 'react';
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';


 

function Navbar() {

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
       const currentDate = new Date().toLocaleDateString([], {  month: 'long', day: 'numeric' });
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentDateTime(`${currentDate}-${currentTime}`);
    }, 1000);
 

    return () => {
      clearInterval(timer);
    };
  }, []);
  function doublef(){
 if(!isSearchVisible){
  return `visible`
 }else{
  return `not-visible`
 }
   

  }
  function search(){
    console.log("hello")
  }

  return (
    <nav className="navbar">
      
      <div className="content">
        <div className="login"> <span className="logo">SKY-NEWS</span> 
        <FontAwesomeIcon className='user' icon={ faUser } />
 </div>
        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="toggle-icon"><GiHamburgerMenu className='burger'/></span>
        </button>
      
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
     
        <li className={doublef()}><a href="#" className='nav-a'>Home</a></li>
        <li className={doublef()}><a href="#" className='nav-a'>World</a></li>
        <li className={doublef()}><a href="#" className='nav-a'>Local</a></li>
        <li className={doublef()}><a href="#" className='nav-a'>Sports</a></li>
        <li className={doublef()}><a href="#" className='nav-a'>Articles</a></li>
        <li className={doublef()}><a href="#" className='nav-a'>Weather</a></li>

        <li>
          
          <div className="search-bar">
          
        {isSearchVisible && (
          <form action="" className='form'>
        <RxCross2 onClick={toggleSearch} className='search-cross' size={20}/>
             <input
            type="text"
            className="search-input"
           
          />
          </form>
        )}
        <FaSearch onClick={!isSearchVisible ? toggleSearch : search} size={18} />
      </div>
            
             </li>
        <RxCross2 onClick={toggleMenu} className="button-icon" size={30}/>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
