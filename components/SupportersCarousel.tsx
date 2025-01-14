"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export default function SupportersCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {[
          "company1.svg",
          "company2.svg",
          "company3.svg",
          "company4.svg",
          "company5.svg",
          "company6.svg",
        ].map((logo, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/6">
            <div className="p-4">
              <Image
                src={`/logos/${logo}`}
                alt={`Supporter ${index + 1}`}
                width={120}
                height={60}
                className="mx-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
