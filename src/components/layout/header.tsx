'use client';

import { Phone, Mail, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeaderBackground from './header-background';

const Header = () => {
  return (
    <header className="relative w-full min-h-[180px] overflow-hidden">
      <HeaderBackground />
      <div className="relative z-10 flex flex-col items-center p-2 text-center sm:p-3">
        <div className="flex w-full items-center justify-center gap-4">
          <Link href="/" className="hidden xl:block">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-32 xl:h-44 xl:w-44">
              <Image
                src="/haldipic.png"
                alt="Haldi Pic"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="rounded-2xl border border-accent/50 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-sm sm:px-6">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-3">
              <Link href="/">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full md:h-14 md:w-14">
                  <Image
                    src="/university.jpg"
                    alt="University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="text-center">
                <Link href="/">
                  <h1 className="font-headline text-base font-bold tracking-tight text-primary sm:text-lg md:text-xl lg:text-2xl">
                    Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                  </h1>
                  <p className="font-hindi text-xl font-bold text-primary/90 sm:text-lg md:text-xl lg:text-3xl">
                    पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                  </p>
                </Link>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-foreground/80 sm:text-xs">
              <a
                href="tel:07652240917"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Phone className="h-3 w-3 text-accent" />
                <span>Phone: 07652-240917</span>
              </a>
              <div className="hidden h-3 w-px bg-border sm:block" />
              <a
                href="mailto:ptsnsuniversity@gmail.com"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Mail className="h-3 w-3 text-accent" />
                <span>Email: ptsnsuniversity@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="hidden xl:block w-44"></div>

        </div>
        <div className="mt-3 w-full max-w-xs sm:mt-4 sm:max-w-sm md:max-w-md">
          <div className="relative rounded-full border-2 border-primary bg-white shadow-lg">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses, notices, faculty..."
              className="h-9 w-full rounded-full border-0 bg-white pl-10 pr-10 text-xs transition-colors focus-visible:outline-none focus-visible:ring-0 sm:h-10"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90 sm:h-8 sm:w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
