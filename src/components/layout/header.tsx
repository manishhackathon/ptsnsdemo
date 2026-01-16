'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';

const navLinks = [
  { href: '#about-us', label: 'About Us' },
  { href: '#academics', label: 'Academics' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
];

const naacLinks = [
  { href: '#', label: 'AQAR' },
  { href: '#', label: 'SSR' },
  { href: '#', label: 'Certificates' },
];

const NavMenu = () => (
  <nav className="hidden items-center space-x-6 md:flex">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="font-medium text-foreground/80 transition-colors hover:text-primary"
      >
        {link.label}
      </Link>
    ))}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:bg-transparent hover:text-primary"
        >
          NAAC Accreditation <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-background/80 backdrop-blur">
        {naacLinks.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-background">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-headline text-2xl font-bold text-primary">Rewa Royals</Link>
            {[...navLinks, ...naacLinks].map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const Header = () => {
  const leftLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-left');
  const rightLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-right');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {leftLogo && (
          <Link href="/" className="hidden lg:block">
            <Image
              src={leftLogo.imageUrl}
              alt={leftLogo.description}
              width={60}
              height={60}
              className="rounded-full object-cover shadow-md"
              data-ai-hint={leftLogo.imageHint}
            />
          </Link>
        )}
        <div className="flex flex-grow items-center justify-center lg:justify-start lg:pl-8">
            <div className="flex flex-col text-center lg:text-left">
                <Link href="/">
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
                        Rewa Royals University
                    </h1>
                </Link>
            </div>
        </div>
        <div className="flex items-center gap-4">
          <NavMenu />
          {rightLogo && (
            <Link href="/" className="hidden lg:block">
              <Image
                src={rightLogo.imageUrl}
                alt={rightLogo.description}
                width={60}
                height={60}
                className="rounded-full object-cover shadow-md"
                data-ai-hint={rightLogo.imageHint}
              />
            </Link>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
