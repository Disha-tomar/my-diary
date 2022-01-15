import classes from "./Navigation.module.css";
import HomePageButton from "../UI/HomePageButton";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const showEntriesHandler = () => {
    dispatch(uiActions.showEntries());
  };

  const showHomePageHandler = () => {
    dispatch(uiActions.showHomePage());
  };

  const showFormHandler = () => {
    dispatch(uiActions.showForm());
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <HomePageButton onClick={showHomePageHandler}>Home</HomePageButton>
          </li>
          <li>
            <HomePageButton onClick={showFormHandler}>Add entry</HomePageButton>
          </li>
          <li>
            <HomePageButton onClick={showEntriesHandler}>
              Your entries
            </HomePageButton>
          </li>
          <li>
            <HomePageButton>Contact me</HomePageButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
