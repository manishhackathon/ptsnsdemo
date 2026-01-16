import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const AboutUsSection = () => {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');

  return (
    <section id="about-us" aria-labelledby="about-us-title">
      <Card className="overflow-hidden border-accent/20 bg-transparent shadow-lg shadow-accent/5">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <CardHeader className="p-0">
              <h2 id="about-us-title" className="font-headline text-3xl font-bold text-primary">
                About University of Shahdol
              </h2>
            </CardHeader>
            <CardContent className="mt-4 p-0">
              <div className="space-y-4 text-base text-foreground/80">
                <p>
                  Nestled in the heartland of India, our university is a beacon of knowledge, blending rich cultural heritage with modern academic excellence. We are committed to fostering an environment of intellectual curiosity and innovation.
                </p>
                <p>
                  Established to honor the local communities, University of Shahdol offers a unique educational experience. Our curriculum is designed to empower students with skills for the future while instilling a deep respect for our history and traditions.
                </p>
              </div>
              <Button variant="outline" className="mt-6 border-accent text-accent hover:bg-accent/10 hover:text-accent">Learn More</Button>
            </CardContent>
          </div>
          {aboutImage && (
            <div className="relative min-h-[300px] w-full">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default AboutUsSection;
