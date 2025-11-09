import React from "react";
import { FaCalendarCheck, FaUserMd } from "react-icons/fa";

function Start() {
  return (
    <section className=" border-green-700 min-h-screen flex items-center justify-center  from-green-100 to-white px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-2">
        
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-green-700">
            Norbis <span className="text-black">Medical</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Atención médica profesional, tecnología moderna y compromiso con tu bienestar.
            Cuidamos tu salud con confianza y dedicación.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
              <FaCalendarCheck className="text-xl" />
              Reservar turno
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-green-700 hover:bg-green-700 hover:text-white text-green-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              <FaUserMd className="text-xl" />
              Conocer médicos
            </button>
          </div>
        </div>
        <div className="w-full  md:w-[50%] md:h-[400px] h-[250px]">
            
            <img className="w-full h-full object-scale-down" src="https://i.pinimg.com/736x/9f/32/20/9f3220f4535dd9cd9743b995fdfdeaa1.jpg" alt="" />
        </div>
       
      </div>

      {/* Línea decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-2  from-green-600 to-green-400"></div>
    </section>
  );
}

export default Start;
