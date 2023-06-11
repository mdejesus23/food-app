import React, { useState } from "react";
import Data from "../../Data/Data";
import MealItem from "./MealItem/MealItem";
import FilterMeals from "./FilterMeals";
import classes from "./MainMenu.module.scss";

const MainMenu = () => {
  const [filterFoodList, setFilterFoodList] = useState(Data);

  const itemListFilterHandler = (category) => {
    setFilterFoodList(
      Data.filter((item) => {
        if (category === "all") {
          return item.category !== category;
        } else {
          return item.category === category;
        }
      })
    );
  };

  const foodsList = filterFoodList.map((meal) => {
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

  return (
    <section className={classes.meals}>
      <FilterMeals onFilter={itemListFilterHandler} />
      {content}
    </section>
  );
};

export default MainMenu;
