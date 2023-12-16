
import styles from "./index.module.css";

const MidText = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container_text_1}>
        We did the hard work just for you
      </p>
      <p className={styles.container_text_2}>
        With a simple integration with us, you never have to worry about
      </p>
      <p className={styles.container_text_2}>
        {" "}
        all the boring “technical stuff” and you can focus on your
      </p>
      <p className={styles.container_text_2}>
        customer and grow your business.
      </p>
      <div className={styles.container_button_container}>
        <button className={styles.container_button}>Get Started</button>
      </div>
    </div>
  );
}

export default MidText