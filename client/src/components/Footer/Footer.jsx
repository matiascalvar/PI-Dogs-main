import styles from "./Footer.module.css";
function Footer() {
  return (
    <span className={styles.footer}>
      {"<"}Developed by Matias Calvar/{">"}
    </span>
  );
}

export default Footer;
