import { useState } from "react";
import { useDispatch } from "react-redux";
import { diaryActions } from "../../store/diary-slice";

import classes from "./NewEntryForm.module.css";
import FormButton from "../UI/FormButton";

const NewEntryForm = () => {
  const dispatch = useDispatch();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const addEntryHandler = (event) => {
    event.preventDefault();
    console.log(enteredTitle, enteredContent);
    dispatch(
      diaryActions.addEntry({
        id: Math.random(),
        title: enteredTitle,
        date: new Date().toDateString(),
        content: enteredContent,
      })
    );
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  return (
    <section className={classes["form-container"]}>
      <div className={classes["form"]}>
        <form>
          <div className={classes["form-row"]}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Add Title here"
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className={classes["form-row"]}>
            <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              id="content"
              placeholder="Add Content here"
              onChange={contentChangeHandler}
            ></textarea>
          </div>
          <div className={classes["button-container"]}>
            <FormButton onClick={addEntryHandler}>Save</FormButton>
            <FormButton>Cancel</FormButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewEntryForm;
