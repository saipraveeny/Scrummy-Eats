import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForum";
import React from "react";
import { useContext, useState } from "react";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `Rs.${props.price}`;
  const cartCtx = useContext(cartContext);

  const [itemAmount, setItemAmount] = useState(0);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    setItemAmount(itemAmount + amount);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          count={itemAmount}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
