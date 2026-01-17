import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, FlaskConical, Cog, Landmark, Atom, Scale } from 'lucide-react';

const departments = [
  {
    name: 'Faculty of Arts & Humanities',
    icon: Palette,
    description: 'Explore the depths of human creativity, culture, and history.',
  },
  {
    name: 'Faculty of Science',
    icon: FlaskConical,
    description: 'Uncover the mysteries of the natural world through research and discovery.',
  },
  {
    name: 'Faculty of Engineering & Technology',
    icon: Cog,
    description: 'Innovate and build the future with cutting-edge technology and design.',
  },
  {
    name: 'Faculty of Commerce & Management',
    icon: Landmark,
    description: 'Lead in the global economy with expertise in business and finance.',
  },
  {
    name: 'Faculty of Tribal Studies',
    icon: Atom,
    description: 'Dedicated to the study and preservation of indigenous knowledge and culture.',
  },
  {
    name: 'Faculty of Law',
    icon: Scale,
    description: 'Uphold justice and navigate the complexities of the legal system.',
  },
];

const AcademicsSection = () => {
  return (
    <section id="academics" aria-labelledby="academics-title" className="text-center">
      <h2 id="academics-title" className="font-headline text-3xl font-bold text-primary">
        Our Academic Faculties
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-foreground/80">
        Diverse programs across various disciplines, fostering a comprehensive learning environment.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card
            key={dept.name}
            className="group transform-gpu bg-card text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
          >
            <CardHeader className="flex-row items-center gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <dept.icon className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-headline text-lg font-semibold text-primary/90">{dept.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">{dept.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AcademicsSection;
