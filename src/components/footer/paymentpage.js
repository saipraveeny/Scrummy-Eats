// import classes from "./OrderPage.module.css";
import React from "react";
import classes from "./paymentpage.module.css";

const PaymentPage = () => {
  return (
    <div className={classes.PaymentPage}>
      <h2>Payment</h2>
      <p>Currently we are only accepting cash on delivery</p>
    </div>
  );
};

export default PaymentPage;
