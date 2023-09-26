// Providers.tsx
"use client"

import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps): React.ReactElement {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
