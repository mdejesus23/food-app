import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Nerd'z Meal</h1>
        <HeaderCartButton />
      </header>
    </>
  );
};

export default Header;
