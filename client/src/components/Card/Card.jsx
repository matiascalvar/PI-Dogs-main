import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ name, image, temperament, weight, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.card}>
        <span className={styles.title}>{name}</span>
        <img src={`${image}`} alt={`${name}`} />
        <div className={styles.foot}>
          <p>
            <span>&#128062;Temperament:</span> {temperament}
          </p>
          <p>
            <span>&#128062;Weight:</span> {weight} kg
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
