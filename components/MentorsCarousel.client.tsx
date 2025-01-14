"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const mentors = [
  {
    id: 1,
    name: "Kevin Jones",
    role: "Developer Relations at The Graph",
    image: "/mentors/mentor1.jpg",
    specialty: "Supporting Scaffold-ETH at Buidl Guidl",
  },
  {
    id: 2,
    name: "Eda Akturk",
    role: "Developer & Educator",
    image: "/mentors/mentor2.jpg",
    specialty: "Developer Advocate at Hyperlane",
  },
  {
    id: 3,
    name: "Austin Griffith",
    role: "BuidlGuidl Founder",
    image: "/mentors/mentor3.jpg",
    specialty: "Speedrun Ethereum and Scaffold-ETH",
  },
  {
    id: 4,
    name: "Giselle Chacon Nessi",
    role: "Front End Engineer",
    image: "/mentors/mentor4.jpg",
    specialty: "DevRel at Third Web",
  },
];

export default function MentorsCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {mentors.map((mentor) => (
          <CarouselItem
            key={mentor.id}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-6 text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-primary">{mentor.role}</p>
              <p className="text-muted-foreground">{mentor.specialty}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
