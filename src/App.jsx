import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useState , useEffect } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio , setRatio] = useState(window.innerWidth / window.innerHeight)
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return +ratio < 2 ? (
    <>  
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (<em id="customMessage">Please Change the ratio</em>)
};

export default App;
