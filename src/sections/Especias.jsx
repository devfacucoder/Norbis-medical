import React from "react";
import { FaStethoscope, FaTooth, FaHeartbeat, FaBrain, FaEye, FaChild } from "react-icons/fa";

function Especias() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-green-900 text-white">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold">
          Nuestras <span className="text-green-300">Especialidades</span>
        </h2>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Contamos con un equipo de profesionales especializados en distintas áreas
          para brindarte una atención integral y personalizada.
        </p>
      </div>

      {/* Cuadro blanco con especialidades */}
      <div className="w-[90%] bg-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {/* Especialidad */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaStethoscope className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Clínica General</h3>
          <p className="text-gray-600 text-sm">
            Evaluaciones médicas completas, chequeos preventivos y diagnóstico general.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaHeartbeat className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Cardiología</h3>
          <p className="text-gray-600 text-sm">
            Control de presión arterial, electrocardiogramas y prevención de enfermedades cardíacas.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaTooth className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Odontología</h3>
          <p className="text-gray-600 text-sm">
            Limpiezas, ortodoncia y tratamientos estéticos para cuidar tu sonrisa.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaBrain className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Neurología</h3>
          <p className="text-gray-600 text-sm">
            Diagnóstico y tratamiento de trastornos del sistema nervioso y dolores de cabeza.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaEye className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Oftalmología</h3>
          <p className="text-gray-600 text-sm">
            Estudios de visión, control de miopía, astigmatismo y cirugías correctivas.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <FaChild className="text-green-700 text-5xl mb-3" />
          <h3 className="font-semibold text-xl mb-2">Pediatría</h3>
          <p className="text-gray-600 text-sm">
            Atención integral para niños y adolescentes, con enfoque humano y preventivo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Especias;
