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
import Equipo from "./components/Equipo";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,          // animaciones más rápidas
      easing: "ease-out-cubic",
      once: true,             // se ejecutan una sola vez
      offset: 80,             // dispara antes de entrar en viewport
    });

    // refrescar AOS si cambia el hash (#servicios, #contacto, etc.)
    const onHashChange = () => AOS.refreshHard?.();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    // scroll-smooth para anclas, overflow-x-hidden para evitar scroll lateral por sombras/blobs
    <div className="scroll-smooth overflow-x-hidden">
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Nosotros />
        <Services />

        <Proyectos />
        <Equipo />
        <Contactanos />
      </main>
      {/* El footer también recorta decoraciones que sobresalgan */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
