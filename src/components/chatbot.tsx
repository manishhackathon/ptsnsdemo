'use client';

import { useState, useEffect } from 'react';
import {
  MessagesSquare,
  Send,
  ChevronUp,
  ChevronDown,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the contact section is intersecting, hide the chatbot.
        // When it's not, show it.
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // A small threshold to trigger early
      }
    );

    observer.observe(contactSection);

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <Button
          asChild
          className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-3 text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Link href="#">
            <FileText className="h-7 w-7" strokeWidth={2.25} />
            <span className="font-medium">Abhilekh | FTS</span>
          </Link>
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary to-purple-500 px-4 py-3 text-primary-foreground shadow-lg transition-transform hover:scale-105"
          aria-label="Open chatbot"
        >
          <MessagesSquare className="h-7 w-7" strokeWidth={2.25} />
          <span className="font-medium">Chat With Us</span>
          <ChevronUp className="h-6 w-6" strokeWidth={2.25} />
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between rounded-t-2xl bg-primary p-4 text-primary-foreground">
        <div className="flex items-center gap-3">
          <MessagesSquare className="h-7 w-7" strokeWidth={2.25} />
          <CardTitle className="font-headline text-lg">Chat with us</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 hover:bg-primary/80"
        >
          <ChevronDown className="h-6 w-6" strokeWidth={2.25} />
          <span className="sr-only">Collapse chat</span>
        </Button>
      </CardHeader>
      <CardContent className="h-80 overflow-y-auto p-4">
        {/* Placeholder for chat messages */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <MessagesSquare size={24} strokeWidth={2.25} />
            </div>
            <div className="max-w-[80%] rounded-lg bg-muted p-3 text-sm">
              Hello! How can I help you today?
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex w-full items-center gap-2">
          <Input placeholder="Type a message..." />
          <Button size="icon" className="bg-primary hover:bg-primary/90">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Chatbot;
