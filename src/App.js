// import logo from "./logo.svg";
// import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import NewEntryForm from "./components/Diary/NewEntryForm";
import DiaryItem from "./components/Diary/DiaryItem";

function App() {
  return (
    <Fragment>
      <DiaryItem />
      <DiaryItem />
      <DiaryItem />
      <Header />
      {/* <NewEntryForm /> */}
    </Fragment>
  );
}

export default App;
