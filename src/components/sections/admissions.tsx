import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdmissionsSection = () => {
  return (
    <section id="admissions" aria-labelledby="admissions-title">
      <Card className="bg-card border border-primary shadow-lg shadow-primary/20">
        <CardContent className="p-10 text-center">
          <h2 id="admissions-title" className="font-headline text-3xl font-bold text-primary">
            Admissions Open for {new Date().getFullYear()}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-foreground/80">
            Begin your journey with Pandit Shambhunath Shukla University, Shahdol. Discover our programs and become part of a legacy of excellence.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Apply Now
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default AdmissionsSection;
