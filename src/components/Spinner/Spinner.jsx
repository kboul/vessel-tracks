import loader from "./loader.gif";
import styles from "./styles.module.sass";

export default function Spinner() {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="loader" />
    </div>
  );
}
