import React from "react";



const HomePage = () => {
  console.log(localStorage.getItem("isLoggedIn"))
  return (
    <div>
      <h1> Home Page Goes Here </h1>
    </div>
  );
};

export default HomePage;
