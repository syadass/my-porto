// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials"; // Ini sekarang berisi Experience
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./Layouts/Footer"; // 1. Tambahkan import Footer (sesuaikan path foldernya)
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  
  return (
    <div className="">
      <Navbar />
      <Hero />
      
      {/* Service (About Me) sekarang di atas Skills */}
      <Service />
      <Skills />
      
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      
      {/* 2. Panggil komponen Footer di sini */}
      <Footer />
    </div>
  );
};

export default App;