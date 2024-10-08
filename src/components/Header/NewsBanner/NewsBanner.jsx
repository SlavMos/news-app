import { FormatTimeAgo } from "../../../helpers/formatTimeAgo";
import s from "./newsbanner.module.css";

const NewsBanner = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>
        {FormatTimeAgo(item.published)} by {item.author}{" "}
      </p>
    </div>
  );
};

export default NewsBanner;
