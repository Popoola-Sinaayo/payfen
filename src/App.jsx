import styles from "./App.module.css";
import Banner from "./components/Banner";
import Developer from "./components/Developer";
import Explore from "./components/Explore";
import Faq from "./components/FAQ";
import Join from "./components/Join";
import MidText from "./components/MidText";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import logo from "./assets/logo.svg";
import payFen from "./assets/PayFen.svg";
import facebookIcon from "./assets/FacebookIcon.svg";
import twitterIcon from "./assets/TwitterIcon.svg";
import linkedinIcon from "./assets/LinkedinIcon.svg";
import instagramIcon from "./assets/InstagramIcon.svg";
import youtubeIcon from "./assets/YoutubeIcon.svg";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <MidText />
      <Services />
      <Explore />
      <Developer />
      <Faq />
      <Join />
      <div className={styles.container}>
        <div className={styles.container_item_1}>
          <img src={logo} alt="lgog" />
          <img src={payFen} className={styles.container_item_1_image_text} />
        </div>
        <div className={styles.container_item_2}>
          <a href="http://">
            <p>Privacy Policy</p>
          </a>
          <a href="http://">
            <p>Terms and Conditon</p>
          </a>{" "}
          <a href="http://">
            <p>FAQ</p>
          </a>{" "}
        </div>
        <div className={styles.container_item_3}>
          <a>
            <img src={facebookIcon} />
          </a>
          <a>
            <img src={twitterIcon} />
          </a>
          <a>
            <img src={instagramIcon} />
          </a>
          <a>
            <img src={linkedinIcon} />
          </a>
          <a>
            <img src={youtubeIcon} />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
