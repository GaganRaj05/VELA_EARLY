import "./HomeAbout.css";
import Button from "../../ui/Button";
import { useState } from "react";
import EarlySignUpForm from "../../forms/EarlySignup";
const HomeAbout = ({ isVisible }) => {
    const [isPopupClicked, setIsClicked] = useState(false);
  
  return (
    <>
      <div className="home-about">
      <div className="about-img">
        {isVisible && (
          <img
            src="/images/about.png"
            className="fade-move-up"
            alt=""
            loading="lazy"
          />
        )}
      </div>
      <div className="about-content">
        {isVisible && (
          <>
            <h1 className="fade-move-up">ABOUT VELA</h1>
            <p className="fade-move-up">
              Vela was born from a simple but profound truth: that human
              connection in its most authentic form begins within. Our mission
              isn’t just to build a dating site - it’s build a private
              members-only space where singles and couples alike can grow,
              connect, and explore. Learn the emotional, relational, and erotic
              layers of yourself that may have gone unexplored
            </p>{" "}
            <Button
              height="40px"
              width="200px"
              className="primary-btn fade-move-up"
              onClick={() => setIsClicked(true)}
              fontSize="12px"
            >
              JOIN NOW
            </Button>
          </>
        )}
      </div>
    </div>
    {isPopupClicked && <EarlySignUpForm setIsClicked={setIsClicked}/>}
    </>
  );
};

export default HomeAbout;
