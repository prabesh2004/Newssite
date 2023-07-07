import React, { useState } from 'react';
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {  Link } from "react-router-dom";


 

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
      
      <div className="contents">
        <div className="login"> <span className="logo">SKY-NEWS</span> 
        <FontAwesomeIcon className='user' icon={ faUser } /> <a className="sign-in" href="">Sign in</a>
 </div>
        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="toggle-icon"><GiHamburgerMenu className='burger'/></span>
        </button>
      
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
     
        <li className={doublef()}><Link to={"/"} className='nav-a'>Home</Link></li>
        <li className={doublef()}><Link to={"/world"} className='nav-a'>World</Link></li>
        <li className={doublef()}><Link to={"/local"} className='nav-a'>Local</Link></li>
        <li className={doublef()}><Link to={"/sport"} className='nav-a'>Sport</Link></li>
        <li className={doublef()}><Link to={"/article"} className='nav-a'>Article</Link></li>
        <li className={doublef()}><Link to={"/weather"} className='nav-a'>Weather</Link></li>

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
