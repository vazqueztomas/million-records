import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="border">
      <div className="container">
        <img src={props.source} alt="Author" />
        <h1 className="title-author">{props.name}</h1>
        <p className="pg-author">{props.details}</p>
      </div>
    </div>
  );
};

export default Card;
