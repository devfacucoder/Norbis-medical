import React from "react";
import { FaUserMd, FaHeartbeat, FaCalendarCheck } from "react-icons/fa";

function About() {
  return (
    <section className="min-h-screen w-full bg-green-700 flex flex-col items-center justify-center py-12 px-4">
      {/* Cuadro blanco con información */}
      <div className="w-[90%] md:w-[80%] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Imagen lateral (puede cambiarse por una real) */}
        <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
            alt="Equipo médico"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Texto principal */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-poppins font-bold text-green-700">
            Sobre <span className="text-black">Nosotros</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            En <strong>Norbis Medical</strong> trabajamos con un solo objetivo: cuidar tu salud.  
            Contamos con profesionales experimentados, equipamiento moderno y una atención cálida para toda la familia.  
            Nos enfocamos en ofrecer diagnósticos precisos y un trato humano, porque entendemos que cada paciente es único.
          </p>

          {/* Métricas o datos destacados */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
            <div className="flex flex-col items-center">
              <FaUserMd className="text-green-600 text-3xl mb-1" />
              <span className="font-bold text-lg text-black">20+</span>
              <p className="text-sm text-gray-600">Profesionales</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHeartbeat className="text-green-600 text-3xl mb-1" />
              <span className="font-bold text-lg text-black">10 Años</span>
              <p className="text-sm text-gray-600">De experiencia</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCalendarCheck className="text-green-600 text-3xl mb-1" />
              <span className="font-bold text-lg text-black">5000+</span>
              <p className="text-sm text-gray-600">Pacientes felices</p>
            </div>
          </div>

          {/* Botón CTA */}
          <div className="pt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
