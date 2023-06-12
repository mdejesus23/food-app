import React, { useState } from "react";

import classes from "./FilterMeals.module.scss";

const FilterMeals = (props) => {
  const [activeButton, setActiveButton] = useState("");

  const filterAllItem = (event) => {
    setActiveButton(event.target.id);
    props.onFilter("all");
  };

  const filterBurgerItem = (event) => {
    setActiveButton(event.target.id);
    props.onFilter("burger");
  };

  const filterPizzaItem = (event) => {
    setActiveButton(event.target.id);
    props.onFilter("pizza");
  };

  const filterSaladItem = (event) => {
    setActiveButton(event.target.id);
    props.onFilter("salad");
  };

  const filterChickenItem = (event) => {
    setActiveButton(event.target.id);
    props.onFilter("chicken");
  };

  return (
    <div className={classes["filter-section"]}>
      <h4>Filter Items</h4>
      <div className={classes["controls"]}>
        <button
          id="all"
          className={
            activeButton === "all" ? `${classes.active}` : `${classes.button}`
          }
          onClick={filterAllItem}
        >
          All
        </button>
        <button
          id="burger"
          className={
            activeButton === "burger"
              ? `${classes.active}`
              : `${classes.button}`
          }
          onClick={filterBurgerItem}
        >
          Burger
        </button>
        <button
          id="pizza"
          className={
            activeButton === "pizza" ? `${classes.active}` : `${classes.button}`
          }
          onClick={filterPizzaItem}
        >
          Pizza
        </button>
        <button
          id="salad"
          className={
            activeButton === "salad" ? `${classes.active}` : `${classes.button}`
          }
          onClick={filterSaladItem}
        >
          Salad
        </button>
        <button
          id="chicken"
          className={
            activeButton === "chicken"
              ? `${classes.active}`
              : `${classes.button}`
          }
          onClick={filterChickenItem}
        >
          Chicken
        </button>
      </div>
    </div>
  );
};

export default FilterMeals;
