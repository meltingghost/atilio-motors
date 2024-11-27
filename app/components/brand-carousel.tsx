"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const brands = [
  { name: "Toyota", src: "/images/logos/toyota.png" },
  { name: "Honda", src: "/images/logos/honda.png" },
  { name: "Ford", src: "/images/logos/ford.png" },
  { name: "Chevrolet", src: "/images/logos/chevrolet.png" },
  { name: "Nissan", src: "/images/logos/nissan.png" },
  { name: "Volkswagen", src: "/images/logos/volkswagen.png" },
  { name: "BMW", src: "/images/logos/bmw.png" },
  { name: "Mercedes-Benz", src: "/images/logos/mercedes.jpg" },
  { name: "Audi", src: "/images/logos/audi.png" },
  { name: "Hyundai", src: "/images/logos/hyundai.png" },
];

export default function BrandCarousel() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Nuestras Marcas</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
