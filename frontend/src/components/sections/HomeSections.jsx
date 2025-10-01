import React, { useState, useEffect, useRef } from "react";

import Hero from "./homeSections/Hero";
import HomeFeatures from "./homeSections/HomeFeatures";
import "./HomeSections.css";
import HomeAbout from "./homeSections/HomeAbout";
import MemberShip from "./homeSections/MemberShip";
import FinalCTA from "./homeSections/FinalCTA";
import Footer from "../layout/Footer";
import ReusableSection from "./homeSections/ReusableSection";

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "features", component: <HomeFeatures /> },
  {
    id: "temptation-tuesday",
    component: (
      <ReusableSection
        secHead="TEMPTATION TUESDAY"
        head="Idyllic offerings for your midweek cravings. Exclusive reveals. Private desires. Just for you."
        video="TemptationTuesday"
        subHeading=""
      />
    ),
  },
  {
    id: "Reveal Night",
    component: (
      <ReusableSection
        secHead="REVEAL NIGHT"
        video="RevealNight"
        head="Friday unveil, cinematic profiles, fades at midnight"
        subHeading="Each Friday evening Vela unveils a private selection of curated profiles. No swipes, no noise, just a moment of cinematic possibilities. Visibility fades at midnight.
"
      />
    ),
  },
  {
    id: "MysteryMatch",
    component: (
      <ReusableSection
        secHead="MYSTERY MATCH"
        video="MysteryMatch"
        head="An Invitation Only the Bold Accept."
        subHeading="Your story starts with a sealed envelope. Name, place, time, nothing more. Dinner is planned - the mystery is yours. Let go of expectations and trust in the alchemy of intentional curation. "
      />
    ),
  },
  {
    id: "Desire Vault",
    component: (
      <ReusableSection
        secHead="Desire Vault"
        video="DesireVaultUpdated"
        head="Unlock your private world of sensuality, secrets, and truth"
        subHeading="What you’ve never said, but what you’ve always wanted. Powered by desire, curated by you"
      />
    ),
  },
  { id: "tiers", component: <MemberShip /> },
  { id: "about", component: <HomeAbout /> },
  { id: "finalcta", component: <FinalCTA /> },
  { id: "footer", component: <Footer /> },
];

const HomeSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [sectionStates, setSectionStates] = useState({});
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setSectionStates((prev) => ({
            ...prev,
            [index]: {
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio,
              boundingRect: entry.boundingClientRect,
            },
          }));
        },
        {
          threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
          rootMargin: "-5% 0px -5% 0px", // Reduced margin for better detection
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (!container) return;

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      isScrollingRef.current = true;

      // Set a timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);

      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;

      let closestSectionIndex = 0;
      let smallestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const containerCenter = containerHeight / 2;
        const distance = Math.abs(sectionCenter - containerCenter);

        if (
          rect.top <= containerHeight * 0.1 &&
          rect.bottom >= containerHeight * 0.9
        ) {
          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestSectionIndex = index;
          }
        } else if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSectionIndex = index;
        }
      });

      setActiveSection(closestSectionIndex);
    };

    container?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const getSectionClass = (index) => {
    const state = sectionStates[index];
    const diff = index - activeSection;

    if (!state?.isIntersecting) {
      return diff < 0 ? "section exiting" : "section distant";
    }

    if (index === activeSection && state.intersectionRatio > 0.3) {
      return "section visible";
    }

    if (Math.abs(diff) === 1 && state.intersectionRatio > 0.1) {
      return "section entering";
    }

    return diff < 0 ? "section exiting" : "section distant";
  };

  const isSectionVisible = (index) => {
    const state = sectionStates[index];
    return state?.isIntersecting && state?.intersectionRatio > 0.1;
  };

  const scrollToSection = (index) => {
    if (sectionRefs.current[index] && !isScrollingRef.current) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle wheel events to prevent rapid scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    let wheelTimeout = null;

    const handleWheel = (e) => {
      if (wheelTimeout) {
        e.preventDefault();
        return;
      }

      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 100); // Throttle wheel events
    };

    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }
    };
  }, []);

  return (
    <>
      <div className="scroll-container" ref={scrollContainerRef}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`${getSectionClass(index)} ${
              section.id === "features"
                ? "tall-section"
                : section.id === "tiers"
                ? "tallest-section"
                : ""
            }`}
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            {React.cloneElement(section.component, {
              isVisible: isSectionVisible(index),
              isActive: index === activeSection,
              cardState: getSectionClass(index).split(" ")[1],
            })}
          </div>
        ))}
      </div>

      <div className="navigation-dots">
        {sections.map((_, index) => {
          const shouldRender = Math.abs(index - activeSection) <= 2;

          return shouldRender ? (
            <div
              key={index}
              className={`dot ${activeSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default HomeSections;
