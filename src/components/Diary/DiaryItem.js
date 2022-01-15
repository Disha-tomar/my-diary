import classes from "./DiaryItem.module.css";
import FormButton from "../UI/FormButton";

const DiaryItem = (props) => {
  return (
    <div className={classes["diary-item-container"]}>
      <div className={classes.date}>Sunday, 9 Jan 2022</div>
      <div className={classes.title}>Title</div>

      <p className={classes.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className={classes["btn-container"]}>
        <FormButton>Edit</FormButton>
        <FormButton>Delete</FormButton>
      </div>
    </div>
  );
};

export default DiaryItem;
