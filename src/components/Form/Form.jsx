import React from "react";
import "./Form.scss";
// import { useState } from "react;"

const Form = () => {
  // const [name, setname] = useState("");
  // const [comment, setComment] = useState("");

  return (
    <form className="form">
      <div className="form__section">
        <label className="form__label form__label--name">Name</label>
        <input
          className={"form__input"}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="form__section">
        <label className="form__label form__label--comment">Comment</label>
        <textarea
          className={"form__textarea"}
          type="text"
          name="comment"
          placeholder="Add a new comment"
        />
      </div>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
