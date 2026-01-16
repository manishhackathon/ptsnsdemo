'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from 'embla-carousel-autoplay';

const HeroSlider = () => {
  const sliderImages = PlaceHolderImages.filter((img) => img.id.startsWith('slider-'));

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  if (sliderImages.length === 0) {
    return null;
  }

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderImages.map((image) => (
            <CarouselItem key={image.id}>
              <Card className="overflow-hidden border-none shadow-2xl shadow-primary/20">
                <CardContent className="relative aspect-[16/7] p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    priority={sliderImages.indexOf(image) === 0}
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <h2 className="font-headline text-3xl font-bold text-white md:text-5xl">
                       Excellence in Education, Rooted in Heritage
                     </h2>
                     <p className="mt-2 max-w-2xl text-lg text-white/90">
                       Discover a vibrant community dedicated to learning and innovation.
                     </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
