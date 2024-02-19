import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
