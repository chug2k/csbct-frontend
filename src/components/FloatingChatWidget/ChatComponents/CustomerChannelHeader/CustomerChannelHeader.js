import React from "react";

import "./CustomerChannelHeader.css";

export const CustomerChannelHeader = ({ avatarThumbnail, name }) => (
  <div className="channel-header__container">
    <div className="channel-header__heading">
      <div>
        <img className="channel-header__image" src={avatarThumbnail} />
      </div>
      <div className="channel-header__text">
        <h2 className="channel-header__name">{name}</h2>
      </div>
    </div>
  </div>
);
