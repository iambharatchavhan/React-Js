import React from "react";


const Footer = () => {
  return (
    <footer className="border-t border-solid border-gray-300 flex flex-col justify-center items-center gap-4 bg-gray-100 md:flex-row md:p-4 md:gap-8 md:flex-wrap lg:justify-between lg:p-10 lg:mt-3 ">
      <div className="text-center">
        <h3 className="lg:font-semibold">Bharat Chavhan</h3>
        <h4>Front-end Developer</h4>
      </div>
      <div className="text-center ">
        <h3 className="lg:font-semibold">Email</h3>
        <h4>bharatchavhan141@gmail.com</h4>
      </div>
      <div className="text-center ">
        <h3 className="lg:font-semibold">Follow me</h3>
        <h4>
          <a href="#">Linkedin</a> | <a href="#">Github</a>
        </h4>
      </div>
      <div className="text-center">
        <p>❤️© 2023 By Bharat Chavhan.😊</p>
        <p>Powered and secured by ReactJS</p>
      </div>
    </footer>
  );
};

export default Footer;
