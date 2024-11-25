"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BrandCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  const visibleImages = 6;

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame: number;

    const scroll = () => {
      if (carousel) {
        carousel.scrollLeft += 1;
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.clientWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ maxWidth: `${visibleImages * 160}px` }}
    >
      <div
        ref={carouselRef}
        className="flex gap-4 w-full"
        style={{
          animation: "scroll 20s linear infinite",
        }}
      >
        {images.concat(images).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
