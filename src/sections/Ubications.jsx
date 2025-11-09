import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Ubications() {
  useEffect(() => {
    // Lista de sucursales
    const locations = [
      {
        name: "Norbis Medical – San Juan",
        coords: [-31.537, -68.536],
        address: "Av. Libertador San Martín 1234, San Juan, Argentina",
      },
      {
        name: "Norbis Medical – Mendoza",
        coords: [-32.8908, -68.8272],
        address: "Calle Belgrano 555, Mendoza, Argentina",
      },
      {
        name: "Norbis Medical – Córdoba",
        coords: [-31.4201, -64.1888],
        address: "Bv. San Juan 980, Córdoba, Argentina",
      },
    ];

    // Crear el mapa
    const map = L.map("clinicMap").setView([-32.0, -68.5], 6); // Vista general

    // Cargar el mapa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);

    // Agregar marcadores
    locations.forEach((loc) => {
      L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.address}`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="min-h-screen w-full bg-green-900 flex flex-col items-center py-16 px-4 text-white">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold">
          Nuestras <span className="text-green-300">Ubicaciones</span>
        </h2>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Norbis Medical está presente en distintas ciudades para ofrecerte atención médica de calidad estés donde estés.
        </p>
      </div>

      {/* Mapa */}
      <div className="w-[90%] md:w-[70%] bg-white rounded-3xl shadow-2xl overflow-hidden h-[450px]">
        <div id="clinicMap" className="w-full h-full"></div>
      </div>

      {/* Lista de sucursales */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[80%]">
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg text-black">
          <h3 className="font-bold text-xl text-green-700 mb-2">San Juan</h3>
          <p className="text-gray-700">
            Av. Libertador San Martín 1234<br />Tel: (0264) 123-4567
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg text-black">
          <h3 className="font-bold text-xl text-green-700 mb-2">Mendoza</h3>
          <p className="text-gray-700">
            Calle Belgrano 555<br />Tel: (0261) 987-6543
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg text-black">
          <h3 className="font-bold text-xl text-green-700 mb-2">Córdoba</h3>
          <p className="text-gray-700">
            Bv. San Juan 980<br />Tel: (0351) 456-7890
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ubications;
