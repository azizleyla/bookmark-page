import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Extension from "./components/Extension";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
