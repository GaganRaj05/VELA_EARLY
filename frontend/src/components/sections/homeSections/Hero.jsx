import {  useRef, useState } from "react";
import "./Hero.css";
import Button from "../../ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import EarlySignUpForm from "../../forms/EarlySignup";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPopupClicked, setIsClicked] = useState(false);
  return (
    <div className="hero-section">
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Hero-poster.png"
        >
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <h1 className="new-head fade-move-up ">
          Created for connections, powered by desire
        </h1>
       <Button
          className="primary-btn fade-move-up hero-button "
          height="45.51px"
          width="368px"
          margin="0px 0 0 20px"
          borderRadius="33px"
          onClick={()=>setIsClicked(true)}
        >
          BEGIN YOUR JOURNEY
            <span className="arrow-icon">
               <IoIosArrowRoundForward />
            </span>

        </Button>
      </div>
      {isPopupClicked && <EarlySignUpForm setIsClicked={setIsClicked}/>}
    </div>
  );
}
