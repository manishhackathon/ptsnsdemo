'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const leftLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-left');
  const centerLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-center');
  const rightLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-right');

  return (
    <header className="w-full bg-card">
      <div className="flex items-center justify-between gap-4 px-4 py-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {leftLogo && (
            <Link href="#">
              <div className="relative h-[70px] w-[70px] overflow-hidden rounded-lg shadow-lg shadow-primary/10 md:h-[90px] md:w-[90px]">
                <Image
                  src={leftLogo.imageUrl}
                  alt={leftLogo.description}
                  fill
                  className="object-cover"
                  data-ai-hint={leftLogo.imageHint}
                />
              </div>
            </Link>
          )}
          <p className="text-xs font-medium text-foreground/80 md:text-sm">{leftLogo?.description}</p>
        </div>

        <div className="flex flex-1 justify-center text-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center gap-4">
              {centerLogo && (
                <Link href="/">
                  <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full md:h-[90px] md:w-[90px]">
                    <Image
                      src={centerLogo.imageUrl}
                      alt={centerLogo.description}
                      fill
                      className="object-cover"
                      data-ai-hint={centerLogo.imageHint}
                    />
                  </div>
                </Link>
              )}
              <div className="text-center">
                <Link href="/">
                  <h1 className="font-headline text-2xl font-bold tracking-tight text-primary md:text-3xl">
                    Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                  </h1>
                  <p className="mt-1 font-hindi text-xl font-bold text-primary md:text-2xl">
                    पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          {rightLogo && (
            <Link href="#">
              <div className="relative h-[70px] w-[70px] overflow-hidden rounded-lg shadow-lg shadow-primary/10 md:h-[90px] md:w-[90px]">
                <Image
                  src={rightLogo.imageUrl}
                  alt={rightLogo.description}
                  fill
                  className="object-cover"
                  data-ai-hint={rightLogo.imageHint}
                />
              </div>
            </Link>
          )}
          <p className="text-xs font-medium text-foreground/80 md:text-sm">{rightLogo?.description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
