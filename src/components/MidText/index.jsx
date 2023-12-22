import styles from "./index.module.css";
import { motion } from "framer-motion";
const MidText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ margin: "-250px 0px -80px 0px" }}
      className={styles.container}
    >
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
        <div className={styles.container_button_container_white_bg}>
          <button className={styles.container_button}>Talk to an expert</button>
        </div>
      </div>
    </motion.div>
  );
};

export default MidText;
