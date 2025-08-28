import React from "react";
import equipo1 from "../assets/4.jpeg";
import equipo2 from "../assets/5.jpeg";

/**
 * Nosotros - V&E CIVILTECH
 * Paleta:
 *  Verde azulado: #0F6154
 *  Naranja:       #E94E1B
 *  Gris:          #7A7E77
 */
const Nosotros = () => {


  return (
    <section
      id="nosotros"
      className="scroll-mt-24 md:scroll-mt-32 relative bg-gradient-to-br from-[#2a0000] to-[#460000] text-white"
    >
      {/* Decoración suave */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Columna Izquierda: Texto principal */}
        <div data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Somos <span className="text-[#f00]">V&amp;E CIVILTECH</span>
          </h2>

          <p className="mt-5 text-lg text-gray-100/90 text-justify max-w-xl">
            Somos una <b>empresa</b> peruana  de ingeniería, arquitectura y topografia desarrollando soluciones para infraestructuras públicas y privadas.
            Nos enfocamos en <b>seguridad</b>, <b>calidad</b> y <b>sostenibilidad</b>, integrando
            metodologías modernas y colaboración entre especialidades.
          </p>

          {/* Misión / Visión / Valores */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Misión</h3>
              <p className="text-sm text-gray-100/90">
                Diseñar y ejecutar proyectos que mejoren la calidad de vida con
                eficiencia, seguridad y responsabilidad.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Visión</h3>
              <p className="text-sm text-gray-100/90">
                Ser referentes en ingeniería sostenible y tecnología aplicada en la región.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Valores</h3>
              <ul className="text-sm text-gray-100/90 space-y-1">
                <li>• Integridad y seguridad</li>
                <li>• Calidad y cumplimiento</li>
                <li>• Innovación y sostenibilidad</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-[#fff] px-6 py-3 font-semibold text-[#620000] shadow-md transition-transform active:scale-95 hover:opacity-95"
            >
              Conoce nuestros servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        {/* Columna Derecha: Collage + Timeline */}
        <div data-aos="fade-left" data-aos-duration="800" className="space-y-8">
          {/* Collage sobrio */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 md:p-6">
            <div className="h-0.5 w-16 bg-[#fff] rounded mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative col-span-2 sm:col-span-1 row-span-2 overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <img
                  src={equipo1}
                  alt="Equipo V&E Civiltech en obra"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </figure>
              <figure className="relative overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <img
                  src={equipo2}
                  alt="Supervisión técnica"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              {/* Badge simple */}
              <div className="rounded-2xl border border-white/15 shadow-xl bg-white/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-sm uppercase tracking-wide text-white/70">
                    Especialidad
                  </div>
                  <div className="text-xl font-bold">Estructuras & Obras</div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Nosotros;
