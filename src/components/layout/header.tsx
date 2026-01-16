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
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <div className="order-2 flex flex-col items-center gap-2 text-center md:order-1 md:w-40">
          {leftLogo && (
            <Link href="#">
              <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full md:h-[90px] md:w-[90px]">
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

        <div className="order-1 flex flex-1 justify-center md:order-2">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            {centerLogo && (
              <Link href="/">
                <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full border-4 border-primary shadow-lg md:h-[90px] md:w-[90px]">
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
            <div>
              <Link href="/">
                <h1 className="font-headline text-2xl font-bold tracking-tight text-primary md:text-3xl">
                  Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="order-3 flex flex-col items-center gap-2 text-center md:order-3 md:w-40">
          {rightLogo && (
            <Link href="#">
              <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full md:h-[90px] md:w-[90px]">
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
