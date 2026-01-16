import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/navbar';
import NewsTicker from '@/components/layout/news-ticker';

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
      <body className="font-body antialiased">
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/body.png')",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[90%] flex-col border border-accent/50 bg-card shadow-2xl">
          <Header />
          <NewsTicker />
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
