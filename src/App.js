import { useSelector } from "react-redux";

import { Fragment } from "react";
import NavigationBar from "./components/Header/NavigationBar";
import HomeBody from "./components/Header/HomeBody";
import NewEntryForm from "./components/Diary/NewEntryForm";
import EditEntry from "./components/Diary/EditEntry";
// import DiaryItem from "./components/Diary/DiaryItem";
import DiaryItemList from "./components/Diary/DiaryItemList";
import Footer from "./components/Footer/Footer";

function App() {
  const showHome = useSelector((state) => state.ui.homePage);
  const showForm = useSelector((state) => state.ui.form);
  const showEntries = useSelector((state) => state.ui.entries);
  const showEditForm = useSelector((state) => state.ui.editMode);
  // const entries = useSelector((state) => state.diary.diaryList);

  return (
    <Fragment>
      <NavigationBar />
      {showHome && <HomeBody />}
      {showForm && <NewEntryForm />}
      {showEditForm && <EditEntry />}
      {showEntries && <DiaryItemList />}

      <Footer />
    </Fragment>
  );
}

export default App;
