import "./HeroimgStyles.css";
import heroimg from "../assets/backgroundpic.jpg";
import React from "react";
import pic from "../assets/Pic.jpg";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={heroimg} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <div className="container-about">
          <div className="class-img">
            <img src={pic} class="profile" />
            <h1>HELLO,MY NAME IS ANKIT THAKUR </h1>

            <p> I am a Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
