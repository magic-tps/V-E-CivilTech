// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "51996231520"; // <- pon aquí tu número con código de país (51 para Perú)
  const message = "Hola, me interesa más información sobre sus servicios.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
