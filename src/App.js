import "./App.css";
import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";
import Experince from "../src/components/experince/Experince";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import Portfolio from "../src/components/portfolio/Portfolio";
import Services from "../src/components/services/Services";
import Testimonials from "../src/components/testimonials/Testimonials";
import Qualification from "./components/Qualification/Qualification";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Qualification />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
