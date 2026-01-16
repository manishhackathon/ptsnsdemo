'use client';

import { Phone, Mail, Search } from 'lucide-react';
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
      <div className="flex items-start justify-center gap-4 p-4 pb-6">
        <div className="hidden shrink-0 xl:flex">
          <div className="flex flex-col items-center gap-2 text-center">
            {leftLogo && (
              <Link href="#">
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-lg shadow-lg shadow-primary/10">
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

        <div className="flex min-w-0 flex-1 flex-col items-center text-center">
          <div className="flex flex-col items-center justify-center gap-2 pt-0 md:flex-row md:items-start md:gap-4 md:pt-2">
            {centerLogo && (
              <Link href="/">
                <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full md:h-[90px] md:w-[90px]">
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
                <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl xl:text-3xl">
                  Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                </h1>
                <p className="mt-1 font-hindi text-lg font-bold text-primary sm:text-xl xl:text-2xl">
                  पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-foreground/80 sm:gap-y-2 sm:text-sm">
            <a
              href="tel:07652240917"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span>Phone: 07652-240917</span>
            </a>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <a
              href="mailto:ptsnsuniversity@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span>Email: ptsnsuniversity@gmail.com</span>
            </a>
          </div>
          <div className="mt-4 w-full max-w-sm sm:max-w-md md:max-w-xl">
            <div className="relative rounded-full bg-white shadow-2xl shadow-primary/20">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, notices, faculty, research..."
                className="h-11 w-full rounded-full border-2 border-gray-200 bg-white pl-12 pr-12 text-sm transition-colors focus:border-primary/50 sm:h-12 sm:pr-14 sm:text-base"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90 sm:h-10 sm:w-10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden shrink-0 xl:flex">
          <div className="flex flex-col items-center gap-2 text-center">
            {rightLogo && (
              <Link href="#">
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-lg shadow-lg shadow-primary/10">
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
