import React, { useState } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import './Resume.css';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
    { skill: "javascript", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "personal portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my details at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "personal portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my details at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "personal portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my details at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of legon accra, ghana"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"University of legon accra, ghana"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"University of legon accra, ghana"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"ABCD TECHNOLOGY"}
        subHeading={"FULL STACK DEVELOPER"}
        fromDate={"2020"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as mern stack web and mobile developer and also an
          online instructor
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - developed A personal portfolio website to showcase all my details at
          one place
        </span>
        <br />
        <span className="resume-description-text">
          - developed A personal portfolio website to showcase all my details at
          one place
        </span>
        <br />
        <span className="resume-description-text">
          - developed A personal portfolio website to showcase all my details at
          one place
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetail, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetail.title}
            subHeading={projectDetail.subHeading}
            description={projectDetail.description}
            fromDate={projectDetail.duration.fromDate}
            toDate={projectDetail.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Teaching"
          description="I love teaching the tech enthusiasts"
        />
        <ResumeHeading
          heading="Music"
          description="I love teaching the tech enthusiasts"
        />
        <ResumeHeading
          heading="Teaching"
          description="I love teaching the tech enthusiasts"
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops error"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
