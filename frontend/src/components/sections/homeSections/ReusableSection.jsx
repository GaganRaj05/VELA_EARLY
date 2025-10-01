import { useRef } from "react";
import "./Hero.css";
import Button from "../../ui/Button";

export default function ReusableSection({
  video,
  head,
  subHeading,
  isVisible,
  secHead,
}) {
  const videoRef = useRef(null);

  return (
    <div className="hero-section">
      <div className="video-background">
        {video === "RevealNight" || video === "DesireVault" ? (
          <img src={`/videos/${video}.png`} alt="Reveal Night background" />
        ) : (
          isVisible && (
            <video ref={videoRef} loading="lazy" autoPlay loop muted>
              <source src={`/videos/${video}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        )}
      </div>

      <div className="hero-content">
        {isVisible && (
          <>
            <h1 className="new-head fade-move-up">{secHead ? secHead : ""} </h1>
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
              >
                THE SECRET STARTS HERE
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
