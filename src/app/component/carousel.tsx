import Image from "next/image";
import React, { useState } from "react";

import image1 from "/public/images/photo-1542549300-f44fe5ea9d82.avif";
import image2 from "/public/images/photo-1504751999194-ef177d837cfe.avif";
import image3 from "/public/images/photo-1534236161823-3897f68b00b8.avif";
import image4 from "/public/images/photo-1713190193924-8bd93c729b6b.avif";
import image5 from "/public/images/lockImage.png";

const SLIDE_IMAGES = [
  image5,
  image1,
  image4,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
];

const DOT_CLASSES = "dot h-5 w-5 bg-white rounded-full";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const currentSlide = (n: number) => {
    setSlideIndex(n * 4);
  };

  return (
    <div className="relative max-w-screen-lg mx-auto overflow-hidden slide-container">
      <div className="flex transition-transform duration-300 ease-in-out slide-wrapper">
        {SLIDE_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index >= slideIndex && index < slideIndex + 4
                ? "visible"
                : "hidden"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full"
              width={300}
              height={450}
              style={{ borderRadius: 20 }}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 flex space-x-2 p-4">
        {[...Array(Math.ceil(SLIDE_IMAGES.length / 4))].map((_, index) => (
          <button
            key={index}
            onClick={() => currentSlide(index)}
            className={`rounded-dot ${
              index * 4 === slideIndex ? "inactive" : "active"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
