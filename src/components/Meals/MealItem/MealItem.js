import Card from "../../UI/Card";
import classes from "./MealItem.module.scss";

const MealItem = (props) => {
  return (
    <Card>
      <li key={props.id} className={classes.mealContainer}>
        <div className={classes.imgContainer}>
          <img src={props.image} alt="food" />
        </div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.category}</p>
          <p>{`$ ${props.price}`}</p>
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
