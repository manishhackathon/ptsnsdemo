'use client';

import { Phone, Mail, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const centerLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-center');

  return (
    <header className="relative w-full overflow-hidden bg-card">
      <div className="relative z-10 flex min-w-0 flex-1 flex-col items-center p-4 pb-6 text-center">
        <div className="rounded-3xl border border-accent/50 bg-white/95 px-6 py-4 shadow-2xl shadow-primary/20 backdrop-blur-sm sm:px-10 sm:py-6">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 md:flex-row md:items-start md:gap-4">
            {centerLogo && (
              <Link href="/">
                <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
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
                <h1 className="font-headline text-lg font-bold tracking-tight text-[#0080FE] sm:text-xl xl:text-3xl">
                  Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                </h1>
                <p className="mt-1 font-hindi text-base font-bold text-[#0080FE] sm:text-lg xl:text-2xl">
                  पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-foreground/80 sm:gap-x-4 sm:text-xs md:mt-3">
            <a
              href="tel:07652240917"
              className="flex items-center gap-1.5 transition-colors hover:text-primary sm:gap-2"
            >
              <Phone className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
              <span>Phone: 07652-240917</span>
            </a>
            <div className="hidden h-3 w-px bg-border sm:h-4 sm:block" />
            <a
              href="mailto:ptsnsuniversity@gmail.com"
              className="flex items-center gap-1.5 transition-colors hover:text-primary sm:gap-2"
            >
              <Mail className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
              <span>Email: ptsnsuniversity@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="mt-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="relative rounded-full bg-white shadow-2xl shadow-primary/20">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground sm:left-4 sm:h-5 sm:w-5" />
            <Input
              placeholder="Search courses, notices, faculty, research..."
              className="h-10 w-full rounded-full border-2 border-gray-200 bg-white pl-9 pr-10 text-xs transition-colors focus:border-primary/50 sm:h-12 sm:pl-12 sm:pr-14 sm:text-sm"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90 sm:h-10 sm:w-10"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
