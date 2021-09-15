import React from "react";
import { Link } from "react-router-dom";
import classes from "./Option.module.css";
const Option = () => {
  return (
    // <div className={classes.container}>
    //   <button type="button" class="button">
    <div className={classes.dropdown}>
      ☰
      <div className={classes.dropdown_content}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/orders">My orders</Link>
        </li>
        <li>
          <Link to="/payments">payment</Link>
        </li>
      </div>
    </div>
  );
};

export default Option;

<div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>;
