import s from "./Categories.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  const allCategories = ["All", ...categories.slice(0, 5)];
  return (
    <div className={s.category}>
      {allCategories.map((categories) => {
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
