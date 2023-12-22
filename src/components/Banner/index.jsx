import styles from "./index.module.css";
import { motion } from "framer-motion";
import profileImage from "../../assets/profileImage.svg";
import percentageDetails from "../../assets/PercentageDetails.svg";
import smallCheckIcon from "../../assets/SmallCheckIcon.svg";
import smallProfileImage from "../../assets/SmallProfileImage.svg";
import videoIcon from "../../assets/VideoIcon.svg";
import largeCheckIcon from "../../assets/LargeCheckIcon.svg";
import starIcon from "../../assets/StarIcon.svg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -500, opacity: 0 }}
          transition={{
            duration: 2,
            // type: "spring",
            // stiffness: 100,
          }}
          className={styles.banner_container_item}
        >
          <div className={styles.banner_container_top_item}>
            <img src={starIcon} />
            <p>New: Our AI integration just landed</p>
          </div>
          <p className={styles.banner_container_text_1}>Transforming</p>
          <p className={styles.banner_container_text_2}>Lending with</p>
          <p className={styles.banner_container_text_2}>Seamless Solutions</p>
          <div className={styles.banner_container_text_3_container}>
            <p className={styles.banner_container_text_3}>
              Optimize your lending with Payfen: Streamlined API, Advanced
            </p>
            <p className={styles.banner_container_text_3}>
              Verification, Automated Retrieval.
            </p>
            <p className={styles.mobile_banner_container_text_1}>
              <span className={styles.mobile_banner_container_text_1_sub}>
                Transforming{" "}
              </span>
              Lending
            </p>
            <p className={styles.mobile_banner_container_text_1}>
              With Seamless
            </p>
            <p className={styles.mobile_banner_container_text_1}>Solutions</p>
            <p className={styles.mobile_banner_container_text_2}>
              Optimize your lending with Payfen:
            </p>
            <p className={styles.mobile_banner_container_text_2}>
              Streamlined API, Advanced Verification,
            </p>
            <p className={styles.mobile_banner_container_text_2}>
              Automated Retrieval.
            </p>
          </div>
          <div className={styles.banner_container_button_container}>
            <div className={styles.banner_container_button_container_white_bg}>
              <button className={styles.banner_container_button}>
                Talk to an Expert
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 500, opacity: 0 }}
          transition={{
            duration: 2,
          }}
          className={styles.banner_container_item}
        >
          <img src={profileImage} className={styles.banner_image_item} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              // stiffness: 100,
              bounce: 0.5,
              type: "spring",
            }}
            className={styles.percentage_details_image}
          >
            <img src={percentageDetails} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2.2,
              // stiffness: 100,
              bounce: 0.5,
              type: "spring",
            }}
            className={styles.confirmation_container}
          >
            <p className={styles.confirmation_container_text}>Confirmation</p>
            <div>
              <div className={styles.confirmation_container_item}>
                <img src={smallCheckIcon} />
                <p>Legal Identification</p>
              </div>
              <div className={styles.confirmation_container_item}>
                <img src={smallCheckIcon} />
                <p>Contact Information</p>
              </div>
              <div className={styles.confirmation_container_item}>
                <img src={smallCheckIcon} />
                <p>Credit Score</p>
              </div>
              <div>
                <button className={styles.confirmation_container_button}>
                  Loan Approved 🎉
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2.4,
              // stiffness: 100,
              bounce: 0.5,
              type: "spring",
            }}
            className={styles.account_vertification_container}
          >
            <p className={styles.account_verification_text}>
              Account Verification
            </p>
            <div className={styles.account_verification_profile_container}>
              <div className={styles.account_verification_profile_item_1}>
                <img src={smallProfileImage} />
                <div>
                  <p
                    className={styles.account_verification_profile_item_1_text}
                  >
                    Robert Fox
                  </p>
                  <div
                    className={styles.account_verification_profile_item_1_item}
                  >
                    <img src={videoIcon} />
                    <p>Video selfie verification</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={largeCheckIcon} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
