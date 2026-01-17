'use client';

import { Phone, Mail, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MobileNav } from './navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-muted/50 backdrop-blur-sm xl:relative xl:min-h-[160px] xl:bg-transparent xl:backdrop-blur-none">
      <div className="relative z-10 flex flex-col items-center p-2 text-center sm:p-3">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="inline-block rounded-2xl border border-accent/50 bg-white px-4 py-2 shadow-xl">
            {/* Desktop Header */}
            <div className="hidden xl:block">
              <div className="flex items-center justify-center gap-6">
                <Link href="/">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
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
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
                      Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                    </h1>
                    <p className="font-hindi text-2xl font-bold text-primary/90">
                      पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                    </p>
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-foreground/80">
                <a
                  href="tel:07652240917"
                  className="flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span>Phone: 07652-240917</span>
                </a>
                <div className="h-3 w-px bg-border" />
                <a
                  href="mailto:ptsnsuniversity@gmail.com"
                  className="flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>Email: ptsnsuniversity@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Mobile/Tablet Header */}
            <div className="xl:hidden">
              <div className="flex items-center justify-between gap-3 text-left sm:relative sm:justify-center sm:gap-4 sm:text-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Link href="/">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
                      <Image
                        src="/university.jpg"
                        alt="University Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <Link href="/" className="pr-12 sm:pr-0">
                    <h1 className="font-headline text-sm font-bold tracking-tight text-primary sm:text-base">
                      Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                    </h1>
                  </Link>
                </div>
                <div className="sm:absolute sm:right-0">
                  <MobileNav />
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-border pt-2 text-[10px] text-foreground/80 sm:text-xs">
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
          </div>
        </div>
        <div className="hidden w-full justify-end px-2 sm:mt-3 xl:flex">
          <div className="flex w-full max-w-sm items-center gap-2 lg:max-w-md">
            <div className="relative flex-grow">
              <div className="relative rounded-full border-2 border-primary bg-white shadow-lg">
                <Search className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search courses, notices, faculty..."
                  className="h-6 w-full rounded-full border-0 bg-white pl-8 pr-8 text-xs transition-colors focus-visible:outline-none focus-visible:ring-0 sm:h-7"
                />
                <Button
                  size="icon"
                  className="absolute right-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-primary text-white transition-opacity hover:opacity-90 sm:h-6 sm:w-6"
                >
                  <Search className="h-2 w-2 sm:h-3 sm:w-3" />
                </Button>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                variant="outline"
                className="h-6 w-6 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10 sm:h-7 sm:w-7"
              >
                <span className="text-[10px] sm:text-xs">A-</span>
              </Button>
              <Button
                variant="outline"
                className="h-6 w-6 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10 sm:h-7 sm:w-7"
              >
                <span className="text-[10px] sm:text-xs">A</span>
              </Button>
              <Button
                variant="outline"
                className="h-6 w-6 rounded-lg border-primary bg-white p-0 text-primary shadow-lg hover:bg-primary/10 sm:h-7 sm:w-7"
              >
                <span className="text-[10px] sm:text-xs">A+</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
