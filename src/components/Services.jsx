import React from "react";

/**
 * Servicios - V&E CIVILTECH (Estudio)
 * Paleta:
 *  Verde azulado: #0F6154
 *  Naranja:       #E94E1B
 *  Gris:          #7A7E77
 */
const Servicios = () => {
  const servicios = [
    { title: "Diseño estructural", desc: "Proyectos seguros y eficientes con criterios sismorresistentes y normativa vigente." },
    { title: "Supervisión de obras", desc: "Control de calidad, seguridad y avance; informes técnicos y liquidacion de obras." },
    { title: "Construcción de edificaciones", desc: "Ejecución integral de obras civiles: viviendas, locales comerciales y edificios." },
    { title: "Cálculo estructural", desc: "Modelado y análisis estructural (concreto, acero, albañilería, madera) y optimización." },
    { title: "Reacondicionamiento", desc: "Refuerzo, rehabilitación y ampliaciones; adecuaciones por cambio de uso." },
    { title: "Gestión de proyectos de construcción", desc: "Planificación, costos y presupuestos, cronogramas y control de riesgos." },
    { title: "Consultoría en ingeniería civil", desc: "Asesoría técnica, revisiones independientes y soporte de decisiones." },
    { title: "Elaboración de planos y expedientes técnicos", desc: "Dossier completo: memoria descriptiva, metrados, especificaciones tecnicas, planos y presupuesto." },
    { title: "Remodelación de viviendas y locales comerciales", desc: "Rediseño funcional y estético, optimizando estructura e instalaciones." },
    { title: "Habilitaciones urbanas", desc: "Trazado, lotización, servicios básicos y normativa municipal." },
    { title: "Peritajes y tasaciones", desc: "Informes periciales, evaluación de daños y valuaciones." },
    { title: "Topografía y levantamientos", desc: "Levantamientos planimétricos y altimétricos y replanteos." },
    { title: "Obras de saneamiento (agua y desagüe)", desc: "Redes, conexiones, reservorios, PTAR y PTAP." },
    { title: "Carreteras y pavimentación", desc: "Trazado, diseño vial, movimiento de tierras y capas de pavimento." },
  ];

  // Ícono genérico (puedes cambiar por íconos por servicio si quieres)
  const Icon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );

  return (
    <section
      id="servicios"
      className="scroll-mt-24 md:scroll-mt-32 relative bg-gradient-to-br from-[#460000] to-[#2a0000] text-white"
    >
      {/* Blobs suaves */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Encabezado */}
        <div className="max-w-3xl" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Nuestros <span className="text-[#f00]">Servicios</span>
          </h2>
          <p className="mt-4 text-gray-100/90">
            Empresa de ingeniería, arquitectura y topografia orientado a soluciones <b>seguras</b>, <b>eficientes</b> y <b>sostenibles</b>. 
            Realizamos el estudio completo: diseño, gestión y ejecución.
          </p>
        </div>

        {/* Panel contenedor */}
        <div
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-5 md:p-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Línea de acento */}
          <div className="h-0.5 w-16 bg-[#ffffff] rounded mb-6" />

          {/* Grid de servicios */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {servicios.map((s, idx) => (
              <li
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-[#f00]">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-100/85 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA inferior */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[#fff] px-6 py-3 font-semibold text-[#530000] shadow-md transition-transform active:scale-95 hover:opacity-95"
            >
              Solicitar cotización
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Ver proyectos realizados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
