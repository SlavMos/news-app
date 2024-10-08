import React from "react";
import s from "./header.module.css";
import { formData } from "../../helpers/formDate";
const Header = () => {
  return (
    <div className={s.Header}>
      <h1 className={s.Title}>News</h1>
      <p className={s.Date}>{formData(new Date())}</p>
    </div>
  );
};

export default Header;
