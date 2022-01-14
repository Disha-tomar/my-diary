import classes from "./Navigation.module.css";
import HomePageButton from "../UI/HomePageButton";

const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <HomePageButton>Home</HomePageButton>
          </li>
          <li>
            <HomePageButton>Your entries</HomePageButton>
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
