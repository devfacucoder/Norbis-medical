import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleContactRequest = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simular envío del formulario
    setTimeout(() => {
      console.log("enviando...");
      setLoading(false);
      setSuccess(true);

      // Oculta el mensaje de éxito después de unos segundos
      setTimeout(() => setSuccess(false), 3000);
    }, 2200);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-green-800 py-16 px-4 text-white">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold">
          <span className="text-green-300">Contacto</span> y Turnos
        </h2>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Envíanos un mensaje o acercate a cualquiera de nuestras sucursales. Te
          responderemos a la brevedad.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleContactRequest}
        className="w-[90%] md:w-[60%] bg-white rounded-3xl shadow-2xl p-8 text-black flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <label
            htmlFor="inpName"
            className="font-semibold text-green-800 mb-1"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="inpName"
            placeholder="Tu nombre"
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="inpMail"
            className="font-semibold text-green-800 mb-1"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="inpMail"
            placeholder="ejemplo@correo.com"
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="inpMsg" className="font-semibold text-green-800 mb-1">
            Mensaje
          </label>
          <textarea
            id="inpMsg"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            required
          ></textarea>
        </div>

        {/* Estado del envío */}
        <p className="h-8 text-center text-lg">
          {loading && <span className="text-green-700">Enviando...</span>}
          {success && <span className="text-green-600 font-semibold">✅ Mensaje enviado correctamente</span>}
        </p>

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          } text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md self-center md:self-start`}
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {/* Información de contacto */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left w-[90%] md:w-[70%]">
        <div className="flex flex-col items-center md:items-start">
          <FaEnvelope className="text-green-300 text-3xl mb-2" />
          <p>contacto@norbis-medical.com</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <FaPhoneAlt className="text-green-300 text-3xl mb-2" />
          <p>(0264) 123-4567</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <FaMapMarkerAlt className="text-green-300 text-3xl mb-2" />
          <p>Av. Libertador 1234, San Juan</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-6 mt-10">
        <a href="#" className="hover:text-green-300 transition-all">
          <FaFacebook className="text-3xl" />
        </a>
        <a href="#" className="hover:text-green-300 transition-all">
          <FaInstagram className="text-3xl" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
