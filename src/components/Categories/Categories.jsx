import s from "./Categories.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={s.category}>
      {categories.map((categories) => {
        return (
          <button
            onClick={() => setSelectedCategory(categories)}
            className={selectedCategory === categories ? s.active : s.item}
            key={categories}
          >
            {categories}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
