import DiaryItem from "./DiaryItem";
import { useSelector } from "react-redux";
import classes from "./DiaryItemList.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const DiaryItemList = () => {
  const entries = useSelector((state) => state.diary.diaryList);

  console.log(entries);
  let element;

  if (entries.length !== 0) {
    element = (
      <div>
        {entries.map((entry) => (
          <DiaryItem
            key={entry.id}
            id={entry.id}
            title={entry.title}
            date={entry.date}
            content={entry.content}
          />
        ))}
      </div>
    );
  } else {
    element = (
      <p className={classes["no-entries"]}>You have no entries to show..</p>
    );
  }

  console.log(element);

  return <section className={classes.container}>{element}</section>;

  // return (
  //   <section className={classes.container}>
  //     <div>
  //       {entries.map((entry) => (
  //         <DiaryItem
  //           key={entry.id}
  //           id={entry.id}
  //           title={entry.title}
  //           date={entry.date}
  //           content={entry.content}
  //         />
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default DiaryItemList;
