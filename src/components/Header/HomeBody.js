import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./HomeBody.module.css";
import HomePageButton from "../UI/HomePageButton";

const HomeBody = () => {
  const dispatch = useDispatch();
  const showFormHandler = () => {
    dispatch(uiActions.showForm());
  };
  return (
    <section className={classes.container}>
      <div className={classes["container-body"]}>
        <div className={classes.title}>
          <h1>My diary</h1>{" "}
        </div>

        <div className={classes.content}>
          <h4>
            Organize your thoughts or record daily events anytime and anywhere!
          </h4>{" "}
        </div>
        <div className={classes.btn}>
          <HomePageButton onClick={showFormHandler}>
            Get started &rarr;
          </HomePageButton>
        </div>
      </div>
    </section>
  );
};

export default HomeBody;
