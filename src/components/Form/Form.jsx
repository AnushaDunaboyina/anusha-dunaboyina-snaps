import React from "react";
import { useState } from "react";
import "./Form.scss";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ name: false, comment: false });

  //  Create a change handler for all inputs
  const handleChangeName = (event) => {
    setName(event.target.value);
    setErrors((previousErrors) => ({ ...previousErrors, name: false }));
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
    setErrors((previousErrors) => ({ ...previousErrors, comment: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameError = !name.trim();
    const commentError = !comment.trim();

    if (nameError || commentError) {
      setErrors({ name: nameError, comment: commentError });
      return;
    }

    onSubmit(name, comment); // call the onSubmit prop with the form data

    // Clear the form inputs
    setName("");
    setComment("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__section">
          <label className="form__label form__label--name">Name</label>
          <input
            className={`form__input ${errors.name ? "error" : ""}`}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="form__section">
          <label className="form__label form__label--comment">Comment</label>
          <textarea
            className={`form__textarea ${errors.comment ? "error" : ""}`}
            type="text"
            name="comment"
            placeholder="Add a new comment"
            value={comment}
            onChange={handleChangeComment}
          />
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
