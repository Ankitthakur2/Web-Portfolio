import React from "react";

const Card = (props) => {
  return (
    <div className={props.className}>
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
