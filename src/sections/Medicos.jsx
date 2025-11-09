import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Medicos() {
  const [listOpinions] = useState([
    {
      msg: "Excelente atención, los médicos fueron muy amables y atentos.",
      testi: "Jonny Hernández",
    },
    {
      msg: "El mejor servicio médico que he recibido, muy profesionales.",
      testi: "María González",
    },
    {
      msg: "Instalaciones modernas y atención rápida. Recomendado.",
      testi: "El RockStar",
    },
  ]);

  const [opinion, setOpinion] = useState(listOpinions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Intervalo para cambiar las opiniones cada 3 segundos
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % listOpinions.length;
        setOpinion(listOpinions[next]);
        return next;
      });
    }, 3000);

    // Limpiar intervalo al desmontar
    return () => clearInterval(interval);
  }, [listOpinions]);

  return (
    <section className="min-h-screen w-full bg-green-700 flex flex-col items-center py-16 px-4 text-white">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold">
          Conocé a <span className="text-green-300">nuestros médicos</span>
        </h2>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Profesionales con amplia experiencia y vocación por el cuidado de tu
          salud.
        </p>
      </div>

      {/* Cuadro blanco con los médicos */}
      <div className="w-[90%] bg-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-black">
        {/* Doctor 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="Dr. Juan Pérez"
            className="w-28 h-28 mb-4"
          />
          <h3 className="font-semibold text-xl text-green-800">
            Dr. Juan Pérez
          </h3>
          <p className="text-gray-700 mb-2 font-medium">Cardiólogo</p>
          <p className="text-gray-600 text-sm">
            Especialista en prevención y tratamiento de enfermedades
            cardiovasculares.
          </p>
        </div>

        {/* Doctor 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921071.png"
            alt="Dra. María López"
            className="w-28 h-28 mb-4"
          />
          <h3 className="font-semibold text-xl text-green-800">
            Dra. María López
          </h3>
          <p className="text-gray-700 mb-2 font-medium">Pediatra</p>
          <p className="text-gray-600 text-sm">
            Más de 10 años cuidando la salud infantil con compromiso y empatía.
          </p>
        </div>

        {/* Doctor 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4323/4323195.png"
            alt="Dr. Martín Gómez"
            className="w-28 h-28 mb-4"
          />
          <h3 className="font-semibold text-xl text-green-800">
            Dr. Martín Gómez
          </h3>
          <p className="text-gray-700 mb-2 font-medium">Clínico General</p>
          <p className="text-gray-600 text-sm">
            Diagnósticos precisos y atención personalizada para cada paciente.
          </p>
        </div>
      </div>

      {/* Comentario de paciente */}
      <div className="mt-16 w-[90%] md:w-[70%] bg-white rounded-3xl shadow-xl p-8 text-black text-center relative transition-all">
        <FaQuoteLeft className="text-green-700 text-3xl absolute -top-5 left-6" />
        <p
          key={opinion?.msg} // 👈 esto forza el re-render del texto
          className="text-lg text-gray-700 italic mb-4 animate-fadeIn"
        >
          {opinion ? opinion.msg : ""}
        </p>
        <p className="font-semibold text-green-800 animate-fadeIn">
          — {opinion ? opinion.testi : ""}
        </p>
      </div>
    </section>
  );
}

export default Medicos;
