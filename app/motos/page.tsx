import { QuoteForm } from "@/app/components/quote-form";
import { VehicleCard } from "@/app/components/vehicle-card";
import Navbar from "../components/navbar";

const motoCategories = [
  {
    type: "2 Ruedas",
    brands: [
      {
        name: "Honda",
        vehicles: [
          {
            image: "/images/bikes/honda-cbr.jpg",
            title: "Honda CBR",
            description: "Moto deportiva de alto rendimiento",
            price: 15000,
          },
          {
            image: "/images/bikes/honda-rebel.jpg",
            title: "Honda Rebel",
            description: "Moto custom para principiantes",
            price: 8000,
          },
        ],
      },
      {
        name: "Yamaha",
        vehicles: [
          {
            image: "/images/bikes/yamaha-mt.png",
            title: "Yamaha MT",
            description: "Naked bike con estilo agresivo",
            price: 12000,
          },
        ],
      },
    ],
  },
  {
    type: "3 Ruedas",
    brands: [
      {
        name: "Can-Am",
        vehicles: [
          {
            image: "/images/bikes/can-am-spyder.jpg",
            title: "Can-Am Spyder",
            description: "Triciclo deportivo para viajes largos",
            price: 22000,
          },
        ],
      },
    ],
  },
];

export default function MotosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Cotiza tu Moto</h1>
            <p className="text-lg text-gray-600 mb-6">
              Completa el formulario y te contactaremos con la mejor oferta para
              tu próxima moto.
            </p>
          </div>
          <QuoteForm vehicleType="moto" />
        </div>

        <h2 className="text-2xl font-bold mb-6">Nuestras Motos</h2>
        {motoCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{category.type}</h3>
            {category.brands.map((brand, brandIndex) => (
              <div key={brandIndex} className="mb-8">
                <h4 className="text-lg font-medium mb-4">{brand.name}</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brand.vehicles.map((vehicle, vehicleIndex) => (
                    <VehicleCard key={vehicleIndex} {...vehicle} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
