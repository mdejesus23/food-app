import React from "react";
import MainMenu from "./MainMenu";
// import FilterMeals from "./FilterMeals";

import Card from "../UI/Card";
import classes from "./Meals.module.scss";

const Meals = () => {
  return (
    <>
      <section className={classes.mealsIntro}>
        <Card>
          <h3>Here's Our Main Menu</h3>
          <p>
            Experience the difference with our food ordering app, where every
            dish is crafted with care using high-quality, fresh ingredients. Our
            talented and experienced chefs ensure that each meal is prepared
            just-in-time for maximum flavor and satisfaction.
          </p>
        </Card>
      </section>
      {/* <FilterMeals /> */}
      <MainMenu />
    </>
  );
};

export default Meals;
