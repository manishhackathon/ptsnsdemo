import { Megaphone } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
  { id: 1, text: 'Admissions for the 2024-2025 academic year are now open.', href: '#' },
  { id: 2, text: 'Annual sports meet to be held on December 15th.', href: '#' },
  { id: 3, text: 'Results for the semester-end examinations have been published.', href: '#' },
  { id: 4, text: 'A guest lecture on "The Future of AI" is scheduled for next week.', href: '#' },
  { id: 5, text: 'The university library will remain closed on Saturday for maintenance.', href: '#' },
];

const NewsTicker = () => {
  return (
    <div className="my-1 px-4">
      <div className="group flex h-8 w-full items-center overflow-hidden rounded-lg border border-primary bg-white shadow-lg">
        <div className="flex h-full flex-shrink-0 items-center gap-2 border-r border-border bg-primary px-4 text-primary-foreground">
          <Megaphone className="h-5 w-5" />
          <span className="font-headline text-sm font-semibold whitespace-nowrap">News & Updates</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex items-center whitespace-nowrap animate-marquee-infinite group-hover:[animation-play-state:paused]">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="mx-6 text-sm text-foreground transition-colors hover:text-primary hover:underline"
              >
                {item.text}
              </Link>
            ))}
            {/* Duplicate for seamless loop */}
            {newsItems.map((item) => (
              <Link
                key={`dup-${item.id}`}
                href={item.href}
                className="mx-6 text-sm text-foreground transition-colors hover:text-primary hover:underline"
                aria-hidden="true"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
