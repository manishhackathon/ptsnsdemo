'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Header = () => {
  const leftLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-left');
  const centerLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-center');
  const rightLogo = PlaceHolderImages.find((img) => img.id === 'header-logo-right');

  return (
    <header className="w-full bg-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex flex-col items-center gap-2 text-center">
          {leftLogo && (
            <Link href="#">
              <Image
                src={leftLogo.imageUrl}
                alt={leftLogo.description}
                width={80}
                height={80}
                className="rounded-full object-cover shadow-md border-2 border-primary/50"
                data-ai-hint={leftLogo.imageHint}
              />
            </Link>
          )}
          <p className="text-sm font-medium text-foreground/80">{leftLogo?.description}</p>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-center">
            {centerLogo && (
              <Link href="/">
                <Image
                    src={centerLogo.imageUrl}
                    alt={centerLogo.description}
                    width={90}
                    height={90}
                    className="rounded-full object-cover shadow-lg border-4 border-primary"
                    data-ai-hint={centerLogo.imageHint}
                />
              </Link>
            )}
            <Link href="/">
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
                    University of Shahdol
                </h1>
            </Link>
            <p className="text-muted-foreground">Madhya Pradesh, India</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          {rightLogo && (
            <Link href="#">
              <Image
                src={rightLogo.imageUrl}
                alt={rightLogo.description}
                width={80}
                height={80}
                className="rounded-full object-cover shadow-md border-2 border-accent/50"
                data-ai-hint={rightLogo.imageHint}
              />
            </Link>
          )}
           <p className="text-sm font-medium text-foreground/80">{rightLogo?.description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
