import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ name, image, temperament, weight, key, id }) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{name}</span>
      <img src={`${image}`} alt={`${name}`} />
      <div className={styles.foot}>
        <span>Temperament: {temperament}</span>
        <span>Weight: {weight} kg</span>
      </div>
      <Link to={`/detail/${id}`}>
        <button className={styles.btnInfo}>More info</button>
      </Link>
    </div>
  );
}

export default Card;
