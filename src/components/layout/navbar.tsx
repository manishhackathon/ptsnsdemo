'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Info, Users, ClipboardSignature, GraduationCap, FlaskConical, Laugh, Megaphone, Globe, Image as ImageIcon, ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { 
    label: 'About Us',
    icon: Info,
    subLinks: [
      { href: '#', label: 'About the University' },
      { href: '#', label: 'Vision & Mission' },
      { href: '#', label: 'Administration' },
    ]
  },
  { 
    label: 'Administration',
    icon: Users,
    subLinks: [
      { href: '#', label: 'Chancellor' },
      { href: '#', label: 'Vice Chancellor' },
      { href: '#', label: 'Registrar' },
    ]
  },
  { 
    label: 'Admission and Fee',
    icon: ClipboardSignature,
    subLinks: [
        { href: '#', label: 'Admission Process' },
        { href: '#', label: 'Fee Structure' },
        { href: '#', label: 'Scholarships' },
    ]
  },
  { 
    label: 'Academics',
    icon: GraduationCap,
    subLinks: [
        { href: '#', label: 'Faculties' },
        { href: '#', label: 'Departments' },
        { href: '#', label: 'Academic Calendar' },
    ]
  },
  { 
    label: 'Research',
    icon: FlaskConical,
    subLinks: [
        { href: '#', label: 'Research Policies' },
        { href: '#', label: 'Publications' },
        { href: '#', label: 'Projects' },
    ]
  },
  { 
    label: 'Student Life',
    icon: Laugh,
    subLinks: [
        { href: '#', label: 'Campus Life' },
        { href: '#', label: 'Hostels' },
        { href: '#', label: 'Sports' },
    ]
  },
  { 
    label: 'Information Corner',
    icon: Megaphone,
    subLinks: [
        { href: '#', label: 'News & Events' },
        { href: '#', label: 'Notices' },
        { href: '#', label: 'Tenders' },
    ]
  },
  { href: '#', label: 'Online Services', icon: Globe },
  { href: '#', label: 'Event Gallery', icon: ImageIcon },
];


const NavMenu = () => (
  <nav className="hidden items-center xl:flex">
    {navLinks.map((link) => (
      link.subLinks ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-1.5 px-1 py-2 text-base font-medium text-primary transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <link.icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{link.label}</span> <ChevronDown className="h-4 w-4" />
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
          className="flex items-center gap-1.5 rounded-md px-1 py-2 text-base font-medium text-primary transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <link.icon className="h-4 w-4" />
          <span className="whitespace-nowrap">{link.label}</span>
        </Link>
      )
    ))}
  </nav>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="rounded-md border border-primary xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 hover:text-primary">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-card p-0">
          <SheetHeader className="p-6 text-left border-b">
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)} className="font-headline text-lg font-bold text-primary">
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
                       <p className="font-semibold text-foreground/80 flex items-center gap-2">
                        <link.icon className="h-4 w-4 text-primary" />
                        {link.label}
                      </p>
                      {link.subLinks.map(sublink => (
                         <Link
                          key={sublink.label}
                          href={sublink.href}
                          className="pl-8 text-base font-medium text-foreground/70 transition-colors hover:text-primary"
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
                    className="flex items-center gap-2 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="h-4 w-4 text-primary" />
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
        <div className="sticky top-0 z-40 w-full bg-muted py-1">
            <div className="flex h-14 w-full items-center justify-end px-4 xl:justify-center">
                <div className="hidden h-full w-full items-center justify-center rounded-lg border border-primary bg-white px-2 shadow-lg xl:flex">
                    <NavMenu />
                </div>
                <MobileNav />
            </div>
        </div>
    );
};

export default NavBar;
