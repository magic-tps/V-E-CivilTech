import React from "react";
import victor from "../assets/Victor.png";
import eva from "../assets/Eva.jpg";
import carmen from "../assets/Carmen.png";
import tomas from "../assets/Tomas.jpg";
import topo from "../assets/Gato.png"; // 👈 reemplaza por la foto real del topógrafo
import acabados from "../assets/Jesus.png"; // 👈 agrega aquí la foto del especialista en acabados

/**
 * Equipo - V&E CIVILTECH
 */

const people = [
  {
    nombre: "Víctor Muñoz",
    rol: "Ingeniero Civil",
    foco: [
      "Supervisor y residente de obra, con experiencia en proyectos viales, de defensa ribereña, saneamiento y edificaciones, complementando su labor con el servicio de impresiones de planos."
    ],
    img: victor,
    whatsapp: "51996231520", // 👈 número en formato internacional
    linkedin: "",
  },
  {
    nombre: "Carmen Muñoz",
    rol: "Arquitecta",
    foco: [
      "Especialista en diseño arquitectónico, con experiencia en la elaboración de planos, renders y modelos 3D que convierten cada idea en una propuesta clara, moderna y funcional, adaptada a las necesidades de cada proyecto."
    ],
    img: carmen,
    whatsapp: "51924786633",
    linkedin: "",
  },
  {
    nombre: "Tomás Pastor",
    rol: "Ingeniero en Ciencias de la Computación",
    foco: [
      "Especialista en programación, desarrollo web y data science, con experiencia en automatización, inteligencia artificial y modelos de predicción aplicados a proyectos innovadores."
    ],
    img: tomas,
    whatsapp: "51924786633",
    linkedin: "",
  },
  {
    nombre: "Gonzalo Cortez",
    rol: "Topógrafo",
    foco: [
      "Especialista en levantamientos topográficos, replanteos y control geométrico de obras civiles, aportando precisión en proyectos de infraestructura, urbanismo y edificaciones."
    ],
    img: topo,
    whatsapp: "51955555666",
    linkedin: "",
  },
  {
    nombre: "Jesus Muñoz",
    rol: "Especialista en Acabados",
    foco: [
      "Profesional en acabados, pintura y revestimientos, con experiencia en proyectos residenciales y comerciales, garantizando terminaciones de alta calidad y estética en cada obra."
    ],
    img: acabados,
    whatsapp: "51972070390",
    linkedin: "",
  },
];

// Util: iniciales para fallback si alguna imagen falta
const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Equipo = () => {
  return (
    <section
      id="equipo"
      className="scroll-mt-24 md:scroll-mt-32 relative bg-gradient-to-br from-[#2a0000] to-[#530000] text-white"
      aria-labelledby="equipo-title"
    >
      {/* Blobs suaves */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Encabezado */}
        <header className="max-w-3xl" data-aos="fade-right" data-aos-duration="800">
          <h2 id="equipo-title" className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Nuestro <span className="text-[#f00]">Equipo</span>
          </h2>
          <p className="mt-4 text-white/90">
            Equipo multidisciplinario con enfoque en calidad, seguridad y soluciones eficientes para
            infraestructura pública y privada.
          </p>
        </header>

        {/* Panel principal */}
        <div
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-5 md:p-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Línea de acento */}
          <div className="h-0.5 w-16 bg-white/80 rounded mb-6" />

          {/* Grid de tarjetas */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
          >
            {people.map((p) => (
              <li
                key={p.nombre}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.12] transition-all p-5"
              >
                {/* Avatar */}
                <figure className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/20 shadow-md">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={`Foto de ${p.nombre}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-white/10 text-white text-xl font-bold">
                      {initials(p.nombre)}
                    </div>
                  )}
                </figure>

                {/* Datos */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-tight text-center">{p.nombre}</h3>
                  <p className="mt-0.5 text-sm font-medium text-[#f00] text-center">{p.rol}</p>

                  {/* Descripción */}
                  {p.foco.map((t) => (
                    <p
                      key={t}
                      className="mt-3 text-sm text-white/85 leading-relaxed text-justify"
                    >
                      {t}
                    </p>
                  ))}

                  {/* Acciones */}
                  <div className="mt-4 flex items-center justify-center gap-3">
                    {p.linkedin && (
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`LinkedIn de ${p.nombre}`}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/20 transition"
                      >
                        LinkedIn
                      </a>
                    )}
                    {p.whatsapp && (
                      <a
                        href={`https://wa.me/${p.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp de ${p.nombre}`}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-[#f00] transition"
                      >
                        Contactar
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#fff] px-6 py-3 font-semibold text-[#530000] shadow-md transition-transform active:scale-95 hover:opacity-95"
            >
              Conversemos sobre tu proyecto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
