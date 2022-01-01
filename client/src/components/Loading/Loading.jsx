import styles from "./Loading.module.css";
import loadingicon from "../../images/loading.gif";
// import loadingicon2 from "../../images/loading-dog.gif";

function Loading() {
  return (
    <>
      <h1 className={styles.title}>Loading...</h1>
      <img
        className={styles.loadingicon}
        src={loadingicon}
        alt="loading icon"
      />
    </>
  );
}

export default Loading;
