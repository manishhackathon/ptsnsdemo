'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (sliderImages.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      <div className="rounded-2xl p-2 shadow-lg">
        <Card className="overflow-hidden rounded-xl border-2 border-primary">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
              align: 'start',
            }}
          >
            <CarouselContent className="-ml-[3px]">
              {sliderImages.map((image, index) => (
                <CarouselItem key={image.id} className="pl-[3px] md:basis-1/2">
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-6">
                      <h2 className="font-headline text-lg font-bold text-white sm:text-xl md:text-2xl">
                        {image.title ||
                          'Excellence in Education, Rooted in Heritage'}
                      </h2>
                      <p className="mt-1 max-w-xl text-xs text-white/90 md:text-sm">
                        {image.subtitle ||
                          'Discover a vibrant community dedicated to learning and innovation.'}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 z-10" />
            <CarouselNext className="right-4 z-10" />
          </Carousel>
        </Card>
      </div>
    </section>
  );
};

export default HeroSlider;
