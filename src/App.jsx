import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Proyectos from "./components/Proyectos";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    // Compensación global por la altura REAL del header
    const setScrollPadding = () => {
      const h = document.getElementById("site-header")?.offsetHeight || 96;
      document.documentElement.style.scrollPaddingTop = `${h + 8}px`; // colchón
    };

    setScrollPadding();
    window.addEventListener("resize", setScrollPadding);
    window.addEventListener("hashchange", setScrollPadding);
    return () => {
      window.removeEventListener("resize", setScrollPadding);
      window.removeEventListener("hashchange", setScrollPadding);
    };
  }, []);

  return (
    // ❌ sin "scroll-smooth" para eliminar el scroll animado
    // ✅ overflow-x-hidden mantiene fuera el scroll lateral
    <div className="overflow-x-hidden">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Nosotros />
        <Services />
        <Proyectos />
        <Contactanos />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
