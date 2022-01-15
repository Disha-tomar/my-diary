import "./HomePageButton.module.css";

const HomePageButton = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default HomePageButton;
