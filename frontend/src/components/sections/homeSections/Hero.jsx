import {  useRef } from "react";
import "./Hero.css";
import Button from "../../ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <div className="hero-section">
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/tiers-page-background.png"
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
          margin="0px"
          borderRadius="33px"
        >
          BEGIN YOUR JOURNEY
            <span className="arrow-icon">
               <IoIosArrowRoundForward />
            </span>

        </Button>
      </div>
    </div>
  );
}
