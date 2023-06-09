import React from "react";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.imageContainer}>
      {/* overlay */}
      <div className={classes.overlay}>
        <h1>Delight Your Taste</h1>
        <h1>Buds with Every Order!</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Pizza"
      />
    </div>
  );
};

export default Hero;
