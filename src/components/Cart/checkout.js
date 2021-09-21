import { useRef, useState } from "react";

import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    Address: true,
    Phonenumber: true,
    pinCode: true,
  });

  const nameInputRef = useRef();
  const AddressInputRef = useRef();
  const pinCodeInputRef = useRef();
  const PhonenumberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredpinCode = pinCodeInputRef.current.value;
    const enteredPhonenumber = PhonenumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhonenumberIsValid = isTenChars(enteredPhonenumber);
    const enteredpinCodeIsValid = isSixChars(enteredpinCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      Address: enteredAddressIsValid,
      Phonenumber: enteredPhonenumberIsValid,
      pinCode: enteredpinCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPhonenumberIsValid &&
      enteredpinCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit cart data
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const AddressControlClasses = `${classes.control} ${
    formInputsValidity.Address ? "" : classes.invalid
  }`;
  const pinCodeControlClasses = `${classes.control} ${
    formInputsValidity.pinCode ? "" : classes.invalid
  }`;
  const PhonenumberControlClasses = `${classes.control} ${
    formInputsValidity.Phonenumber ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={AddressControlClasses}>
        <label htmlFor="Address">Address</label>
        <input type="text" id="Address" ref={AddressInputRef} />
        {!formInputsValidity.Address && <p>Please enter a valid Address!</p>}
      </div>
      <div className={pinCodeControlClasses}>
        <label htmlFor="pin">pin Code</label>
        <input type="text" id="pin" ref={pinCodeInputRef} />
        {!formInputsValidity.pinCode && <p>Please enter a valid pin code!</p>}
      </div>
      <div className={PhonenumberControlClasses}>
        <label htmlFor="Phonenumber">Phonenumber</label>
        <input type="number" id="Phonenumber" ref={PhonenumberInputRef} />
        {!formInputsValidity.Phonenumber && (
          <p>Please enter a valid Phonenumber!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
