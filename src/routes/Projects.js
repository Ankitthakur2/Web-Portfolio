import React from "react";
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/pic3.png";
import Card from "../components/card.js";
import cardData from "../components/projectdata.js";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-title">
        <h1>Projects </h1>
      </div>
      <div className="project-content">
        <div className="div-btn">
          <div>
            <Card
              className="card-1"
              imgSrc={img2}
              title={cardData.card1.title}
              description={cardData.card1.description}
            />
          </div>
          <div className="demo">
            <Link to="https://lets-blog.up.railway.app/">
              <button className="button-7">Demo </button>
            </Link>
          </div>
        </div>

        <div className="div-btn">
          <div>
            <Card
              className="card-2"
              imgSrc={img1}
              title={cardData.card2.title}
              description={cardData.card2.description}
            />
          </div>
          <div className="demo">
            <Link to="https://listenmusicwithankit.netlify.app/">
              <button className="button-7">Demo </button>
            </Link>
          </div>
        </div>
        <div className="div-btn">
          <div>
            <Card
              className="card-3"
              imgSrc={img3}
              title={cardData.card3.title}
              description={cardData.card3.description}
            />
          </div>

          <div className="demo">
            <Link to="https://ankitportfoli.vercel.app/">
              <button className="button-7">Demo </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
