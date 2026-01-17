import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';

const notificationCards = [
  {
    title: 'Student Notifications',
    icon: Bell,
    href: '#',
    description: 'Latest updates and notices for students.'
  },
  {
    title: 'University Circulars',
    icon: FileText,
    href: '#',
    description: 'Official circulars and announcements.'
  },
  {
    title: 'Recruitment',
    icon: Briefcase,
    href: '#',
    description: 'Job openings and career opportunities.'
  }
];

const NotificationsSection = () => {
  return (
    <section id="notifications" aria-labelledby="notifications-title">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {notificationCards.map((card) => (
          <Link href={card.href} key={card.title} className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg font-semibold text-primary/90">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/70">{card.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NotificationsSection;
