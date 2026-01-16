import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="text-center">
        <h2 id="contact-title" className="font-headline text-3xl font-bold text-primary">
          Get in Touch
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-foreground/80">
          We are here to help. Reach out to us with your queries, and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
            <CardDescription>Our official contact channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-accent/10 p-2">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-foreground/80">University Road, Rewa, Madhya Pradesh, 486003, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-accent/10 p-2">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:contact@rru.ac.in" className="text-foreground/80 hover:text-primary">contact@rru.ac.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-accent/10 p-2">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+917662123456" className="text-foreground/80 hover:text-primary">+91-7662-123456</a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Send us a Message</CardTitle>
            <CardDescription>Fill out the form below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
