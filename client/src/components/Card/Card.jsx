import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Cards({ name, image, temperament, weight, key }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <img src={`${image}`} alt={`${name}`} width="300" />
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
      <Link to={`/detail/${key}`}>
        <button>More info</button>
      </Link>
    </div>
  );
}

export default Cards;
