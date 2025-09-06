import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </>
  );
}

