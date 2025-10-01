import { useState } from "react";
import "./MemberShip.css";
import Button from "../../ui/Button";
import { FaConciergeBell, FaRegCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

const cardContent = [
  {
    icon: 'images/FoundingMemberUp.png',
    head: "FOUNDING MEMBERS",
    price: "$199/month",
    content:
      "Unlock access to unlimited features during the initial start of our pack",
    flippable: false,
    color: 'gold',
    priceId:'price_1RncX9Fb79Sh0LVYDLoEEoJS',
  },
  {
    icon: 'images/TEMP.png',
    color: 'gold',
    head: "CORE TIER",
    price: "/images/TemptationTuesday.png",
    content: "A weekly offering of irresistible allure.. Temptation brought directly to you.",
    priceId:'price_1RncX9Fb79Sh0LVYDLoEEoJS',
    flippable: false,
    tier_info: [
      {
        tier_head: "Emotional Self-Discovery Tools",
        tier_content: "Begin your VELA journey with limited emotional & attachment reports",
      },
      {
        tier_head: "Basic Profile Viewing",
        tier_content: "Browse select member profiles with limited access to photos and insights",
      },
      {
        tier_head: "Access to Temptation Tuesday (Preview Only)",
        tier_content: "View your score summary without full compatibility breakdown.",
      },
      {
        tier_head: "Read-Only Trust Score Preview",
        tier_content: "View your score summary without full compatibility breakdown",
      },
      {
        tier_head: "Curated Invite to Public Events",
        tier_content: "Begin your VELA journey with limited emotional & attachment reports",
      },
      {
        tier_head: "Private Messaging (Basic)",
        tier_content: "Connect through text once mutual interest is established",
      },
      {
        tier_head: "Reveal Night Locked",
        tier_content: "Reveal unlock available for $14 each Friday (expires at midnight).",
        available: false,
      },
    ],
  },
  {
    icon: "/images/InnerCircleIc.png",
    color: 'gold',
    head: "INNER CIRCLE",
    price: "/images/DesireVault.png",
    content: "Confidential personal desires, fantasies, and turn-ons stored for deeper alignment.",
    priceId:'price_1RncX9Fb79Sh0LVYDLoEEoJS',
    flippable: false,
    tier_info: [
      {
        tier_head: "Full Emotional AI Reports",
        tier_content: "Unlock deep emotional, attachment, and compatibility insights with real-time updates",
      },
      {
        tier_head: "Full Profile Access",
        tier_content: "View detailed profiles, photo galleries, desire questionnaires, and archetype matches",
      },
      {
        tier_head: "Access to Temptation Tuesday (Preview Only)",
        tier_content: "View your score summary without full compatibility breakdown.",
      },
      {
        tier_head: "Unlimited Access to Temptation Tuesday",
        tier_content: "Participate every Friday in the exclusive Reveal Night experience...",
      },
      {
        tier_head: "Private Messaging (Full)",
        tier_content: "Send messages freely to matches without restriction...",
      },
      {
        tier_head: "AI Feedback Tools",
        tier_content: "Receive emotional pattern tracking, tone insights...",
      },
      {
        tier_head: "Trust Score Full Breakdown",
        tier_content: "Access your entire trust & compatibility score...",
      },
      {
        tier_head: "Invite Priority to Private Events",
        tier_content: "Be the first to receive RSVPs for members-only events...",
      },
      {
        tier_head: "Mystery Match Dinners",
        tier_content: "Reserved for Concierge Tier only",
        available: false,
      },
    ],
  },
  {
    icon: <FaConciergeBell />,
    color:'#dfb869',
    head: "CONCIERGE",
    price: "/images/MysteryMatch.png",
    content: "VELA's most elite membership. Embodied luxury, private AI evolution, and real-world intimacy.",
    priceId:'price_1RncX9Fb79Sh0LVYDLoEEoJS',
    flippable: false,
    tier_info: [
      {
        tier_head: "Mystery Match Dinners (2/year)",
        tier_content: "Hand-curated blind date experiences, all Dinner expenses covered",
      },
      {
        tier_head: "Emotional Architect Sessions (New)",
        tier_content: "Quarterly 1-on-1 session to review emotional patterns",
      },
      {
        tier_head: "Erotic Language Decoder AI (New)",
        tier_content: "AI identifies your sensual communication style...",
      },
      {
        tier_head: "Private Trust Circle Integration (New)",
        tier_content: "Group dynamics for poly or exploratory connections",
      },
      {
        tier_head: "Priority Access to All Events + Invite-Only Salons",
        tier_content: "Attend ultra-limited salons, private dinners...",
      },
      {
        tier_head: "VELA's Exclusive Sensual Design lab",
        tier_content: "Help transform any space into a fantasy",
      },
      {
        tier_head: "Legacy Archive of Emotional Self",
        tier_content: "Secure map of your emotional and erotic identity",
      },
      {
        tier_head: "Concierge membership is invitation-only and reviewed",
        tier_content: "Reserved for Concierge Tier only",
        available: false,
      },
    ],
  },
];

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const MemberShip = ({ isVisible }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  
  const handleCardClick = (card) => {
    if (card.tier_info) {
      setSelectedCard(card);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const renderIcon = (icon, color) => {
    if(icon === "images/TEMP.png" ) {
      return (
                <img
        src={icon}
        alt="icon"
        id={icon.replaceAll('/', '')}
        style={{ width: "90px", height:"80px", objectFit: "contain" }}
      />
      )
    }
    if(icon === "/images/InnerCircleIc.png" ) {
      return (
                <img
        src={icon}
        alt="icon"
        id={icon.replaceAll('/', '')}
        style={{ width: "90px", height:"80px", objectFit: "contain" }}
      />
      )
    }
    if(icon==="images/goldkey.png") {
      return (
        <img
        src={icon}
        alt="icon"
        id={icon.replaceAll('/', '')}
        style={{ width: "90px", height: "80px", objectFit: "contain" }}
      />
      )
    }

    return typeof icon === "string"? (
      
      <img
        src={icon}
        alt="icon"
        id={icon.replaceAll('/', '')}
        style={{ width: "70px", height: "50px", objectFit: "contain" }}
      />
    ) : (
      <span style={{ color: color || "white", fontSize: "40px" }}>{icon}</span>
    );
  };

  const handleSubscription = async(priceId) => {
    setLoading(true);
    const res = await fetch(`http://localhost:7000/api/payments/create-payment-session`, {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({
        email:'gaganraj.dev05@gmail.com',
        priceId:priceId,
      }),
    })
    const data = await res.json();
    setLoading(false);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({sessionId:data.session_id});
  }

  return (
    <div className="membership-tiers">
      {isVisible && (
        <>
                  <div className="membership-head">
          <h1 className="fade-move-up">EXCLUSIVITY HAS ITS LEVELS</h1>
          <p className="fade-move-up">
            Founding members to Inner Circle. Each tier unlocks a world of deeper matches
          </p>
        </div>
        <div className="membershipt-tiers-cards">
        {cardContent.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flippable ? "flippable" : ""} fade-move-up`}
            style={{ width: "300px", height: "300px" }}
            onClick={() => handleCardClick(card)}
          >
            {card.flippable ? (
              <div className="card-inner">
                <div className="card-front">
                  {renderIcon(card.icon, card.color)}
                  <h3>{card.head}</h3>
                  <Button
                    height="28.88px"
                    width="170px"
                    className="primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card);
                    }}
                    fontSize="12px"
                  >
                    JOIN NOW
                  </Button>
                </div>
                <div className="card-back">
                  {renderIcon(card.icon, card.color)}
                  <h3>{card.head}</h3>
                  <div className="price">{card.price}</div>
                  <p>{card.content}</p>
                  <Button
                    height="28.88px"
                    width="170px"
                    className="primary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card);
                    }}
                    fontSize="12px"
                  >
                    JOIN NOW
                  </Button>
                </div>
              </div>
            ) : (
              <div className="card-static ">
                {renderIcon(card.icon, card.color)}
                <h3>{card.head}</h3>
                <Button
                  height="30px"
                  width="170px"
                  className="primary-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card);
                  }}
                  fontSize="12px"
                >
                  KNOW MORE
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

        </>
)}

      

      {showModal && selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div className="modal-card-head">
                <div style={{ fontSize: "2rem", color: selectedCard.color || "white", marginRight:'10px' }}>
                  {renderIcon(selectedCard.icon, selectedCard.color)}
                </div>
                <h1 style={{ margin: "0.5rem 0" }}>{selectedCard.head}</h1>
              </div>
              <div className="tier-info-head-temp">
                <p style={{ maxWidth: "420px", fontSize: "18px" }}>{selectedCard.content}</p>
              </div>
            </div>
            
            <ul className="tier-info-list">
              {selectedCard.tier_info.map((item, i) => (
                <li key={i}>
                  <span className="icon">
                    {item.available === false ? "❌" : <SiTicktick color="gold" />}
                  </span>
                  <div>
                    <strong>{item.tier_head}</strong>
                    <p>{item.tier_content}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="modal-controls">
              <Button
                height="40px"
                width="200px"
                className="primary-btn"
                onClick={() => handleSubscription(selectedCard.priceId)}
                fontSize="12px"
              >
                {Loading ? <ClipLoader/> : 'JOIN NOW'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberShip;