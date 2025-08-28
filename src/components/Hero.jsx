import React from "react";
import civil1 from "../assets/1.jpeg";
import civil2 from "../assets/2.jpeg";
import civil3 from "../assets/3.jpeg";

const Hero = () => {
  const stats = [
    { value: "30+", label: "Años de experiencia" },
    { value: "500+", label: "Proyectos ejecutados" },
    { value: "200+", label: "Clientes satisfechos" },
    { value: "50+", label: "Certificaciones y premios" },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#460000] to-[#2a0000] scroll-mt-0"
    >
      {/* Blobs suaves de fondo */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-10 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <article className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-start gap-10">
        {/* Columna texto */}
        <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="800">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Construyendo el futuro con{" "}
            <span className="text-[#f00]">ingeniería civil</span>
          </h1>

          <p className="mt-6 text-lg text-gray-100/90 max-w-xl text-justify">
            En <strong>V&E CIVILTECH</strong> desarrollamos proyectos con
            estándares internacionales, combinando innovación, sostenibilidad y
            más de 30 años de experiencia al servicio de nuestros clientes.
          </p>

          {/* CTA */}
          <nav
            className="mt-8 flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-[#fff] px-8 py-3 font-semibold text-[#530000] shadow-md transition-transform active:scale-95 hover:opacity-95"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Cotizar Proyecto
            </a>
          </nav>
        </div>

        {/* Columna collage + stats */}
        <div
          className="md:w-1/2 w-full"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 md:p-6">
            <div className="h-0.5 w-16 bg-[#fff] rounded mb-4 md:mb-6" />

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <figure className="relative col-span-2 sm:col-span-1 row-span-2 overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <img
                  src={civil1}
                  alt="Movimiento de tierras en obra"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </figure>

              <figure className="relative overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <img
                  src={civil2}
                  alt="Supervisión y control de calidad"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </figure>

              <figure className="relative overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <img
                  src={civil3}
                  alt="Maquinaria y equipos en obra"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </figure>
            </div>

            <div className="mt-6 md:mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <aside className="mt-6 md:mt-8">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
                {stats.map((s, i) => (
                  <li key={i} className="min-w-[120px]">
                    <div className="text-2xl md:text-3xl font-extrabold text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-gray-100/80">
                      {s.label}
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
