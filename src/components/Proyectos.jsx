import React, { useMemo, useState, useId } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p6.png";
import p6 from "../assets/p5.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p15 from "../assets/p15.png";
import p16 from "../assets/p16.png";
import p17 from "../assets/p17.png";
import p18 from "../assets/p18.png";
import p19 from "../assets/p21.png";
import p20 from "../assets/p20.png";
import p21 from "../assets/p19.png";
import p22 from "../assets/p22.png";
import p23 from "../assets/p23.png";
import p24 from "../assets/p24.png";
import p25 from "../assets/p25.png";
import p26 from "../assets/p26.png";
import p27 from "../assets/p27.png";
import p28 from "../assets/p28.png";
import p29 from "../assets/p29.png";
import p30 from "../assets/p30.png";
import p31 from "../assets/p31.png";
import p32 from "../assets/p32.png";
import p33 from "../assets/p33.png";
import p34 from "../assets/p34.png";
import p35 from "../assets/p35.png";
import p36 from "../assets/p36.png";
import p37 from "../assets/p22.png";
import p38 from "../assets/p23.png";
import p39 from "../assets/p24.png";



// Logos (ajusta rutas si es necesario)
import logoMPI from "../assets/mpi.png";        // Municipalidad Provincial de Ica
import logoMDLT from "../assets/mdlt.png";      // Municipalidad Distrital de La Tinguiña
import logoMDPN from "../assets/mdpn.png";      // Municipalidad Distrital de Pueblo Nuevo
import logoPETACC from "../assets/petacc.png";  // Proyecto Especial Tambo Ccaracocha
import logoPARACAS from "../assets/paracas.png";// Municipalidad Distrital de Paracas
import logoRYJ from "../assets/ryj.png";        // R Y J CONSER S.A.C.
import logoPrivado from "../assets/privado.png";// Genérico

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

// Helpers
const clienteTipo = (cliente = "") => {
  const c = (cliente || "").toLowerCase();
  if (
    c.includes("municipalidad") ||
    c.includes("gobierno") ||
    c.includes("petacc") ||
    c.includes("universidad nacional") ||
    c.includes("provincial") ||
    c.includes("distrital")
  ) {
    return "Público";
  }
  return "Privado";
};

/** Carrusel local para cada tarjeta (3 imágenes) */
const CardCarousel = ({ title, imgs = [] }) => {
  const [idx, setIdx] = useState(0);
  const idBase = useId();

  if (!imgs || imgs.length === 0) return null;

  const go = (n) => setIdx((prev) => (prev + n + imgs.length) % imgs.length);
  const goTo = (n) => setIdx(((n % imgs.length) + imgs.length) % imgs.length);

  return (
    <div className="relative">
      {/* Pista */}
      <div
        className="relative w-full overflow-hidden rounded-t-2xl"
        aria-roledescription="carousel"
        aria-label={title}
      >
        <div
          className="flex transition-transform duration-500 will-change-transform"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {imgs.map((src, i) => (
            <div key={`${idBase}-slide-${i}`} className="min-w-full">
              <img
                src={src}
                alt={`${title} — imagen ${i + 1} de ${imgs.length}`}
                className="h-48 sm:h-56 md:h-56 w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Flechas */}
        {imgs.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Imagen anterior"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Siguiente imagen"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {imgs.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {imgs.map((_, i) => {
            const active = i === idx;
            return (
              <button
                key={`${idBase}-dot-${i}`}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${active ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"}`}
                aria-label={`Ir a la imagen ${i + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const Proyectos = () => {
  // ⚠️ Reemplaza p1/p2/p3 por fotos reales de cada obra cuando las tengas.
  const allProjects = [
    {
      id: "px-presa-loros-2025",
      titulo:
        "Afianzamiento hídrico de la cuenca Río Grande – Presa Los Loros (III Etapa)",
      categorias: ["Hidráulico", "SST"],
      imgs: [p13, p14, p15], // 👈 3 imágenes
      cliente: "PETACC / Consorcio Yaku Grande",
      clienteLogo: logoPETACC,
      ano: "2025",
      alcance: "Especialista en SST (supervisión)",
      resumen:
        "Supervisión SST en campamentos, accesos, inyecciones y cuerpo de presa; lineamientos legales y Norma G.050.",
    },
    {
      id: "px-tinguinia-2023",
      titulo:
        "Transitabilidad vehicular y peatonal – Calle Moscú y Próceres (La Tinguiña, Ica)",
      categorias: ["Vial", "SST"],
      imgs: [p16, p17, p18],
      cliente: "Municipalidad Distrital de La Tinguiña",
      clienteLogo: logoMDLT,
      ano: "2023",
      alcance: "Especialista en SST",
      resumen:
        "Charlas diarias, AST, señalización y control de riesgos durante la ejecución de vías.",
    },
    {
      id: "px-alto-laran-2023",
      titulo:
        "Transitabilidad vehicular y peatonal – AA.HH. 13 de Junio (Alto Larán, Chincha)",
      categorias: ["Vial", "SST"],
      imgs: [p28, p29, p30],
      cliente: "Municipalidad Distrital de Alto Larán",
      clienteLogo: null,
      ano: "2023",
      alcance: "Especialista en SST",
      resumen:
        "Seguimiento SST (AST, medidas preventivas, acciones correctivas y control COVID-19).",
    },
    {
      id: "px-paracas-2024",
      titulo:
        "Transitabilidad urbana y vehicular II etapa – H.U. José de San Martín (Paracas, Pisco)",
      categorias: ["Vial", "SST"],
      imgs: [p22, p23, p24],
      cliente: "R Y J CONSER S.A.C.",
      clienteLogo: logoRYJ,
      ano: "2024",
      alcance: "SST (plan, ATS, señalización, check list)",
      resumen:
        "Implementación de plan SST, ATS por actividad, listas de chequeo y señalización vial.",
    },
    {
      id: "px-paracas-2022",
      titulo:
        "Mejoramiento de transitabilidad – Hab. Urb. Pueblo Nuevo, Santa Luisa y Villa Jardín (Paracas)",
      categorias: ["Vial", "SST"],
      imgs: [p25, p26, p27],
      cliente: "Municipalidad Distrital de Paracas",
      clienteLogo: logoPARACAS,
      ano: "2022",
      alcance: "Especialista en SST",
      resumen:
        "Plan de seguridad, control de riesgos, manejo de materiales y control de polvo.",
    },
    {
      id: "px-keyko-2022",
      titulo:
        "Creación de transitabilidad vehicular y peatonal – Asoc. Keyko Sofía Fujimori (Ica)",
      categorias: ["Vial", "SST"],
      imgs: [p10, p11, p12],
      cliente: "Municipalidad Provincial de Ica",
      clienteLogo: logoMPI,
      ano: "2022",
      alcance: "Especialista en SST",
      resumen:
        "Supervisión SST: AST, señalización temporal, EPP y lineamientos COVID-19 durante ejecución de vías.",
    },
    {
      id: "px-nueva-jerusalen-2022",
      titulo:
        "Construcción de parque infantil – AA.HH. Nueva Jerusalén (San Andrés, Pisco)",
      categorias: ["Urbanismo", "SST"],
      imgs: [p19, p20, p21],
      cliente: "Municipalidad Distrital de San Andrés",
      clienteLogo: null,
      ano: "2022",
      alcance: "Especialista en SST",
      resumen:
        "Setiembre 2022: control de riesgos, señalización, charlas y verificación de EPP.",
    },
    {
  id: "px-yataco-2021",
  titulo:
    "Construcción de aula, escalera de acceso y cerco – IE José Yataco Pachas (Pueblo Nuevo, Chincha)",
  categorias: ["Edificaciones", "SST"],
  imgs: [p34, p35, p36], // 👈 reemplaza con tus imágenes reales
  cliente: "Municipalidad Distrital de Pueblo Nuevo",
  clienteLogo: logoMDPN,
  ano: "2021",
  alcance: "Especialista en SST",
  resumen:
    "Marzo 2021: charlas diarias, AST, señalización, inspecciones de seguridad y control de riesgos en la IE José Yataco Pachas.",
},

    {
      id: "px-saneamiento-2021",
      titulo:
        "Rehabilitación de red colectora – Diversas calles de La Tinguiña (Ica)",
      categorias: ["Saneamiento"],
      imgs: [p7, p8, p9],
      cliente: "Municipalidad Provincial de Ica",
      clienteLogo: logoMPI,
      ano: "2021",
      alcance: "Especialista en Saneamiento",
      resumen:
        "Instalación ~4.6 km PVC Ø200, 74 buzones y 574 conexiones domiciliarias; pruebas y control de compactación.",
    },
    {
      id: "px-ioarr-cerco-2021",
      titulo:
        "IOARR: Cerco perimétrico y caseta – UNSLG Agronomía (Subtanjalla, Ica)",
      categorias: ["Edificaciones", "Urbanismo"],
      imgs: [p4, p5, p6],
      cliente: "Universidad Nacional San Luis Gonzaga (UNSLG)",
      clienteLogo: logoPrivado,
      ano: "2021",
      alcance: "Residente",
      resumen:
        "Cerco prefabricado, caseta de seguridad, obras de arte y luminarias; control técnico y avance.",
    },
    {
      id: "px-rio-ica-2021",
      titulo:
        "Control de desbordes e inundaciones – Río Ica, Sector II-1 (Saraja – Puente Grau)",
      categorias: ["Hidráulico"],
      imgs: [p1, p2, p3],
      cliente: "PETACC",
      clienteLogo: logoPETACC,
      ano: "2021",
      alcance: "Asistente del Residente",
      resumen:
        "Obras de mitigación en tramo urbano; apoyo en control técnico y actividades de losa apoyada.",
    },
    {
      id: "px-molinos-2020",
      titulo:
        "Mantenimiento periódico y rutinario – Caminos vecinales (La Tinguiña y Los Molinos, Tramo 03)",
      categorias: ["Vial", "Consultoría / Peritajes"],
      imgs: [p31, p32, p33],
      cliente: "Consorcio Vial Los Molinos / MPI",
      clienteLogo: logoMPI,
      ano: "2020",
      alcance: "Inspección del servicio",
      resumen:
        "Afirmado, transporte de material granular y control de calidad en rutas IC-622, IC-626, IC-644, IC-627, IC-629, IC-645, IC-614 y R110158.",
    },
  ];

  // Filtros
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
      {/* Decoración (opcional) */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Nuestros <span className="text-[#f00]">Proyectos</span>
          </h2>
          <p className="mt-4 text-gray-100/90">
            Portafolio verificado. Filtra por especialidad o por año.
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
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

        {/* Grid de tarjetas */}
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtrados.map((p) => {
            const publicoPrivado = clienteTipo(p.cliente);
            return (
              <li
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                {/* Carrusel de 3 imágenes */}
                <CardCarousel title={p.titulo} imgs={p.imgs} />

                {/* Info */}
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

                  {p.resumen && (
                    <p className="mt-3 text-sm text-gray-100/85 leading-relaxed">
                      {p.resumen}
                    </p>
                  )}

                  {/* Chips */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.categorias?.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-[#530000]/95 px-3 py-1 text-xs font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                    <span className="rounded-full bg-white/90 text-[#530000] px-3 py-1 text-xs font-semibold">
                      Cliente: {publicoPrivado}
                    </span>
                  </div>
                </div>

                {/* Logo cliente */}
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Proyectos;
