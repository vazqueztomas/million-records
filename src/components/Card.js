import React from "react";
import "../assets/css/Card.css";
import Parrafo from "./Parrafo";

const Card = (props) => {
  return (
    <div className="border">
      <div className="container">
        <img src={props.source} alt="Author" />
        <h1 className="title-author">{props.name}</h1>
        <Parrafo text = {props.details} className = 'pg-author'/>
      </div>
    </div>
  );
};

export default Card;
