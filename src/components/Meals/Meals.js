import React from "react";
import MainMenu from "./MainMenu";
import Card from "../UI/Card";
import classes from "./Meals.module.scss";

const Meals = () => {
  return (
    <>
      <Card>
        <h1>Here's Our Main Menu</h1>
        <p>
          Experience the difference with our food ordering app, where every dish
          is crafted with care using high-quality, fresh ingredients. Our
          talented and experienced chefs ensure that each meal is prepared
          just-in-time for maximum flavor and satisfaction.
        </p>
      </Card>

      <MainMenu />
    </>
  );
};

export default Meals;
