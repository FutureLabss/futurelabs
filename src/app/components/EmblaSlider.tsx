"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { mobileImages } from "@/data/data";

export default function EmblaSlider() {
  // ➊ Create Embla with autoplay (2 s delay, pause on hover)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  // ➋ Optionally restart autoplay after manual drag
  const restart = useCallback(() => {
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerUp", restart);
  }, [emblaApi, restart]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {mobileImages.map((img) => (
          <div key={img.id} className="min-w-full relative h-80">
            <Image
              src={img.src}
              alt={img.id ?? "Slide image"}
              fill
              priority /* keeps LCP fast */
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
