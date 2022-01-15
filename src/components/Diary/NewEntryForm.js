import classes from "./NewEntryForm.module.css";
import FormButton from "../UI/FormButton";

const NewEntryForm = () => {
  return (
    <section className={classes["form-container"]}>
      <div className={classes["form"]}>
        <form>
          <div className={classes["form-row"]}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder="Add Title here"></input>
          </div>
          <div className={classes["form-row"]}>
            <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              id="content"
              placeholder="Add Content here"
            ></textarea>
          </div>
          <div className={classes["button-container"]}>
            <FormButton type="submit">Add</FormButton>
            <FormButton>Cancel</FormButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewEntryForm;
