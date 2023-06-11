import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Nerd'z Meal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;
