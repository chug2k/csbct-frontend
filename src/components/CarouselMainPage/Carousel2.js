import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Style2.css";

function Carousel2() {
  return (
    <div className="">
      <Carousel fade>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601841162542-956af38ba052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="color-title">
            <h3>hahahahahahahha</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="" className="text-white">
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
          />

          <Carousel.Caption className="color-title ">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="" className="text-white">
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601273703778-54f00287ae5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Third slide"
          />

          <Carousel.Caption className="color-title ">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="" className="text-white">
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="color-box d-none d-lg-block ">
        <div className="card-body p-4">
          <h1 className="card-title mb-3 ">Sharing is Caring</h1>
          <p className="card-text mb-0 ">
            We're creating a P2P-microlending service to help address the urgent
            COVID-19 situation in Vietnam.
          </p>
        </div>
        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              <div className="small">
                <Button className="btn-primary">Discover project</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
