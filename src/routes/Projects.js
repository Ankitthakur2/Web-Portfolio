import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../components/card.js";
import cardData from "../components/projectdata.js";
import { Link } from "react-router-dom";
import "./projects.css";

function Projects() {
  return (
    <div className="card-list">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={2}
        infiniteLoop={true}
        className="pop"
      >
        {Object.keys(cardData).map((key) => {
          const card = cardData[key];
          return (
            <div className="card" key={key}>
              <div className="img">
                <img src={card.imgSrc} alt={card.title} />
              </div>
              <div className="title">
                <h2>{card.title}</h2>
              </div>
              <div className="description">
                <p>{card.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Projects;
