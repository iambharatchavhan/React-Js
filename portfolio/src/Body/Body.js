import React from "react";
import "./body.css"
import heroProfile from "./profile.png"

const Body = () => {
  return (
    <div className="portfolioHero">
  <div id="centerHero">
    <div className="heroProfile">
      <img src={heroProfile} />
    </div>
    <div className="heroInfo">
      <h1>Hello</h1>
      <p className="about">About Me</p>
      <p className="skillsSet">
        Enthusiastic computer science graduate from the University of Dr.
        Babasaheb Ambedkar Marathwada University Aurangabad, with 8 months of
        experience in web development and design. Obtained Full stack
        Web-development Certification from the Ineuron.ai (PW skills) Academy.
        Looking to deliver excellent skills in Front-end development.
      </p>
      <div className="bottons">
        <li className="navLinks1 ">Resume</li>
        <li className="navLinks1 navLinks2">Projects</li>
        <li className="navLinks1 navLinks3">Contact</li>
      </div>
    </div>
  </div>
</div>

  )
};

export default Body;
