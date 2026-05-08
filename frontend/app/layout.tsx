// TypeScript sometimes cannot find type declarations for CSS imports in this project setup.
// Ignore the next line so the build doesn't error on the side-effect CSS import.
// @ts-ignore
import './globals.css';             // Tailwind's base styles
import Link from 'next/link';
import { Providers } from './providers';
import { Fraunces, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

// Metadata for the HTML head
export const metadata = {
  title: 'AI Code Review Dashboard',
  description: 'Review AI suggestions and provide feedback',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable} text-gray-100`}>
        {/* Wrap the whole app in our QueryClientProvider */}
        <Providers>
          <header className="border-b border-gray-800/70 bg-gray-950/70 backdrop-blur">
            <div className="app-container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link href="/" className="text-xl font-semibold tracking-tight">
                  <span className="text-emerald-300">AI Code Review</span> Assistant
                </Link>
                <p className="text-sm text-gray-400">
                  Automate PR reviews, capture feedback, and measure impact.
                </p>
              </div>
              <nav className="flex flex-wrap items-center gap-3 text-sm">
                <Link href="/reviews" className="rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:border-emerald-400 hover:text-emerald-200">
                  Reviews
                </Link>
                <Link href="/" className="rounded-full bg-emerald-400/10 px-4 py-2 text-emerald-200 hover:bg-emerald-400/20">
                  Dashboard
                </Link>
                <a
                  href="https://github.com"
                  className="rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:border-sky-400 hover:text-sky-200"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="mt-16 border-t border-gray-800/70 bg-gray-950/70">
            <div className="app-container flex flex-col gap-2 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
              <span>Built for fast, consistent pull request reviews.</span>
              <span>Version 1.0.0 - Production-ready demo</span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}