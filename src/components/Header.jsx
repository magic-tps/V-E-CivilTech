import React, { useState } from "react";
import logo from "../assets/Logo.png";

/**
 * Header - V&E CIVILTECH (dos franjas, estilo corporativo)
 * Paleta:
 *  Rojo vino:    #530000
 *  Rojo:         #f00
 *  Gris:         #7A7E77
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // 👉 Handler SOLO para "Inicio" (lleva al tope exacto)
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#propio", label: "Techo propio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#equipo", label: "Equipo" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-[100] shadow-md">
      {/* --- FRANJA SUPERIOR: logo + info + redes --- */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo y marca */}
          <a
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#f00] rounded"
            aria-label="Ir al inicio"
            onClick={handleHomeClick}
          >
            {logo ? (
              <img
                src={logo}
                alt="Logo V&E CIVILTECH"
                className="h-14 md:h-16 w-auto object-contain"
                loading="eager"
              />
            ) : null}
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#530000]">
                V&amp;E <span className="text-[#f00]">CIVILTECH</span>
              </h1>
              <p className="hidden md:block text-xs text-[#7A7E77]">
                Ingeniería civil con +30 años de experiencia
              </p>
            </div>
          </a>

          {/* Info de contacto (solo md+) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-[#530000]">
              {/* Icono reloj */}
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#530000]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 7v5l3 3"></path>
              </svg>
              <span className="font-medium">Lunes a Sábado</span>
              <span className="text-[#7A7E77]">8:00 am – 8:30 pm</span>
            </div>

            <div className="flex items-center gap-2 text-[#530000]">
              {/* Icono teléfono */}
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#530000]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3a1 1 0 0 1-.27 1L8.91 8.91a16 16 0 0 0 6 6l2.16-1.91a1 1 0 0 1 1-.27l3 1a1 1 0 0 1 .75 1z" />
              </svg>
              <span className>Central</span>
              <a
  href="https://wa.me/51924786633?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-medium text-[#7A7E77] hover:opacity-90"
>
  +51 924786633
</a>


            </div>

            {/* Redes: Facebook e Instagram */}
            <nav aria-label="Redes sociales" className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579738794451"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#530000] hover:text-[#f00] transition-colors"
              >
                {/* fb */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.3-3.6 3.4-3.6.99 0 2.03.18 2.03.18v2.23H14.9c-1.2 0-1.6.74-1.6 1.5V12h2.72l-.43 2.9H13.3v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vyeciviltech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#530000] hover:text-[#f00] transition-colors"
              >
                {/* instagram */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm4.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                </svg>
              </a>
            </nav>
          </div>

          {/* Botón CTA visible en móvil */}
          <a
            href="#contacto"
            className="md:hidden inline-flex items-center justify-center rounded-full bg-[#530000] px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#f00]"
          >
            Cotizar
          </a>

          {/* Hamburguesa (móvil) */}
          <button
            className="md:hidden p-2 text-[#530000] focus:outline-none focus:ring-2 focus:ring-[#f00] rounded"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- FRANJA INFERIOR: menú principal --- */}
      <div className="w-full bg-[#530000]">
        <div className="container mx-auto px-4">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.label === "Inicio" ? handleHomeClick : undefined}
                className="relative py-4 text-white/95 hover:text-white transition-colors 
                           after:absolute after:left-0 after:right-0 after:mx-auto after:-bottom-0.5 after:h-1 
                           after:w-0 after:bg-[#f00] after:rounded-full after:transition-all after:duration-300
                           hover:after:w-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#530000] focus:ring-[#f00]"
              >
                <span className="font-semibold tracking-wide uppercase">{link.label}</span>
              </a>
            ))}

            {/* CTA desktop en la banda del menú */}
            <div className="ml-auto py-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 font-semibold text-[#530000]
                           shadow-md transition-[transform,opacity] hover:opacity-95 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#f00]"
              >
                Cotizar proyecto
              </a>
            </div>
          </nav>

          {/* Mobile nav desplegable */}
          {isMenuOpen && (
            <nav id="main-nav" className="md:hidden border-t border-white/10">
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={
                        link.label === "Inicio"
                          ? handleHomeClick
                          : () => setIsMenuOpen(false)
                      }
                      className="block px-4 py-3 text-white/95 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="px-4 pb-3">
                  <a
                    href="#contacto"
                    className="block text-center rounded-full bg-white px-6 py-2 font-semibold text-[#530000] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#f00]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cotizar proyecto
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
