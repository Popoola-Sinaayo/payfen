import logo from "../../assets/logo.svg";
import payFen from "../../assets/PayFen.svg";
import styles from "./index.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigation_item_logo}>
        <img src={logo} alt="lgog" />
        <img src={payFen} className={styles.navigation_image_text} />
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
          <button className={styles.navigation_item_button}>Talk to us</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
