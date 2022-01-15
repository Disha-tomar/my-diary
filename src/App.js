// import logo from "./logo.svg";
// import "./App.css";
import { Fragment } from "react";
import NavigationBar from "./components/Header/NavigationBar";
import HomeBody from "./components/Header/HomeBody";
import Header from "./components/Header/Header";
import NewEntryForm from "./components/Diary/NewEntryForm";
import DiaryItem from "./components/Diary/DiaryItem";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <HomeBody />
      <DiaryItem />
      <DiaryItem />
      <DiaryItem />

      {/* <NewEntryForm /> */}
    </Fragment>
  );
}

export default App;
