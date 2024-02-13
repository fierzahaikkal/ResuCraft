import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Sponsors } from "@/components/Sponsors";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
