import classes from "./FormButton.module.css";

const FormButton = (props) => {
  return <div className={classes.btn}>{props.children}</div>;
};

export default FormButton;
