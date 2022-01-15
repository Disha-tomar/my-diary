import { useDispatch } from "react-redux";
import classes from "./DiaryItem.module.css";
import FormButton from "../UI/FormButton";
import { uiActions } from "../../store/ui-slice";

const DiaryItem = (props) => {
  const dispatch = useDispatch();
  const showFormHandler = () => {
    dispatch(uiActions.showForm());
  };

  return (
    <div className={classes["diary-item-container"]}>
      <div className={classes.date}>{props.date}</div>
      <div className={classes.title}>{props.title}</div>

      <p className={classes.content}>{props.content}</p>
      <div className={classes["btn-container"]}>
        <FormButton onClick={showFormHandler}>Edit</FormButton>
        <FormButton>Delete</FormButton>
      </div>
    </div>
  );
};

export default DiaryItem;
