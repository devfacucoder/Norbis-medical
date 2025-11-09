import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6 flex flex-col items-center">
      {/* Contenido principal */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 border-b border-green-700 pb-8">
        {/* Logo o nombre */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-300">Norbis Medical</h2>
          <p className="text-gray-300 mt-2 max-w-sm">
            Comprometidos con tu salud. Atención médica profesional y humana.
          </p>
        </div>

        {/* Navegación rápida */}
        <nav className="flex flex-col md:flex-row gap-3 text-center md:text-left">
          <a
            href="#inicio"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#especialidades"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Especialidades
          </a>
          <a
            href="#medicos"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Médicos
          </a>
          <a
            href="#contacto"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-5 text-2xl">
          <a
            href="#"
            className="hover:text-green-300 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-green-300 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-green-300 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Norbis Medical. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
