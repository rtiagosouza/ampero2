"use client"
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

export default function ProductCarousel() {
  // Usando o tipo correto UseEmblaCarouselType
  const [api, setApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/images/ampero-ii-1.png",
      alt: "Hotone Ampero II Front View"
    },
    {
      src: "/images/ampero-ii-2.png",
      alt: "Hotone Ampero II Side View"
    },
    {
      src: "/images/ampero-ii-3.png",
      alt: "Hotone Ampero II Back View"
    },
    {
      src: "/images/ampero-ii-4.png",
      alt: "Hotone Ampero II In Use"
    }
  ];

  // Função para avançar para o próximo slide
  const scrollNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  // Configurar autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  // Observar mudanças no slide atual
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <Carousel
      className="w-full max-w-3xl mx-auto"
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="overflow-hidden rounded-lg">
            <div className="aspect-video w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
