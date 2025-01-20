"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const supporters = [
  {
    id: 1,
    name: "BuidlGuidl",
    logo: "/logos/company1.png",
    website: "https://buidlguidl.com",
  },
  {
    id: 2,
    name: "The Graph",
    logo: "/logos/company2.png",
    website: "https://thegraph.com/",
  },
  {
    id: 3,
    name: "Third Web",
    logo: "/logos/company3.svg",
    website: "https://thirdweb.com",
  },
  {
    id: 4,
    name: "Only Dust",
    logo: "/logos/company4.svg",
    website: "https://www.onlydust.com/",
  },
  {
    id: 5,
    name: "useWeb3",
    logo: "/logos/company5.png",
    website: "https://www.useweb3.xyz/",
  },
  {
    id: 6,
    name: "Hyperlane",
    logo: "/logos/company6.png",
    website: "http://hyperlane.xyz/",
  },
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
              <Link
                href={supporter.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  width={150}
                  height={75}
                  className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
