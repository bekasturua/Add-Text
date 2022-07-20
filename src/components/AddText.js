import React, { useRef, useState } from "react";

import classes from "./AddText.module.css";

function AddText(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [messageSent, setMessageSent] = useState();
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    if (enteredName) {
      setMessageSent(true);
    }
    const text = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(text);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          onChange={nameInputChangeHandler}
          id="title"
          ref={titleRef}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className={classes.errorText}>Name must not be empty.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Message</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
        {!enteredNameIsValid && (
          <p className={classes.errorText}>Message must not be empty.</p>
        )}
      </div>
      <button>Send</button>
      {messageSent && <p>Message Sent</p>}
    </form>
  );
}

export default AddText;
