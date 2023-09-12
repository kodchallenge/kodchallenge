import "@kod/ui/styles/globals.css";
import { default as KodTRPCProvider } from "@kod/server/next/trpc/Provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <KodTRPCProvider>
          {children}
        </KodTRPCProvider>
      </body>
    </html>
  );
}
