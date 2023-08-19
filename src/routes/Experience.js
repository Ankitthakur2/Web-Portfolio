import React from "react";
import "./experience.css";
import CGIF from "../assets/programminggif.gif";
import MGIF from "../assets/mountain-gif.gif";
import expimg from "../assets/coding.jpeg";
import degree from "../assets/graduate.webp";
const Experience = () => {
  return (
    <div abt-container>
      <div className="experience">
        <div className="working">
          <h1>Working Experience </h1>
          <img src={expimg} alt="experience img" height="300px" width="340px" />
          <div className="dis-para">
            <div>
              <div className="job-title"> Software Engineer 1 </div>
              <div className="date"> (07/2022-02/2023)</div>
              <div className="job-title"> Associate Software Engineer</div>
              <div className="date">(01/2022-06/2022)</div>
            </div>

            <div> MAQ Software</div>
          </div>
        </div>

        <div className="education">
          <h1>Education Background</h1>
          <img src={degree} alt="degree img" height="300px" width="340px" />

          <div className="dis-para">
            <div className="job-title"> MCA from NIT Agartala </div>
            <div className="date"> (2019-2022)</div>
            <div className="job-title"> BCA from Panjab University</div>
            <div className="date">(2015-2018)</div>
          </div>
        </div>
        <div className="skillset">
          <h1>Skills</h1>
          <div className="list">
            <div className="li">
              <div className="skill-bg">C</div>
              <div className="skill-bg">C++</div>
              <div className="skill-bg">OOP</div>
            </div>
            <div className="li">
              <div className="skill-bg">Data Structures </div>
              <div className="skill-bg">Algorithms</div>
              <div className="skill-bg">SQL</div>
            </div>
            <div className="li">
              <div className="skill-bg">HTML</div>
              <div className="skill-bg">RDBMS</div>
              <div className="skill-bg">SQL Server</div>
            </div>
            <div className="li">
              <div className="skill-bg">MongoDB</div>
              <div className="skill-bg"> Bootstrap</div>
              <div className="skill-bg">Node.js</div>
            </div>
            <div className="li">
              <div className="skill-bg">CSS</div>
              <div className="skill-bg">Git </div>
              <div className="skill-bg">Express.js</div>
            </div>
            <div className="li">
              <div className="skill-bg">React</div>
              <div className="skill-bg">GitHub</div>
              <div className="skill-bg">JavaScript</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="intro">
          <p> Born and Brought up in</p>
          <img src={MGIF} alt="Mountain GIF" className="mgif" />
        </div>

        <div className="profession">
          <p> This is what i do for living </p>
          <img src={CGIF} alt="computer GIF" className="cgif" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
