import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BackgroundVectors from '@/components/background-vectors';
import NavBar from '@/components/layout/navbar';

export const metadata: Metadata = {
  title: 'Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)',
  description: 'A premier institution of higher learning and research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Sans+Devanagari:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <BackgroundVectors />
        <div className="relative mx-auto flex min-h-screen w-full max-w-[90%] flex-col border border-accent/50 bg-card shadow-2xl">
          <Header />
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
