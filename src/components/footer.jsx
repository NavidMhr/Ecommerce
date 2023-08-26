import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer(){

    return(<>
        <footer className="footer mt-5 p-5">
        <div className="footer-links-categories">
            <h5 href="">About Us</h5>
            <a href="" className="link">Testimonials</a>
            <a href="" className="link">Contact</a>
            <a href="" className="link">Journal</a>
            <a href="" className="link">Privacy Policy</a>
        </div>
        <div className="footer-links-partners">
            <h5 href="">Support </h5>
            <a href="" className="link" >Shipping & Returns  </a>
            <a href="" className="link">Size Guide</a>
            <a href="" className="link">Product Care</a>
        </div>
        <div className="footer-links-contact">
            <h5 href="">Contact </h5>
            <a href="" className="link">26A Turkey,istanbul </a>
            <p className=" text-primary">+90 555 122 4532</p>
        </div>
        <div>
            <p className="text-center">Subscribe For Newsletter </p>
            <input className="footer-input" type="text" placeholder="Enter Youre Email" />
            <button className="btn btn-primary">Subscribe</button>
            <FaInstagram/>
            <FaTwitter />
        </div>
        </footer>
        <p className="copy-right">© 2023 Navid All rights reserved </p>
    </>)
}