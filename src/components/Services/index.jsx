import styles from "./index.module.css";
import hierarchyLink from "../../assets/HierarchyLink.svg";
import multiPartyLink from "../../assets/MultiPartyLink.svg";
import verifiedIcon from "../../assets/VerifiedIcon.svg";
import verifiedImage from "../../assets/VerifiedItem.svg";
import smartConnectorIcon from "../../assets/SmartConnectorIcon.svg";
import smartConnectorImage from "../../assets/SmartConnectorItem.svg";
import paymentIcon from "../../assets/PaymentIcon.svg";
import paymentImage from "../../assets/PaymentItem.svg";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_item_container}>
        <p>Our Services</p>
      </div>
      <div className={styles.container_text}>
        <p className={styles.container_text_1}>Revolutionize Your Lending</p>
        <p className={styles.container_text_1}>Experience with Payfen</p>
        <p className={styles.container_text_2}>
          Step into a new financial era with Payfen's innovations. From seamless
          API integration to advanced security, we redefine lending's future for
          you.
        </p>
      </div>
      <div className={styles.services_container}>
        <div className={styles.services_item}>
          <div className={styles.services_item_top_item}>
            <img src={hierarchyLink} />
            <p>Easy API Integration</p>
          </div>
          <div>
            <p className={styles.services_item_text_1}>
              Elevate Your Platform with
            </p>
            <p className={styles.services_item_text_1}>
              Seamless API Integration
            </p>
            <p className={styles.services_item_text_2}>
              Effortlessly enhance your lending platform with Payfen's API
              integration, seamlessly integrating into your existing
              infrastructure.
            </p>
          </div>
          <div className={styles.services_bottom_item}>
            <img src={multiPartyLink} />
          </div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.services_item_top_item}>
            <img src={verifiedIcon} />
            <p>Robust User Verification</p>
          </div>
          <div>
            <p className={styles.services_item_text_1}>
              Advanced User Verification
            </p>
            <p className={styles.services_item_text_1}>
              for Unmatched Security
            </p>
            <p className={styles.services_item_text_2}>
              Effortlessly enhance your lending platform with Payfen's API
              integration, seamlessly integrating into your existing
              infrastructure.
            </p>
          </div>
          <div className={styles.services_bottom_item}>
            <img src={verifiedImage} />
          </div>
        </div>
      </div>
      <div className={styles.services_container}>
        <div className={styles.services_item}>
          <div className={styles.services_item_top_item}>
            <img src={smartConnectorIcon} />
            <p>Smart Decision Engine</p>
          </div>
          <div>
            <p className={styles.services_item_text_1}>
              Intelligent Credit Score
            </p>
            <p className={styles.services_item_text_1}>Management</p>
            <p className={styles.services_item_text_2}>
              Enhance credit scoring: Payfen's smart engine for informed,
              risk-conscious decisions.
            </p>
          </div>
          <div className={styles.services_bottom_item}>
            <img src={smartConnectorImage} />
          </div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.services_item_top_item}>
            <img src={paymentIcon} />
            <p>Automated Retrieval</p>
          </div>
          <div className={styles.services_item_text}>
            <p className={styles.services_item_text_1}>Revolutionizing Debt</p>
            <p className={styles.services_item_text_1}>
              Collection for Enhanced
            </p>
            <p className={styles.services_item_text_1}>Efficiency</p>
            <p className={styles.services_item_text_2}>
              Say goodbye to manual debt collection. Payfen automates retrieval,
              swiftly tracking and debiting accounts for a seamless, discreet
              process.
            </p>
          </div>
          <div className={styles.services_bottom_item}>
            <img src={paymentImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
