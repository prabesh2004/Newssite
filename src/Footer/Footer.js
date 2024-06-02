import React from 'react';
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Services</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Developers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More from Us</h4>
            <ul>
              <li><a href="/">Get in Touch</a></li>
              <li><a href="/">Shopping</a></li>
              <li><a href="/">Finance</a></li>
              <li><a href="/">Courses</a></li>
              <li><a href="/">Donations</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Works</h4>
            <ul>
              <li><a href="/">Charity</a></li>
              <li><a href="/">Scholarships</a></li>
              <li><a href="/">Programmes</a></li>
              <li><a href="/">Awards</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com"><FaFacebook size={30} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={30} /></a>
              <a href="https://www.instagram.com"><FaInstagram size={30} /></a>
              <a href="https://www.youtube.com"><FaYoutube size={30} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
