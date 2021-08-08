import React from "react";
import receiver from "../../data";
import "./Card.css";

const Card = () => {
  const data = receiver;
  return (
    <div>
      <div className="wrapper">
        <div className="app">
          {data.map((e) => (
            <div className="card">
              <img src={e.imgURL} alt="" height="300px" width="400px" />
              <div>
                <h2>Name: {e.name}</h2>
                <h3>Location: {e.location}</h3>
                <h3>Needs: {e.need}</h3>
                <h4>Requesting for: {e.requestingFor}</h4>
                <p>Details: {e.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
