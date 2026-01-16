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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
  { href: '#', label: 'Event Gallery' },
  { href: '#', label: 'Online Services' },
];


const NavMenu = () => (
  <nav className="hidden items-center space-x-1 lg:flex">
    {navLinks.map((link) => (
      link.subLinks ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/10 hover:text-primary-foreground"
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
          className="px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/10 rounded-md"
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
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-card">
          <div className="flex flex-col space-y-2 p-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-headline text-2xl font-bold text-primary mb-4">University of Shahdol</Link>
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div key={link.label} className="flex flex-col space-y-2">
                    <p className="font-semibold text-foreground/80">{link.label}</p>
                    {link.subLinks.map(sublink => (
                       <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="pl-4 text-base font-medium text-foreground/70 transition-colors hover:text-primary"
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
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const NavBar = () => {
    return (
        <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto flex h-14 items-center justify-end px-4 lg:justify-center">
                <NavMenu />
                <MobileNav />
            </div>
        </div>
    );
};

export default NavBar;
