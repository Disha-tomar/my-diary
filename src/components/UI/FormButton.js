import classes from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <div onClick={props.onClick} className={classes.btn}>
      {props.children}
    </div>
  );
};

export default FormButton;
