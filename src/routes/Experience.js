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
      <div className="about-second">
       <p className="intro"> About</p>
        <div className="intro">
          <p> Born and Brought up in</p>
          <img src={MGIF} alt="Mountain GIF" className="mgif" />
        </div>

        <div className="profession">
          <p> This is what i do for living </p>
          <img src={CGIF} alt="computer GIF" className="cgif" />
        </div>
      </div>
      <div className="Intro">
  I am a software engineer with a passion for creating innovative solutions that drive positive change. I have a Master's degree in Computer Application (MCA) from the prestigious National Institute of Technology Agartala, where I honed my programming, problem-solving, and web development skills. 

I have experience in developing and optimizing various projects at MAQ Software, leveraging my expertise in SQL Server, Power BI, Azure Data Factory, Azure Data Bricks, and Excel. I actively participated in designing and developing robust and interactive Power BI reports and utilizing Azure services to deliver efficient solutions. I also possess a broad technical skill set encompassing C, C++, OOP, Data Structures, Algorithms, HTML, CSS, RDBMS, Azure DevOps, Bootstrap, Node.js, Express.js, React, GitHub, Git, MongoDB, and JavaScript. 

I am committed to continuously learning and staying updated with industry trends and best practices. I am actively seeking new opportunities to apply my technical expertise and contribute to a dynamic organization. If you are looking for a dedicated software engineer with a passion for crafting innovative solutions, I would be thrilled to connect with you. Thank you for visiting my profile. Let's connect and explore how we can collaborate to achieve remarkable outcomes together.
  </div>
    </div>
  );
};

export default Experience;
