"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const supporters = [
  { id: 1, name: "Amazon", logo: "/logos/company1.png" },
  { id: 2, name: "Microsoft", logo: "/logos/company2.png" },
  { id: 3, name: "Google", logo: "/logos/company3.svg" },
  { id: 4, name: "Apple", logo: "/logos/company4.svg" },
];

export default function SupportersCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {supporters.map((supporter) => (
          <CarouselItem
            key={supporter.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex items-center justify-center"
          >
            <div className="p-6">
              <Image
                src={supporter.logo}
                alt={supporter.name}
                width={150}
                height={75}
                className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
