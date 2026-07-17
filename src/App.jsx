import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Offer from "./components/Offer.jsx";
import Difference from "./components/Difference.jsx";
import Pricing from "./components/Pricing.jsx";
import Steps from "./components/Steps.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Difference />
        <Pricing />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
