import styles from "./index.module.css";
import bigLogo from "../../assets/BigLogo.svg";

const Join = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={bigLogo} className={styles.image} />
      </div>
      <p className={styles.text_1}>Ready To Join A New Dimension?</p>
      <p className={styles.text_2}>
        With a simple integration with us, you never have to worry about all the
        boring “technical stuff”
      </p>
      <div className={styles.button_container}>
        <button className={styles.button}>Talk to an expert</button>
      </div>
    </div>
  );
};

export default Join;
