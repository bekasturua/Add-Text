import React, { useRef, useState } from "react";

import classes from "./AddText.module.css";

function AddText(props) {
  const [enteredName, setEnteredName] = useState("");
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    if (enteredName.trim() === "") {
      return;
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={nameInputChangeHandler}
          id="title"
          ref={titleRef}
          value={enteredName}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <button>Add</button>
    </form>
  );
}

export default AddText;
