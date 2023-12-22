import styles from "./index.module.css";
import { motion } from "framer-motion";
import lendIcon from "../../assets/LendIcon.svg";
import phoneIcon from "../../assets/PhoneImage.png";
import exchangeIcon from "../../assets/ExchangeIcon.svg";
import chipIcon from "../../assets/ChipIcon.svg";
import mortgageIcon from "../../assets/MortgageIcon.svg";
import connectionLink from "../../assets/ConnectionLink.svg";

const Explore = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      viewport={{ margin: "-250px 0px 50px 0px" }}
      className={styles.container}
    >
      <p className={styles.container_text_1}>Explore the innovative</p>
      <p className={styles.container_text_1}>Projects empowered by Payfen.</p>
      <div className={styles.description_container}>
        <div className={styles.description_container_item}>
          <img src={lendIcon} />
          <p className={styles.description_text_1}>Lending App</p>
          <p className={styles.description_text_2}>
            Build a comprehensive lending solution (Web, iOS, Android, and USSD)
            with our solution in a matter of days.
          </p>
        </div>
        <div className={styles.description_container_item_image_container}>
          <img
            src={phoneIcon}
            className={styles.description_container_item_image}
          />
        </div>
      </div>
      <div className={styles.features_container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.5, type: "spring" },
          }}
          viewport={{ margin: "-250px 0px -80px 0px" }}
          className={styles.features_container_item}
        >
          <img src={exchangeIcon} />

          <div className={styles.features_container_item_text}>
            <p className={styles.features_container_item_text_1}>
              Buy Now, Pay Later
            </p>
            <p className={styles.features_container_item_text_2}>
              Create your own bespoke BNPL product with Payfen with zero stress.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.8, type: "spring" },
          }}
          viewport={{ margin: "-250px 0px -80px 0px" }}
          className={styles.features_container_item}
        >
          <img src={chipIcon} />
          <div className={styles.features_container_item_text}>
            <p className={styles.features_container_item_text_1}>
              Zapier Fintech
            </p>
            <p className={styles.features_container_item_text_2}>
              With a single integration to Payfen, You connect as many systems
              as you want with a single button.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 1.1, bounce: 1, type: "tween" },
          }}
          viewport={{ margin: "-250px 0px -80px 0px" }}
          className={styles.features_container_item}
        >
          <img src={mortgageIcon} />
          <div className={styles.features_container_item_text}>
            <p className={styles.features_container_item_text_1}>
              Mortgage Service
            </p>
            <p className={styles.features_container_item_text_2}>
              Need to pre-qualify a candidate? We will help you understand your
              customer’s financials situation with indepth data.
            </p>
          </div>
        </motion.div>
      </div>
      <div className={styles.connection_container}>
        <img src={connectionLink} />
        <div>
          <div className={styles.connection_container_top}>
            <div className={styles.line}></div>
            <p className={styles.connection_top_text}>Why Chose Payfen</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.connection_container_text}>
            <p className={styles.connection_container_text_1}>
              Accelerate your lending business with
            </p>
            <p className={styles.connection_container_text_1}>
              Payfen's comprehensive solutions.
            </p>
            <div className={styles.connection_container_text_2_container}>
              <p className={styles.connection_container_text_2}>
                Streamline processes, make informed decisions, and enhance
                customer experiences.
              </p>
              <p className={styles.connection_container_text_2}>
                Unlock the potential of your lending operations today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
