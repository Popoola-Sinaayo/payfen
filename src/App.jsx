import Banner from "./components/Banner";
import Developer from "./components/Developer";
import Explore from "./components/Explore";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Join from "./components/Join";
import MidText from "./components/MidText";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

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
      <Footer />
    </>
  );
}

export default App;
