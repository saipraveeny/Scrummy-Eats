import React from "react";
import { Link } from "react-router-dom";
import classes from "./Option.module.css";
import homelogo from "../../assets/home.png";
import orderlogo from "../../assets/order.png";
import paymentlogo from "../../assets/payment.png";
import contactlogo from "../../assets/contact.png";
const Option = () => {
  return (
    // <div className={classes.container}>
    //   <button type="button" class="button">
    <div className={classes.dropdown}>
      ☰
      <div className={classes.dropdown_content}>
        <li>
          <Link to="/">
            <img src={homelogo} alt="homelogo" />
            {"  "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src={orderlogo} alt="homelogo" />
            {"  "}My orders
          </Link>
        </li>
        <li>
          <Link to="/payments">
            <img src={paymentlogo} alt="homelogo" />
            {"  "}Payment
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={contactlogo} alt="homelogo" />
            {"  "}Contact
          </Link>
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
