"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Hero() {
  const images = [
    { src: "/images/hero-1.jpg" },
    { src: "/images/hero-2.jpg" },
    { src: "/images/hero-3.jpg" },
  ];

  return (
    <Carousel className="w-full max-w-5xl mx-auto my-8">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
