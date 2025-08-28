import React from "react";
import logo from "../assets/Logo.png";

/**
 * Footer - V&E CIVILTECH
 * Paleta:
 *  Verde azulado: #0F6154
 *  Naranja:       #E94E1B
 *  Gris:          #7A7E77
 */
const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Link = ({ href, children }) => (
    <a
      href={href}
      className="text-white/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <footer className="relative bg-gradient-to-br from-[#2a0000] to-[#530000] text-white">
      {/* Blobs suaves */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        {/* Panel principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
              {logo ? (
                <img
                  src={logo}
                  alt="V&E CIVILTECH"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              ) : null}
              <h3 className="text-xl font-extrabold tracking-tight">
                V&amp;E <span className="text-[#f00]">CIVILTECH</span>
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-100/90">
              Ingeniería civil con enfoque en calidad, seguridad y
              sostenibilidad. Diseñamos, supervisamos y construimos con
              estándares internacionales.
            </p>

            {/* Redes */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61579738794451"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.3-3.6 3.4-3.6.99 0 2.03.18 2.03.18v2.23H14.9c-1.2 0-1.6.74-1.6 1.5V12h2.72l-.43 2.9H13.3v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vyeciviltech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm4.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold">Enlaces</h4>
            <div className="mt-3 h-0.5 w-12 bg-[#f00] rounded" />
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#inicio">Inicio</Link></li>
              <li><Link href="#nosotros">Nosotros</Link></li>
              <li><Link href="#servicios">Servicios</Link></li>
              <li><Link href="#proyectos">Proyectos</Link></li>
              <li><Link href="#equipo">Equipo</Link></li>
              <li><Link href="#contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios destacados */}
          <div>
            <h4 className="font-semibold">Servicios</h4>
            <div className="mt-3 h-0.5 w-12 bg-[#f00] rounded" />
            <ul className="mt-4 space-y-2 text-sm">
              <li>Diseño / Cálculo estructural</li>
              <li>Supervisión de obras</li>
              <li>Construcción de edificaciones</li>
              <li>Peritajes y tasaciones</li>
              <li>Obras de saneamiento</li>
              <li>Carreteras y pavimentación</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <div className="mt-3 h-0.5 w-12 bg-[#f00] rounded" />
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3a1 1 0 0 1-.27 1L8.91 8.91a16 16 0 0 0 6 6l2.16-1.91a1 1 0 0 1 1-.27l3 1a1 1 0 0 1 .75 1z" />
                </svg>
                <a href="tel:+51996231520" className="hover:opacity-90">+51 996231520</a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <a href="mailto:contacto@vyeciviltech.com" className="hover:opacity-90">
                  contacto@vyeciviltech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 3"></path>
                </svg>
                <span>Lun – Sáb, 8:30 am – 8:30 pm</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-8-7.58-8-12a8 8 0 0 1 16 0c0 4.42-8 12-8 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  Ica, Perú<br />
                  <a
                    href="https://www.google.com/maps/@-14.0741101,-75.734869,3a,75y,87.41h,82.75t/data=!3m7!1e1!3m5!1sGbYJFv9FYrfTeDrf4AUn_Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.25023796764647%26panoid%3DGbYJFv9FYrfTeDrf4AUn_Q%26yaw%3D87.41439109626957!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/40 hover:decoration-white"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <div>© {year} V&amp;E CIVILTECH — Todos los derechos reservados a MagiCoder.</div>
          <div className="flex items-center gap-4">
            <a href="#inicio" onClick={scrollTop} className="inline-flex items-center gap-2 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" className="translate-y-[1px]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
              Volver arriba
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#contacto" className="hover:text-white">Hablemos de tu proyecto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
