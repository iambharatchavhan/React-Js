import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="portfolioFooter">
      <div className="firsName">
        <h3>Bharat Chavhan</h3>
        <h4>Front-end Developer</h4>
      </div>
      <div className="firstDiv">
        <h3>Email</h3>
        <h4>bharatchavhan141@gmail.com</h4>
      </div>
      <div className="followMe">
        <h3>Follow me</h3>
        <h4>
          <a href="#">Linkedin</a> | <a href="#">Github</a>
        </h4>
      </div>
      <div className="firstDivTow">
        <p>❤️© 2023 By Bharat Chavhan.😊</p>
        <p>Powered and secured by ReactJS</p>
      </div>
    </footer>
  );
};

export default Footer;
