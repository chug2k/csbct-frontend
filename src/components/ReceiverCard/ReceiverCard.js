import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ReceiverCard.css";

const ReceiverCard = ({
  id,
  imgURL,
  name,
  location,
  need,
  requestingFor,
  details,
}) => {
  return (
    <div class="row gx-5">
      <div class="col-lg-4 mb-5 h-100">
        <div class="card h-100 shadow border-0">
          <img
            class="card-img-top"
            src={imgURL}
            alt="..."
            height="300px"
            width="250px"
          />
          <div class="card-body p-4 h-100">
            <div class="badge bg-primary bg-gradient rounded-pill mb-2 align-items">
              {location}
            </div>
            <div class="h5 card-title mb-3">{name}</div>
            <div class="h6 card-title mb-3">Requests: {need}VND</div>
            <p class="card-text mb-0">{details}</p>
          </div>
          <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
            <div class="d-flex align-items-end justify-content-between">
              <div class="d-flex align-items-center">
                <div class="small">
                  <div class="fw-bold">Needed for: {requestingFor}</div>
                  <div class="text-muted">Date posted: March 12, 2021</div>
                </div>
              </div>
            </div>
            <Link to={`/requests/${id}`}>
              <Button>See More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverCard;
