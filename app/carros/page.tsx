import { QuoteForm } from "@/app/components/quote-form";
import { VehicleCard } from "@/app/components/vehicle-card";
import Navbar from "@/app/components/navbar";

const carCategories = [
  {
    type: "Automóviles",
    brands: [
      {
        name: "Toyota",
        vehicles: [
          {
            image: "/images/cars/toyota-corolla.png",
            title: "Toyota Corolla",
            description: "Sedán compacto con excelente economía de combustible",
            price: 25000,
          },
          {
            image: "/images/cars/toyota-camry.jpg",
            title: "Toyota Camry",
            description: "Sedán mediano con características premium",
            price: 30000,
          },
        ],
      },
      {
        name: "Honda",
        vehicles: [
          {
            image: "/images/cars/honda-civic.webp",
            title: "Honda Civic",
            description: "Sedán deportivo con tecnología avanzada",
            price: 27000,
          },
        ],
      },
    ],
  },
  {
    type: "Camionetas",
    brands: [
      {
        name: "Ford",
        vehicles: [
          {
            image: "/images/cars/ford-explorer.webp",
            title: "Ford Explorer",
            description: "SUV espaciosa y potente para toda la familia",
            price: 45000,
          },
        ],
      },
    ],
  },
];

export default function CarrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Cotiza tu Auto</h1>
            <p className="text-lg text-gray-600 mb-6">
              Completa el formulario y te contactaremos con la mejor oferta para
              tu próximo auto.
            </p>
          </div>
          <QuoteForm vehicleType="auto" />
        </div>

        <h2 className="text-2xl font-bold mb-6">Nuestros Autos</h2>
        {carCategories.map((category, index) => (
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
