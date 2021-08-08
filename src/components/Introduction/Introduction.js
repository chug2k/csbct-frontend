import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div>
      <div className="container">
        <div className="leftside">
          <img src="https://i.ytimg.com/vi/qAiCYazj9Hw/hqdefault.jpg" alt="" />
        </div>
        <div className="rightside">
          <h2>What is SOSmap?</h2>
          <p>
            SOSmap is a charity app which allows users to directly donate money,
            food, clothes and other things to people in need. Everyone can sign
            up to be a donor and help people in need today!
          </p>
          <p>
            Maecenas velit tellus, tristique quis orci id, gravida malesuada
            diam. Sed eget turpis enim. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Aliquam erat
            volutpat. Curabitur eu quam nec purus aliquam porttitor. Mauris in
            elit eu odio dictum tincidunt. Nam at augue erat. Nam auctor tellus
            eget urna tincidunt elementum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
