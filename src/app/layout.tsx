import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { DM_Mono, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.className} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
