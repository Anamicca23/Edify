import React from "react";
import "./Footer.css";
import { Link } from "react-scroll"; // ✅ Import Link from react-scroll
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Edify</h2>
        <ul className="footer-links">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li>Support</li>
        </ul>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#ffffffcc" }}>
          &copy; 2025 <span style={{ color: "#001F54", fontWeight: "bold" }}>Edify</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
