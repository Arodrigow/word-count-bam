import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.contentBox}>
      <form action="/api/form" method="post" className={styles.formBox}>
        <label htmlFor="textContent" className={styles.formItem}>
          Paste the text on the area:
        </label>
        <textarea id="textContent" name="textContent" cols={55} rows={10} />
        <button type="submit" className={styles.formItem}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
