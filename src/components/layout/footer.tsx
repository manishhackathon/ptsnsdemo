import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold">University of Shahdol</h3>
            <p className="mt-1 text-sm opacity-80">© {currentYear} University of Shahdol. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="text-center text-sm opacity-80">
              <p>University Road, Shahdol, Madhya Pradesh, 484001, India</p>
              <p>Email: contact@uos.ac.in | Phone: +91-7652-123456</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 opacity-80 transition-colors hover:opacity-100" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 opacity-80 transition-colors hover:opacity-100" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 opacity-80 transition-colors hover:opacity-100" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 opacity-80 transition-colors hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
