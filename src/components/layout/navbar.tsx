'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'About Us',
    subLinks: [
      { href: '#', label: 'About the University' },
      { href: '#', label: 'Vision & Mission' },
      { href: '#', label: 'Administration' },
    ]
  },
  { 
    label: 'Administration',
    subLinks: [
      { href: '#', label: 'Chancellor' },
      { href: '#', label: 'Vice Chancellor' },
      { href: '#', label: 'Registrar' },
    ]
  },
  { 
    label: 'Admission and Fee',
    subLinks: [
        { href: '#', label: 'Admission Process' },
        { href: '#', label: 'Fee Structure' },
        { href: '#', label: 'Scholarships' },
    ]
  },
  { 
    label: 'Academics',
    subLinks: [
        { href: '#', label: 'Faculties' },
        { href: '#', label: 'Departments' },
        { href: '#', label: 'Academic Calendar' },
    ]
  },
  { 
    label: 'Research',
    subLinks: [
        { href: '#', label: 'Research Policies' },
        { href: '#', label: 'Publications' },
        { href: '#', label: 'Projects' },
    ]
  },
  { 
    label: 'Student Life',
    subLinks: [
        { href: '#', label: 'Campus Life' },
        { href: '#', label: 'Hostels' },
        { href: '#', label: 'Sports' },
    ]
  },
  { 
    label: 'Information Corner',
    subLinks: [
        { href: '#', label: 'News & Events' },
        { href: '#', label: 'Notices' },
        { href: '#', label: 'Tenders' },
    ]
  },
  { href: '#', label: 'Online Services' },
  { href: '#', label: 'Event Gallery' },
];


const NavMenu = () => (
  <nav className="hidden items-center space-x-1 xl:flex">
    {navLinks.map((link) => (
      link.subLinks ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-fuchsia-600 transition-colors hover:bg-fuchsia-100 hover:text-fuchsia-700"
            >
              {link.label} <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-card/80 backdrop-blur">
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.label} asChild>
                <Link href={subLink.href}>{subLink.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          key={link.label}
          href={link.href || '#'}
          className="rounded-md px-3 py-2 text-sm font-medium text-fuchsia-600 transition-colors hover:bg-fuchsia-100 hover:text-fuchsia-700"
        >
          {link.label}
        </Link>
      )
    ))}
  </nav>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="rounded-md border border-fuchsia-600 xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-fuchsia-600 hover:bg-fuchsia-100 hover:text-fuchsia-700">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-card p-0">
          <SheetHeader className="p-6 text-left border-b">
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)} className="font-headline text-lg font-bold text-fuchsia-600">
                P.S.N.S. Vishwavidyalaya
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <div key={link.label} className="flex flex-col space-y-2">
                      <p className="font-semibold text-foreground/80">{link.label}</p>
                      {link.subLinks.map(sublink => (
                         <Link
                          key={sublink.label}
                          href={sublink.href}
                          className="pl-4 text-base font-medium text-foreground/70 transition-colors hover:text-fuchsia-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )
                }
                return (
                   <Link
                    key={link.label}
                    href={link.href!}
                    className="text-base font-medium text-foreground/80 transition-colors hover:text-fuchsia-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const NavBar = () => {
    return (
        <div className="sticky top-0 z-40 w-full bg-white xl:border-y xl:border-fuchsia-200">
            <div className="container mx-auto flex h-14 items-center justify-end px-4 xl:justify-center">
                <NavMenu />
                <MobileNav />
            </div>
        </div>
    );
};

export default NavBar;
