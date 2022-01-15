import DiaryItem from "./DiaryItem";
import { useSelector } from "react-redux";
import classes from "./DiaryItemList.module.css";

const DiaryItemList = () => {
  const entries = useSelector((state) => state.diary.diaryList);

  return (
    <section className={classes.container}>
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
    </section>
  );
};

export default DiaryItemList;
