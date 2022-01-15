import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { diaryActions } from "../../store/diary-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./EditEntry.module.css";
import FormButton from "../UI/FormButton";

const EditEntry = () => {
  const entry = useSelector((state) => state.diary.diaryItem);

  const dispatch = useDispatch();
  const [enteredTitle, setEnteredTitle] = useState(entry.title);
  const [enteredContent, setEnteredContent] = useState(entry.content);

  const addEntryHandler = (event) => {
    event.preventDefault();
    console.log(enteredTitle, enteredContent);
    dispatch(
      diaryActions.updateEntry({
        id: entry.id,
        date: entry.date,
        title: enteredTitle,

        content: enteredContent,
      })
    );

    dispatch(uiActions.showEntries());
  };

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const showEntriesHandler = () => {
    dispatch(uiActions.showEntries());
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
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className={classes["form-row"]}>
            <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              id="content"
              placeholder="Add Content here"
              value={enteredContent}
              onChange={contentChangeHandler}
            ></textarea>
          </div>
          <div className={classes["button-container"]}>
            <FormButton onClick={addEntryHandler}>Save</FormButton>
            <FormButton onClick={showEntriesHandler}>Cancel</FormButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditEntry;
