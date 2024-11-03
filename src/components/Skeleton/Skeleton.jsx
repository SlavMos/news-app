import s from "./skeleton.module.css";

const Skeleton = ({ count = 1, type, direction = "column" }) => {
  return (
    <div>
      <ul className={direction === "column" ? s.columnList : s.rowList}>
        {/* Вне зависимости от количества скелетонов используем `ul` для списка */}
        {[...Array(count)].map((_, index) => (
          <li
            key={index}
            className={type === "banner" ? s.banner : s.item} // Выбираем нужный класс для типа скелетона
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Skeleton;
