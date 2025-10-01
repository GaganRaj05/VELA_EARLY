import "./HomeFeatures.css";
import { useRef } from "react";
import Cards from "../../ui/Cards";
const cardContent = [
  {
    head: "REVEAL NIGHT",
    imgBeforeFlip: "/images/RevealNight.png",
    content:
      "Intimate,exclusive virtual or in person member unvellings",
  },
  {
    head: "TEMPTATION TUESDAY",
    imgBeforeFlip: "/images/TemptationTuesday.png",
    content:
      "A weekly offering of uresistiple ullure.. Temptation brought directly to you.",
  },
  {
    head: "DESIRE VAULT",
    imgBeforeFlip: "/images/DesireVault.png",

    content:
      "Confidential personal desires, fantasies, and turn-ons stored for deeper alignment.",
  },
  {
    head: "MYSTERY MATCH",
    imgBeforeFlip: "/images/MysteryMatch.png",

    content:
      "Invitations to curated anonymous encounters cued by emotional themes",
  },
];

const HomeFeatures = ({isVisible}) => {
    const videoRef = useRef(null);
  
  return (
    <div className="home-features">
      <div className="video-background features-video">
       {isVisible &&
         <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/tiers-page-background.png"
        >
          <source src="/videos/doors.mp4" type="video/mp4" />
        </video>
       }
      </div>

      <div className="feature-text">
              {isVisible && <div className="features-banner fade-move-up">
        <h1 className="new-head fade-move-up">beyond swipes, STEP Into Something Rare</h1>
      </div>}
      <div className="features-content">
          {isVisible &&  cardContent.map((card, index) => (
          <Cards
            key={index}
            height="300px"
            width="300px"
            head={card.head}
            imgBeforeFlip={card.imgBeforeFlip}
            imgAfterFlip="" 
            content={card.content}
          />
        ))}

      </div>
      </div>
    </div>
  );
};
export default HomeFeatures;
