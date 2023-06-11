import React from "react";

import classes from "./FilterMeals.module.scss";

const FilterMeals = (props) => {
  const filterAllItem = () => {
    props.onFilter("all");
  };

  const filterBurgerItem = () => {
    props.onFilter("burger");
  };

  const filterPizzaItem = () => {
    props.onFilter("pizza");
  };

  const filterSaladItem = () => {
    props.onFilter("salad");
  };

  const filterChickenItem = () => {
    props.onFilter("chicken");
  };

  return (
    <div className={classes["filter-section"]}>
      <h4>Filter Items</h4>
      <div className={classes["controls"]}>
        <button onClick={filterAllItem}>All</button>
        <button onClick={filterBurgerItem}>Burger</button>
        <button onClick={filterPizzaItem}>Pizza</button>
        <button onClick={filterSaladItem}>Salad</button>
        <button onClick={filterChickenItem}>Chicken</button>
      </div>
    </div>
  );
};

export default FilterMeals;
