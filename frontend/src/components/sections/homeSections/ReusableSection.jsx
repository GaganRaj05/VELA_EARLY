import { useRef, useState, useEffect } from "react";
import "./Hero.css";
import Button from "../../ui/Button";
import EarlySignUpForm from "../../forms/EarlySignup";
export default function ReusableSection({
  video,
  head,
  subHeading,
  isVisible,
  secHead,
}) {
  useEffect(() => {
    if (isVisible && videoRef.current) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch((error) => {
            console.log("Autoplay prevented, user interaction required");
          });
        }
      }, 100);
    }
  }, [isVisible]);
  const videoRef = useRef(null);
  const [isPopupClicked, setIsClicked] = useState(false);

  return (
    <div className="hero-section">
      <div className="video-background">
        {video === "RevealNight" || video === "DesireVault" ? (
          <img src={`/videos/${video}.png`} alt="Reveal Night background" />
        ) : (
          <video
            ref={videoRef}
            loading="eager"
            autoPlay
            loop
            muted
            poster={`/images/${video}-poster.png`}
          >
            <source src={`/videos/${video}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="hero-content">
        {isVisible && (
          <>
            <h1 className="new-head hoho fade-move-up">
              {secHead ? secHead : "nope"}{" "}
            </h1>
            <h1
              className="old-head
                  fade-move-up"
            >
              {head}
            </h1>
            <p className="fade-move-up">{subHeading}</p>
            {video === "RevealNight" && (
              <Button
                className="secondary-btn fade-move-up"
                height="45.51px"
                width="368px"
                margin="0px"
                borderRadius="33px"
                onClick={() => setIsClicked(true)}
              >
                FIND YOUR MATCH NOW
              </Button>
            )}
            {video === "TemptationTuesday" && (
              <Button
                className="secondary-btn fade-move-up"
                height="45.51px"
                width="368px"
                margin="0px"
                borderRadius="33px"
                onClick={() => setIsClicked(true)}
              >
                FEEL SOMETHING REAL
              </Button>
            )}
            {video === "MysteryMatch" && (
              <Button
                className="secondary-btn fade-move-up"
                height="45.51px"
                width="368px"
                margin="0px"
                borderRadius="33px"
                onClick={() => setIsClicked(true)}
              >
                JOIN NOW
              </Button>
            )}
            {video === "DesireVault" && (
              <Button
                className="primary-btn fade-move-up"
                height="45.51px"
                width="368px"
                margin="0px"
                borderRadius="33px"
                fontSize="15px"
                onClick={() => setIsClicked(true)}
              >
                THE SECRET STARTS HERE
              </Button>
            )}
          </>
        )}
      </div>
      {isPopupClicked && <EarlySignUpForm setIsClicked={setIsClicked} />}
    </div>
  );
}
