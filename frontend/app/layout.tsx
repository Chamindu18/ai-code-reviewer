// TypeScript sometimes cannot find type declarations for CSS imports in this project setup.
// Ignore the next line so the build doesn't error on the side-effect CSS import.
// @ts-ignore
import './globals.css';             // Tailwind's base styles
import { Providers } from './providers';

// Metadata for the HTML head
export const metadata = {
  title: 'AI Code Review Dashboard',
  description: 'Review AI suggestions and provide feedback',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        {/* Wrap the whole app in our QueryClientProvider */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}