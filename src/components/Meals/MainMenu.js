import React from "react";
import Data from "../../Data/Data";
import MealItem from "./MealItem/MealItem";
import classes from "./MainMenu.module.scss";

const MainMenu = () => {
  const foodsList = Data.map((meal) => {
    const { id, name, category, image, price } = meal;

    return (
      <MealItem
        key={id}
        id={id}
        name={name}
        category={category}
        image={image}
        price={price}
      />
    );
  });

  let content = <ul>{foodsList}</ul>;

  return <section className={classes.meals}>{content}</section>;
};

export default MainMenu;
