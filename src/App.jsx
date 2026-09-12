import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
