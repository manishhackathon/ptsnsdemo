'use client';

import { Phone, Mail, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="relative w-full min-h-[160px] overflow-hidden bg-muted/50">
      <div className="relative z-10 flex flex-col items-center p-2 text-center sm:p-3">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="hidden shrink-0 lg:block">
            <Image
              src="/haldihands.png"
              alt="Decorative hands with turmeric"
              width={140}
              height={140}
              className="object-contain -rotate-12"
            />
          </div>
          <div className="inline-block rounded-2xl border border-accent/50 bg-white px-4 py-2 shadow-xl sm:px-6">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-3 lg:gap-6">
              <Link href="/">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full md:h-14 md:w-14 lg:h-20 lg:w-20">
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
                  <h1 className="font-headline text-base font-bold tracking-tight text-primary sm:text-lg md:text-xl lg:text-3xl">
                    Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)
                  </h1>
                  <p className="font-hindi text-sm font-bold text-primary/90 sm:text-base md:text-base">
                    पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                  </p>
                </Link>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-foreground/80 sm:text-xs lg:mt-4 lg:gap-x-6 lg:text-sm">
              <a
                href="tel:07652240917"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Phone className="h-3 w-3 text-accent lg:h-4 lg:w-4" />
                <span>Phone: 07652-240917</span>
              </a>
              <div className="hidden h-3 w-px bg-border sm:block" />
              <a
                href="mailto:ptsnsuniversity@gmail.com"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Mail className="h-3 w-3 text-accent lg:h-4 lg:w-4" />
                <span>Email: ptsnsuniversity@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="hidden shrink-0 lg:block">
            <Image
              src="/haldihands.png"
              alt="Decorative hands with turmeric"
              width={140}
              height={140}
              className="object-contain -scale-x-100 rotate-12"
            />
          </div>
        </div>
        <div className="mt-2 flex w-full justify-end px-2 sm:mt-3">
          <div className="flex w-full max-w-lg items-center gap-2 lg:max-w-2xl">
            <div className="relative flex-grow">
              <div className="relative rounded-full border-2 border-primary bg-white shadow-lg">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search courses, notices, faculty..."
                  className="h-7 w-full rounded-full border-0 bg-white pl-10 pr-10 text-xs transition-colors focus-visible:outline-none focus-visible:ring-0 sm:h-8"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90 sm:h-6 sm:w-6"
                >
                  <Search className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                variant="outline"
                className="h-7 w-7 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10"
              >
                <span className="text-xs">A-</span>
              </Button>
              <Button
                variant="outline"
                className="h-7 w-7 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10"
              >
                <span className="text-xs">A</span>
              </Button>
              <Button
                variant="outline"
                className="h-7 w-7 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10"
              >
                <span className="text-xs">A+</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
