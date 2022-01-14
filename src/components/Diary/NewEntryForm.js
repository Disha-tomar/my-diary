import classes from "./NewEntryForm.module.css";

const NewEntryForm = () => {
  return (
    <section className={classes["form-container"]}>
      <div className={classes["form"]}>
        <form>
          <div className={classes["form-row"]}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"></input>
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input type="text" id="content"></input>
          </div>
          <div>
            <button type="submit">Add</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewEntryForm;
