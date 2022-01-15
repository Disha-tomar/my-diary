import { useSelector, useDispatch } from "react-redux";

import { Fragment } from "react";
import NavigationBar from "./components/Header/NavigationBar";
import HomeBody from "./components/Header/HomeBody";

import NewEntryForm from "./components/Diary/NewEntryForm";
// import DiaryItem from "./components/Diary/DiaryItem";
import DiaryItemList from "./components/Diary/DiaryItemList";

function App() {
  const dispatch = useDispatch();
  const showHome = useSelector((state) => state.ui.homePage);
  const showForm = useSelector((state) => state.ui.form);
  const showEntries = useSelector((state) => state.ui.entries);
  return (
    <Fragment>
      <NavigationBar />
      {showHome && <HomeBody />}
      {showForm && <NewEntryForm />}
      {showEntries && <DiaryItemList />}
    </Fragment>
  );
}

export default App;
