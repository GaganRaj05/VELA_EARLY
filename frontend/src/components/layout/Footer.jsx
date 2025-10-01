import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const isEventsPage =
    window.location.pathname === "/vela/events" ? true : false;
  return (
    <div className={`footer ${isEventsPage ? "footer-events" : ""}`}>
      <div className="footer-head">
        <h3>VELA</h3>
        <p>Created for Connection Powered by Desire</p>
      </div>
      <div className="footer-links">
        <div className="footer-redirects">
          <div className="footer-links-container">
            <p>COOKIES</p>
            <p>WHISPERS</p>
            <p>SITE MAP</p>
          </div>
          <div className="footer-links-container">
            <p>CONTACT</p>
            <p>FAQS</p>
            <p>TERMS</p>
          </div>
          <div className="footer-links-container">
            <p>PRIVACY</p>
            <p>COMPLAINTS</p>
            <p>HELP</p>
          </div>
          <div className="footer-links-container">
            <p>CAREERS</p>
            <p>ABOUT US</p>
            <p>LANGUAGE</p>
          </div>
        </div>
        <div className="socials">
          <FaYoutube />
          <FaFacebookSquare />
          <FaInstagram />
          <GrLinkedin />
          <FaSquareXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
