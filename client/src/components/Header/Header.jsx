import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.head}>
      <span className={styles.title}>Dogs</span>
      <Link to="/home">
        <button className={styles.button}>Back to Home</button>
      </Link>
    </div>
  );
}

export default Header;
