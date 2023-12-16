import styles from "./index.module.css";
import dropdownIcon from "../../assets/DropdownIcon.svg";

const Faq = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text_1}>Frequently Asked Questions</p>
      </div>
      <div className={styles.questions}>
        <p>What is Payfen and what does it offer?</p>
        <img src={dropdownIcon} />
      </div>
      <div className={styles.questions}>
        <p>How does Payfen's credit scoring work?</p>
        <img src={dropdownIcon} />
      </div>{" "}
      <div className={styles.questions}>
        <p>How does Payfen's automated recollection process work?</p>
        <img src={dropdownIcon} />
      </div>{" "}
      <div className={styles.questions}>
        <p>What kind of lending solutions can I build with Payfen?</p>
        <img src={dropdownIcon} />
      </div>{" "}
      <div className={styles.questions}>
        <p>Can Payfen integrate with other systems?</p>
        <img src={dropdownIcon} />
      </div>{" "}
      <div className={styles.questions}>
        <p>What if my specific use case isn't listed?</p>
        <img src={dropdownIcon} />
      </div>{" "}
    </div>
  );
};

export default Faq
