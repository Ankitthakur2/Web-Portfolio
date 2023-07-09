import React from "react";
import "./techstack.css";
import css from "../assets/csslogo.png";
import html from "../assets/htmllogo.png";
import bootstrap from "../assets/bootstraplogo.png";
import react from "../assets/reactlogo.png";
import cplus from "../assets/c++.png";
import github from "../assets/githublogo.png";
import git from "../assets/gitlogo.png";
import javascript from "../assets/jslogo.png";
import node from "../assets/nodelogo.png";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
const TechStack = () => {
  return (
    <div className="list1">
      <h1> Tech Stack</h1>
      <div className="container-tech">
        <div className="img1">
          <img src={css} alt="css logo" />
          <img src={html} alt="html logo" />
          <img src={bootstrap} alt="bootstrap logo" />
        </div>
        <div className="img1">
          <img src={react} alt="react logo" />
          <img src={node} alt="css logo" />
          <img src={git} alt="css logo" />
        </div>
        <div className="img1">
          <img src={github} alt="html logo" />
          <img src={javascript} alt="bootstrap logo" />
          <img src={cplus} alt="c++ logo" />
        </div>

        <div className="img1">
          <img src={github} alt="html logo" />
          <img src={postman} alt="bootstrap logo" />
          <img src={vscode} alt="c++ logo" />
        </div>

        <div className="img1">
          <img src={git} alt="css logo" />
          <img src={github} alt="html logo" />
          <img src={postman} alt="bootstrap logo" />
        </div>
        <div className="img1">
          <img src={git} alt="css logo" />
          <img src={github} alt="html logo" />
          <img src={postman} alt="bootstrap logo" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
