import React, { useState, useEffect, useCallback } from "react";
// import Data from "../../Data/Data";
import MealItem from "./MealItem/MealItem";
import FilterMeals from "./FilterMeals";
import classes from "./MainMenu.module.scss";

const MainMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // state for filtering items
  const [filterFoodList, setFilterFoodList] = useState([]);

  const fetchMenuHandler = useCallback(async () => {
    setHttpError(null);

    try {
      const response = await fetch(
        "https://react-food-app-5afee-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          category: data[key].category,
          image: data[key].image,
          price: data[key].price,
        });
      }

      // console.log(loadedMeals);

      setMenu(loadedMeals);
    } catch (error) {
      // console.log(error.message);
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMenuHandler();
  }, [fetchMenuHandler]);

  const itemListFilterHandler = (category) => {
    setFilterFoodList(
      menu.filter((item) => {
        if (category === "all") {
          return item.category !== category;
        } else {
          return item.category === category;
        }
      })
    );
    console.log("filter items");
  };

  const foodsList = menu.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        category={meal.category}
        image={meal.image}
        price={meal.price}
      />
    );
  });

  const filteredFoodList = filterFoodList.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        category={meal.category}
        image={meal.image}
        price={meal.price}
      />
    );
  });

  let content;

  if (menu.length > 0 && filterFoodList.length === 0) {
    content = <ul>{foodsList}</ul>;
  } else if (menu.length > 0 && filterFoodList.lenght !== 0) {
    content = <ul>{filteredFoodList}</ul>;
  }

  if (isLoading) {
    content = <p className={classes.error}>Loading..</p>;
  }

  if (httpError) {
    content = <p className={classes.error}>{httpError}</p>;
  }

  console.log("rerendering this component");

  return (
    <section className={classes.meals}>
      <FilterMeals onFilter={itemListFilterHandler} />
      {content}
    </section>
  );
};

export default MainMenu;
