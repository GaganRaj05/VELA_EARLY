import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      const offset = scrollContainer?.scrollTop || 0;
      setScrolled(offset > 100);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isVerifyEmailPage =
    location.pathname === "/vela/verify-email" ||
    location.pathname === "/vela/erotic-style-discovery" ||
    location.pathname === "/vela/love-language-discovery";
  const isAttachementIntakePage =
    location.pathname === "/vela/attachment-intake";
  const isEventsPage =
    window.location.pathname === "/vela/events" ? true : false;

  const isHowItWorks =
    location.pathname === "/vela/how-it-works" ? true : false;

  return (
    <div
      className={`nav-bar-container ${scrolled ? "glass-navbar" : ""} ${
        isVerifyEmailPage ? "verify-email-navbar" : ""
      } ${isAttachementIntakePage ? "attachment-intake-nav" : ""}
         
      `}
    >
      <nav className="nav-bar">
        <h1
          className={`nav-logo ${
            isAttachementIntakePage ? "attachment-intake-logo" : ""
          } 
            ${isHowItWorks ? "how-it-works-logo" : ""}
          ${isVerifyEmailPage ? "verify-email-logo" : ""}`}
          onClick={() => navigate("/")}
        >
          VELA
        </h1>

        {/* <ul
          className={`nav-links ${menuOpen ? "active" : ""} ${
            isVerifyEmailPage ? "verify-email-txt" : ""
          }
          ${isHowItWorks ? "how-it-works-links" : ""}
          ${isAttachementIntakePage ? "attachment-intake-links" : ""}
          `}
        >
          <li>
            <a href="" onClick={(e) =>{ e.preventDefault();navigate("/vela/how-it-works")}}>
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a href="">MEMBERSHIP</a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/vela/events")}>
              EVENTS
            </a>
          </li>
          <li>
            <a href="">ECHO</a>
          </li>
        </ul>

        <ul className={`nav-btns ${menuOpen ? "active" : ""}`}>
          <Button
            height="35px"
            width="130px"
            className={`secondary-btn ${
              isVerifyEmailPage ? "verify-email-sbtn" : ""
            }
            ${isAttachementIntakePage ? "verify-email-sbtn" : ""}
            ${isHowItWorks ? "how-it-works-sbtn" : ""}
            `}
            onClick={() => console.log("clicked")}
            fontSize="12px"
          >
            JOIN NOW
          </Button>
          <Button
            height="35px"
            width="130px"
            className={`primary-btn ${
              isVerifyEmailPage ? "verify-email-btn" : ""
            }
            ${isAttachementIntakePage ? "verify-email-btn" : ""}
            ${isHowItWorks ? "how-it-works-pbtn" : ""}
            `}
            onClick={() => navigate("/vela/sign-in")}
            fontSize="12px"
          >
            LOGIN
          </Button>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button> */}
      </nav>
      {!scrolled && (
        <hr
          className={`nav-separator ${
            isVerifyEmailPage ? "verify-email-hr" : ""
          }
          ${isHowItWorks ? "how-it-works-nav-seperator" : ""}
          ${isAttachementIntakePage ? "attachment-intake-hr" : ""}`}
        />
      )}
    </div>
  );
};

export default NavBar;
