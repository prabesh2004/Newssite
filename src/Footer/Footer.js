import React from 'react'
import "./Footer.css"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
function Footer() {
  return (
    
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>More from us</h4>
                <ul>
                    <li><a href="#">Get in touch</a></li>
                    <li><a href="#">shopping</a></li>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Donations</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our works</h4>
                <ul>
                    <li><a href="#">Charity</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Programmes</a></li>
                    <li><a href="#">Awards</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><FaFacebook size={30}/></a>
                    <a href="#"><FaTwitter size={30}/></a>
                    <a href="#"><FaInstagram size={30}/></a>
                    <a href="#"><FaYoutube size={30}/></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer