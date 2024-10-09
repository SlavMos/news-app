import s from "./image.module.css";

const Image = ({ image }) => {
  return (
    <div className={s.wrapper}>
      {image ? <img src={image} alt="news" className={s.image} /> : null}
    </div>
  );
};

export default Image;
