import styles from "./Footer.module.css";
function Footer() {
  return (
    <span className={styles.footer}>
      <a href="https://github.com/matiascalvar">
        {"<"}Developed by Matias Calvar/{">"}
      </a>
    </span>
  );
}

export default Footer;
