import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "Senior full-stack developer with 10+ years of experience in developing scalable web applications and websites, improving company efficiency and productivity",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Ineractive front end as per the design",
        "react and react native",
        "redux for state management",
        "building rest api",
        "managing database",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
              <div className="about-me-options">
                <button className="btn primary-btn">Hire Me</button>
                <a href="ehizcv.pdf" download="ehidu ehizcv.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
