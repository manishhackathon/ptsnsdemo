'use client';

import { useState } from 'react';
import { Bot, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground shadow-lg transition-transform hover:scale-105"
        aria-label="Open chatbot"
      >
        <Bot className="h-6 w-6" />
        <span className="font-medium">Chat With Us</span>
        <ChevronUp className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between rounded-t-2xl bg-primary p-4 text-primary-foreground">
        <CardTitle className="font-headline text-lg">Chat with us</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/80">
          <ChevronDown className="h-5 w-5" />
          <span className="sr-only">Collapse chat</span>
        </Button>
      </CardHeader>
      <CardContent className="h-80 overflow-y-auto p-4">
        {/* Placeholder for chat messages */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Bot size={20} />
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
