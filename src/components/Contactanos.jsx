import React, { useState } from "react";

/**
 * Contacto - V&E CIVILTECH
 * Paleta:
 *  Verde azulado: #0F6154
 *  Naranja:       #E94E1B
 *  Gris:          #7A7E77
 *
 * Notas:
 * - El form hace una simulación de envío. Reemplaza handleSubmit con tu API/EmailJS.
 * - Incluye "honeypot" para bots.
 */
const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    empresa: "", // honeypot ( NO llenar )
  });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.nombre.trim()) return "Ingresa tu nombre.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Ingresa un correo válido.";
    if (!form.mensaje.trim()) return "Cuéntanos brevemente tu requerimiento.";
    if (form.empresa) return "Bot detectado.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    try {
      setSending(true);
      await new Promise((r) => setTimeout(r, 900)); // simula envío
      setOk(true);
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
        empresa: "",
      });
    } catch (error) {
      setErr("Ocurrió un problema al enviar. Inténtalo nuevamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-24 md:scroll-mt-32 relative bg-gradient-to-br from-[#530000] to-[#2a0000] text-white"
    >
      {/* Blobs suaves */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Encabezado */}
        <div className="max-w-3xl" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Contáctanos
          </h2>
          <p className="mt-4 text-gray-100/90">
            Cuéntanos tu proyecto y te asesoramos en diseño, construcción,
            peritajes o gestión. Respuesta rápida en horario de oficina.
          </p>
        </div>

        {/* Panel principal */}
        <div
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Formulario */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-5 md:p-8">
            <div className="h-0.5 w-16 bg-[#fff] rounded mb-6" />

            {ok && (
              <div className="mb-4 rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
              </div>
            )}
            {err && (
              <div className="mb-4 rounded-lg border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                {err}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm mb-1">
                    Nombre y apellidos
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E94E1B]"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E94E1B]"
                    placeholder="correo@dominio.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E94E1B]"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm mb-1">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    value={form.asunto}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E94E1B]"
                    placeholder="Diseño estructural, peritaje, etc."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="mensaje" className="block text-sm mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E94E1B]"
                  placeholder="Cuéntanos sobre el proyecto: ubicación, alcance, tiempos, etc."
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-full bg-[#fff] px-6 py-3 font-semibold text-[#530000] shadow-md transition-transform active:scale-95 hover:opacity-95 disabled:opacity-60"
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </button>

                <a
                  href={`https://wa.me/51996231520?text=${encodeURIComponent(
                    "Hola V&E CIVILTECH, me gustaría una cotización."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-5 md:p-8">
            <div className="h-0.5 w-16 bg-[#fff] rounded mb-6" />

            <div className="space-y-5">
              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3a1 1 0 0 1-.27 1L8.91 8.91a16 16 0 0 0 6 6l2.16-1.91a1 1 0 0 1 1-.27l3 1a1 1 0 0 1 .75 1z" />
                </svg>
                <div>
                  <div className="text-sm opacity-80">Central</div>
                  <a
                    href="https://wa.me/51996231520?text=Hola,%20quiero%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-white hover:opacity-90"
                  >
                    +51 996231520
                  </a>
                </div>
              </div>

              {/* Correo (mailto con asunto y cuerpo prellenados) */}
              <div className="flex items-start gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <div>
                  <div className="text-sm opacity-80">Correo</div>
                  <a
                    href={
                      "mailto:vyeciviltech@gmail.com" +
                      "?subject=" +
                      encodeURIComponent("Solicitud de información") +
                      "&body=" +
                      encodeURIComponent(
                        "Hola V&E CIVILTECH,\n\nQuisiera más información sobre sus servicios. Mi nombre es ______ y mi teléfono es ______.\n\nGracias."
                      )
                    }
                    className="text-lg font-semibold text-white hover:opacity-90"
                  >
                    vyeciviltech@gmail.com
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 3"></path>
                </svg>
                <div>
                  <div className="text-sm opacity-80">Horario de atención</div>
                  <div className="text-lg font-semibold text-white">Lun – Sáb, 8:00 am – 8:30 pm</div>
                </div>
              </div>

              {/* Dirección (Ica) + MAPA EMBEBIDO */}
              <div className="flex items-start gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0 text-[#f00]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-8-7.58-8-12a8 8 0 0 1 16 0c0 4.42-8 12-8 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div className="w-full">
                  <div className="text-sm opacity-80">Ubicación</div>
                  <div className="text-lg font-semibold text-white">
                    Ica, Perú
                  </div>

                  {/* Mapa: 16/9 responsivo, esquinas redondeadas */}
                  <div className="mt-3 relative w-full overflow-hidden rounded-2xl border border-white/15 shadow-md">
                    <div className="pt-[56.25%]" /> {/* aspect ratio 16:9 */}
                    <iframe
                      title="Mapa V&E CIVILTECH - Ica, Perú"
                      aria-label="Google Maps de la ubicación en Ica, Perú"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.google.com/maps?q=-14.0741101,-75.734869&hl=es&z=15&output=embed`}
                      allowFullScreen
                    />
                  </div>

                  <a
                    href="https://www.google.com/maps/@-14.0741101,-75.734869,3a,75y,87.41h,82.75t/data=!3m7!1e1!3m5!1sGbYJFv9FYrfTeDrf4AUn_Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.25023796764647%26panoid%3DGbYJFv9FYrfTeDrf4AUn_Q%26yaw%3D87.41439109626957!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm underline decoration-white/40 hover:decoration-white"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              {/* Redes */}
              <div className="pt-2">
                <div className="text-sm opacity-80 mb-2">Síguenos</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579738794451"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
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
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm4.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
