import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96">
      {images.map((image, index) => (
        <div
          key={index}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        >
          <Image
            src={image.src}
            width={800}
            height={600}
            alt={image.alt}
            className="rounded-xl object-cover mx-auto"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}