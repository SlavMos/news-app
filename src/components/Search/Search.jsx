import s from "./search.module.css";
const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={s.search}>
      <input
        type="text"
        value={keywords}
        className={s.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
