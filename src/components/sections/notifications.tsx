import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const notificationCards = [
  {
    title: 'Student Notifications',
    icon: Bell,
    href: '#',
    gradientClasses: 'bg-gradient-to-br from-blue-500 to-pink-500',
    notices: [
      { id: 1, text: 'Semester exam timetable for all UG/PG courses has been released.', date: '2024-07-25', href: '#' },
      { id: 2, text: 'Library will remain open 24/7 during the examination period.', date: '2024-07-24', href: '#' },
      { id: 3, text: 'Guest lecture on "Quantum Computing" on July 30th.', date: '2024-07-22', href: '#' },
      { id: 4, text: 'Last date for scholarship form submission extended to Aug 5th.', date: '2024-07-21', href: '#' },
      { id: 5, text: 'Hostel allotment list for 2nd year students is now available.', date: '2024-07-20', href: '#' },
      { id: 6, text: 'Registration for annual cultural fest "Aaroh" is now open.', date: '2024-07-19', href: '#' },
    ]
  },
  {
    title: 'University Circulars',
    icon: FileText,
    href: '#',
    gradientClasses: 'bg-gradient-to-br from-pink-300 to-red-500',
    notices: [
      { id: 1, text: 'Circular regarding new academic calendar for 2024-25 session.', date: '2024-07-23', href: '#' },
      { id: 2, text: 'Guidelines for Ph.D. admissions process for the upcoming year.', date: '2024-07-22', href: '#' },
      { id: 3, text: 'Notice for faculty members regarding research grant proposals.', date: '2024-07-20', href: '#' },
      { id: 4, text: 'Updated campus security measures and protocols.', date: '2024-07-18', href: '#' },
      { id: 5, text: 'Holiday declaration on account of local festival.', date: '2024-07-17', href: '#' },
      { id: 6, text: 'Circular on code of conduct for all students and staff.', date: '2024-07-15', href: '#' },
    ]
  },
  {
    title: 'Recruitment',
    icon: Briefcase,
    href: '#',
    gradientClasses: 'bg-gradient-to-br from-orange-400 to-pink-300',
    notices: [
      { id: 1, text: 'Opening for Assistant Professor in Computer Science department.', date: '2024-07-25', href: '#' },
      { id: 2, text: 'Walk-in interview for the post of Lab Assistant on Aug 2nd.', date: '2024-07-24', href: '#' },
      { id: 3, text: 'Vacancy for Junior Research Fellow in Physics project.', date: '2024-07-21', href: '#' },
      { id: 4, text: 'Hiring for administrative positions in the registrar\'s office.', date: '2024-07-19', href: '#' },
      { id: 5, text: 'Advertisement for the post of visiting faculty in Management.', date: '2024-07-18', href: '#' },
      { id: 6, text: 'Empanelment of guest faculty for various departments.', date: '2024-07-16', href: '#' },
    ]
  }
];

const NotificationsSection = () => {
  return (
    <section id="notifications" aria-labelledby="notifications-title">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {notificationCards.map((card) => (
          <Card key={card.title} className="group flex h-[400px] flex-col overflow-hidden rounded-lg border border-primary/30 shadow-xl shadow-primary/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/30">
            <CardHeader className="p-4">
              <div className="flex items-center gap-4">
                <div className={`flex-shrink-0 rounded-lg p-3 ${card.gradientClasses}`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <Link href={card.href} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
                  <CardTitle className="font-headline text-lg font-semibold text-primary/90 hover:underline">
                    {card.title}
                  </CardTitle>
                </Link>
              </div>
            </CardHeader>
            <Separator className="mx-4 -mt-2 bg-primary" />
            <CardContent className="relative flex-1 overflow-hidden p-4 pt-4">
                <div className="h-full overflow-hidden">
                    <div className="animate-marquee-up group-hover:[animation-play-state:paused]">
                        {[...card.notices, ...card.notices].map((notice, index) => (
                             <Link href={notice.href} key={`${notice.id}-${index}`} className="mb-4 block rounded-md border-b border-border/50 p-2 pb-4 outline-none transition-colors hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <p className="whitespace-normal text-sm font-medium text-foreground/90">{notice.text}</p>
                                <p className="mt-1 text-xs text-muted-foreground">{notice.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NotificationsSection;
