import { Fragment } from "react";

import image from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
