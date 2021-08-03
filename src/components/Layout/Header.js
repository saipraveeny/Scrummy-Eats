import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt="se-logo" />
        <h1>Scrummy Eats</h1>
        <HeaderCartButton onClick = {props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
