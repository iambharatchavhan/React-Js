import React from "react";
import "./about.css"
import Hero from "./Hero/Hero";


const About = () =>{
    return(
        <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              Created And Powered By React.JS
            </h3>
            <Hero/>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>10 April 2023</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    As a result of being so interested and having so much fun learning
                    React Js as a library and framework, we decided to learn React Js
                    as a project- based learning and chose this Swiggy website as an
                    inspiration
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>20 April 2023</h4>
                  <h4 className="subheading">What We learn as "Team"</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    =&gt; Effective communication skills, <br /> =&gt; How to
                    collaborate and work together towards a common goal,
                    <br /> =&gt; How to problem-solve and make decisions as a group,
                    <br /> =&gt; How to leverage individual strengths and skills to
                    improve team performance,
                    <br /> =&gt; How to give and receive constructive feedback, <br />
                    =&gt; The importance of trust and respect in team dynamics and
                    <br /> =&gt; The value of diversity and inclusion in fostering
                    creativity and innovation
                    <br />
                    By learning and practicing these skills together, teams can become
                    more cohesive and productive, leading to greater success in
                    achieving their shared objectives.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>30 April 2023</h4>
                  <h4 className="subheading">Time To Wrap Up</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Consistency is a powerful tool that can help us achieve success in
                    various aspects of our lives. According to Forbes, consistency is
                    a key ingredient that is commonly missed by people on the path to
                    success. What I have Learn From This Project?
                    <br />
                    - How to Write Clean Code,
                    <br />
                    - How to Build Reusable component,
                    <br />
                    - How to optimize the project,
                    <br />
                    - Code readability is important,
                    <br />- etc
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <a style={{ textDecoration: "none" }} href="">
                  <h4>
                    let`s Eat <br />
                    ❤️😁❤️
                  </h4>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      

    );
}
export default About;