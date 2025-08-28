import React, { useMemo, useState } from "react";
import p1 from "../assets/1.jpeg";
import p2 from "../assets/2.jpeg";
import p3 from "../assets/3.jpeg";

// Logos de entidades (ajusta rutas si es necesario)
import logoMPI from "../assets/mpi.png";        // Municipalidad Provincial de Ica
import logoMDLT from "../assets/mdlt.png";      // Municipalidad Distrital de La Tinguiña
import logoMDPN from "../assets/mdpn.png";      // Municipalidad Distrital de Pueblo Nuevo
import logoPETACC from "../assets/petacc.png";  // Proyecto Especial Tambo Ccaracocha
import logoUNICA from "../assets/unica.png";    // Univ. Nacional San Luis Gonzaga
import logoPARACAS from "../assets/paracas.png";// Municipalidad Distrital de Paracas
import logoRYJ from "../assets/ryj.png";        // R Y J CONSER S.A.C.
import logoPrivado from "../assets/privado.png";// Cliente privado genérico

const CATS = [
  "Todos",
  "Vial",
  "Edificaciones",
  "Hidráulico",
  "Saneamiento",
  "Urbanismo",
  "Consultoría / Peritajes",
  "SST",
];

const Proyectos = () => {
  // ⚠️ Coloca los archivos en /public/docs/ con estos nombres o ajusta las URLs.
  const allProjects = [
    // —— Hidráulico / SST ——
    {
      id: "px-presa-loros-2025",
      titulo: "Afianzamiento hídrico de la cuenca Río Grande – Presa Los Loros (III Etapa)",
      categorias: ["Hidráulico", "SST"],
      img: p1,
      cliente: "PETACC / Consorcio Yaku Grande",
      clienteLogo: logoPETACC,
      ano: "2025",
      alcance: "Especialista en SST (supervisión)",
      resumen:
        "Supervisión de SST en campamentos, accesos, inyecciones y cuerpo de presa; cumplimiento de G.050 y normativa nacional.",
      informeUrl: "/docs/INFORME%20DE%20SEGURIDAD%20Y%20SALUD%20EN%20EL%20TRABAJO%20MARZO.docx",
    },

    // —— Vial (La Tinguiña, Alto Larán, Paracas, Keyko) ——
    {
      id: "px-tinguinia-2023",
      titulo: "Transitabilidad vehicular y peatonal – Calle Moscú y Próceres (La Tinguiña, Ica)",
      categorias: ["Vial", "SST"],
      img: p2,
      cliente: "Municipalidad Distrital de La Tinguiña",
      clienteLogo: logoMDLT,
      ano: "2023",
      alcance: "Especialista en SST",
      resumen:
        "Charlas diarias, AST, señalización y control de riesgos durante la ejecución de vías.",
      informeUrl: "/docs/INFORME%20OCTUBRE%202023.doc",
    },
    {
      id: "px-alto-laran-2023",
      titulo: "Transitabilidad vehicular y peatonal – AA.HH. 13 de Junio (Alto Larán, Chincha)",
      categorias: ["Vial", "SST"],
      img: p3,
      cliente: "—",
      clienteLogo: logoMPI,
      ano: "2023",
      alcance: "Especialista en SST",
      resumen:
        "Seguimiento SST (AST, medidas preventivas, acciones correctivas y control COVID-19).",
      informeUrl: "/docs/INFORME%20ABRIL%202023.doc",
    },
    {
      id: "px-paracas-2024",
      titulo: "Transitabilidad urbana y vehicular II etapa – H.U. José de San Martín (Paracas, Pisco)",
      categorias: ["Vial", "SST"],
      img: p1,
      cliente: "R Y J CONSER S.A.C.",
      clienteLogo: logoRYJ,
      ano: "2024",
      alcance: "SST (plan, ATS, señalización)",
      resumen:
        "Implementación de plan SST, ATS por actividad, listas de chequeo y señalización vial.",
      informeUrl: "/docs/INFORME%20JUNIO%20-%20PARACAS.docx",
    },
    {
      id: "px-paracas-2022",
      titulo:
        "Mejoramiento de transitabilidad – Hab. Urb. Pueblo Nuevo, Santa Luisa y Villa Jardín (Paracas)",
      categorias: ["Vial", "SST"],
      img: p2,
      cliente: "Municipalidad Distrital de Paracas",
      clienteLogo: logoPARACAS,
      ano: "2022",
      alcance: "Especialista en SST",
      resumen:
        "Plan de seguridad, control de riesgos, manejo de materiales y control de polvo.",
      informeUrl: "/docs/INFORME%20DE%20SEGURIDAD%20JULIO%202022.docx",
    },
    {
      id: "px-keyko-2022",
      titulo: "Creación de transitabilidad vehicular y peatonal – Asoc. Keyko Sofía Fujimori (Ica)",
      categorias: ["Vial", "SST"],
      img: p1,
      cliente: "Municipalidad Provincial de Ica",
      clienteLogo: logoMPI,
      ano: "2022",
      alcance: "Especialista en SST",
      resumen:
        "Supervisión SST: AST, señalización temporal, EPP y lineamientos COVID-19 durante ejecución de vías.",
      informeUrl: "/docs/INFORME%20DE%20SEGURIDAD%20N%C2%BA%2001.docx",
    },

    // —— Edificaciones (Educación) ——
    {
      id: "px-marcona-2020",
      titulo: "Mejoramiento y ampliación del IESTP Luis Felipe de las Casas Grieve (Marcona)",
      categorias: ["Edificaciones", "SST"],
      img: p3,
      cliente: "Gobierno Regional de Ica",
      clienteLogo: logoMPI,
      ano: "2020",
      alcance: "Supervisión / SST",
      resumen:
        "SST en demoliciones, movimiento de tierras, cimientos y estructuras de concreto armado.",
      informeUrl: "/docs/INFORME%20DE%20SEGURIDAD%20N%C2%B0%2001.docx", // ajusta si el nombre real difiere
    },
    {
      id: "px-yataco-2021",
      titulo:
        "IE José Yataco Pachas – Aula, escalera y cerco perimétrico (Pueblo Nuevo, Chincha)",
      categorias: ["Edificaciones", "SST"],
      img: p1,
      cliente: "Municipalidad Distrital de Pueblo Nuevo",
      clienteLogo: logoMDPN,
      ano: "2021",
      alcance: "Residente / SST",
      resumen:
        "Plan de seguridad, charlas diarias, señalización e inspecciones según Norma G.050.",
      informeUrl: "/docs/INFORME%20SEGURIDAD%20PUEBLO%20NUEVO%20MARZO.doc",
    },

    // —— Saneamiento / Alcantarillado ——
    {
      id: "px-saneamiento-2021",
      titulo: "Rehabilitación de red colectora – Calles de La Tinguiña (Ica)",
      categorias: ["Saneamiento", "Alcantarillado"],
      img: p2,
      cliente: "Municipalidad Provincial de Ica",
      clienteLogo: logoMPI,
      ano: "2021",
      alcance: "Especialista en Saneamiento",
      resumen:
        "Instalación de ~4.6 km PVC Ø200, 74 buzones y 574 conexiones domiciliarias; pruebas y control de compactación.",
      informeUrl: "/docs/INFORME%20DEL%20ESPECIALISTA%20EN%20SANEAMIENTO.docx",
    },

    // —— Consultoría / Peritajes ——
    {
      id: "px-molinos-2020",
      titulo:
        "Mantenimiento periódico y rutinario – Caminos vecinales La Tinguiña y Los Molinos (Tramo 03)",
      categorias: ["Vial", "Consultoría / Peritajes"],
      img: p3,
      cliente: "Municipalidad Provincial de Ica",
      clienteLogo: logoMPI,
      ano: "2020",
      alcance: "Inspección del servicio",
      resumen:
        "Afirmado, transporte de material granular y control de calidad en rutas IC-622, IC-626, IC-644, IC-627, IC-629, IC-645, IC-614 y R110158.",
      informeUrl:
        "/docs/INFORME%20N%C2%BA%2003-%20CONSORCIO%20VIAL%20LOS%20MOLINOS%20-%20INSPECCION%20OK%20ok.doc",
    },
    {
      id: "px-peritaje-2021",
      titulo: "Tasación y peritaje estructural – Local comercial (Ica)",
      categorias: ["Consultoría / Peritajes", "Edificaciones"],
      img: p2,
      cliente: "Privado",
      clienteLogo: logoPrivado,
      ano: "2021",
      alcance: "Peritaje estructural",
      resumen:
        "Evaluación de capacidad portante, patologías y estimación de valor de reposición.",
      // informeUrl: "/docs/TASACION%20Y%20PERITAJE%20ESTRUCTURAL.pdf"
    },
  ];

  // Filtro por categoría y año
  const [filtroCat, setFiltroCat] = useState("Todos");
  const years = useMemo(() => {
    const set = new Set(allProjects.map((p) => p.ano));
    return ["Todos", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, [allProjects]);
  const [filtroYear, setFiltroYear] = useState("Todos");

  const filtrados = useMemo(() => {
    return allProjects.filter((p) => {
      const okCat = filtroCat === "Todos" ? true : p.categorias?.includes(filtroCat);
      const okYear = filtroYear === "Todos" ? true : p.ano === filtroYear;
      return okCat && okYear;
    });
  }, [allProjects, filtroCat, filtroYear]);

  return (
    <section
      id="proyectos"
      className="scroll-mt-24 md:scroll-mt-32 relative bg-gradient-to-br from-[#530000] to-[#2a0000] text-white"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Nuestros <span className="text-[#f00]">Proyectos</span>
          </h2>
          <p className="mt-4 text-gray-100/90">
            Portafolio verificado con informes. Filtra por especialidad o por año.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-5 md:p-8">
          <div className="h-0.5 w-16 bg-white rounded mb-6" />

          {/* Filtros */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            {/* Categorías */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {CATS.map((c) => {
                const activo = c === filtroCat;
                return (
                  <button
                    key={c}
                    onClick={() => setFiltroCat(c)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/50",
                      activo
                        ? "bg-white text-[#530000]"
                        : "bg-white/10 hover:bg-white/20 text-white/90 border border-white/10",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Año */}
            <div className="ml-auto">
              <label className="text-xs block opacity-80 mb-1">Filtrar por año</label>
              <select
                value={filtroYear}
                onChange={(e) => setFiltroYear(e.target.value)}
                className="rounded-full bg-white text-[#530000] text-sm font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00]"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtrados.map((p) => (
              <li
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <figure className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Chips de categorías */}
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {p.categorias?.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-[#530000]/95 px-3 py-1 text-xs font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {/* Logo del cliente */}
                  {p.clienteLogo && (
                    <div className="absolute right-3 top-3 bg-white/90 backdrop-blur rounded-full p-2 shadow">
                      <img
                        src={p.clienteLogo}
                        alt={`Logo ${p.cliente || "Cliente"}`}
                        className="h-6 w-6 object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </figure>

                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold">{p.titulo}</h3>

                  <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-white/80">
                    <div>
                      <dt className="opacity-70">Cliente</dt>
                      <dd className="text-white">{p.cliente}</dd>
                    </div>
                    <div>
                      <dt className="opacity-70">Año</dt>
                      <dd className="text-white">{p.ano}</dd>
                    </div>
                    <div className="col-span-2 mt-1">
                      <dt className="opacity-70">Alcance</dt>
                      <dd className="text-white">{p.alcance}</dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-sm text-gray-100/85 leading-relaxed">{p.resumen}</p>

                  <div className="mt-4 flex gap-2">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                    >
                      Solicitar ficha técnica
                    </a>

                    {p.informeUrl && (
                      <a
                        href={p.informeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#530000] hover:opacity-95"
                      >
                        Ver informe
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#530000] shadow-md transition-transform active:scale-95 hover:opacity-95"
            >
              Cuéntanos tu proyecto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Ver servicios relacionados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
