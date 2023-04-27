import React from "react";
import "./hero.css"
import heroProfile from "./profile.png"

const Hero = () => {
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
        <h3>I am Bharat Chavhan</h3>
        Enthusiastic computer science graduate from the University of Dr.
        Babasaheb Ambedkar Marathwada University Aurangabad, with 8 months of
        experience in web development and design. Obtained Full stack
        Web-development Certification from the Ineuron.ai (PW skills) Academy.
        Looking to deliver excellent skills in Front-end development.
      </p>
      <div className="bottons">
       
      </div>
    </div>
  </div>
</div>

  )
};

export default Hero;
