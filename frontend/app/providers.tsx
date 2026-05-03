'use client';   // This component must run on the client because it uses React hooks

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a QueryClient once per session (lazy initialisation)
  const [client] = useState(() => new QueryClient());

  // Wrap all children with the query client provider
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}