import styles from "./index.module.css";
import codeIcon from "../../assets/CodeIcon.svg";
import codeImage from "../../assets/CodeImage.svg";

const Developer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_top_item}>
        <img src={codeIcon} />
        <p>Made for humans</p>
      </div>
      <p className={styles.container_text_1}>Developer First Approach</p>
      <p className={styles.container_text_2}>
        We turn complex infrastructure into simple code so you can focus on
        building game-changing products.
      </p>
      <div className={styles.container_image}>
        <img src={codeImage} className={styles.container_image} />
      </div>
    </div>
  );
};

export default Developer;
