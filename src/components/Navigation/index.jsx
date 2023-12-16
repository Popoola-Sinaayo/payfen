import logo from "../../assets/logo.svg";
import payFen from "../../assets/PayFen.svg";
import styles from "./index.module.css";
import mobileNavigator from "../../assets/MobileNavigator.svg";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress.get());
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 500, opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.container}
    >
      <div className={styles.navigation_container}>
        <div className={styles.navigation_item_logo}>
          <img src={logo} alt="lgog" />
          <img src={payFen} className={styles.navigation_image_text} />
        </div>
        <div
          className={styles.navigator}
          onClick={() => setShowMobileNav((prevValue) => !prevValue)}
        >
          <img src={mobileNavigator} className={styles.mobile_navigator} />
        </div>
        <div className={styles.navigation_item}>
          <div className={styles.navigation_item_links}>
            <a href="http://">
              <p>Our Solution</p>
            </a>
            <a href="http://">
              <p>Use Cases</p>
            </a>{" "}
            <a href="http://">
              <p>Developer</p>
            </a>{" "}
            <a href="http://">
              <p>About Us</p>
            </a>
          </div>
          <div>
            <button className={styles.navigation_item_button}>
              Talk to us
            </button>
          </div>
        </div>
      </div>
      <motion.div
        layout
        className={styles.mobile_navigation_item}
        style={{ display: showMobileNav ? "block" : "none" }}
      >
        <div className={styles.mobile_navigation_item_links}>
          <a href="http://">
            <p>Our Solution</p>
          </a>
          <a href="http://">
            <p>Use Cases</p>
          </a>{" "}
          <a href="http://">
            <p>Developer</p>
          </a>{" "}
          <a href="http://">
            <p>About Us</p>
          </a>
        </div>
        <div className={styles.mobile_navigation_item_button_container}>
          <button className={styles.mobile_navigation_item_button}>
            Talk to us
          </button>
        </div>
      </motion.div>

      <motion.div
        style={{
          // width: `${scrollYProgress.get() * 100}%`,
          scaleX: scrollYProgress,
        }}
        className={styles.progress_bar}
      />
    </motion.div>
  );
};

export default Navigation;
