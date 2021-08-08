import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div>
      <h1>Make an impact in whole Vietnam!</h1>
      <div className="container">
        <div className="rightpart">
          <p>
            SOSmap helped arleady over 600 families through direct donations and
            resued many lives by delivering essential ressources such as food
            and medical equipment.
          </p>
        </div>
        <div className="leftpart">
          <img
            src="https://hospitality-on.com/sites/default/files/2020-05/Centara-food-donation-to-PRD_02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
