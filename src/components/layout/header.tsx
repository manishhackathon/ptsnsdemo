'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const leftLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-left');
  const centerLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-center');
  const rightLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-right');

  return (
    <header className="w-full bg-card">
      <div className="flex items-center justify-between gap-4 px-4 pt-4 pb-6">
        <div className="flex w-1/4 justify-start">
          <div className="flex flex-col items-center gap-2 text-center">
            {leftLogo && (
              <Link href="#">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-lg shadow-lg shadow-primary/10">
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
        </div>

        <div className="flex w-1/2 flex-1 flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4">
            {centerLogo && (
              <Link href="/">
                <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full">
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
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
                  Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                </h1>
                <p className="mt-1 font-hindi text-2xl font-bold text-primary">
                  पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-6 w-full max-w-xl">
            <div className="relative rounded-full bg-white shadow-2xl shadow-primary/20">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, notices, faculty, research..."
                className="h-12 w-full rounded-full border-2 border-gray-200 bg-white pl-12 pr-14 transition-colors focus:border-primary/50"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex w-1/4 justify-end">
          <div className="flex flex-col items-center gap-2 text-center">
            {rightLogo && (
              <Link href="#">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-lg shadow-lg shadow-primary/10">
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
      </div>
    </header>
  );
};

export default Header;
