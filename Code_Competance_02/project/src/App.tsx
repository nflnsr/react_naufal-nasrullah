import "./App.css";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
