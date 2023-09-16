import "@kod/ui/styles/globals.css";
import { default as KodTRPCProvider } from "@kod/server/next/trpc/Provider";
import { KodAlertProvider } from "@kod/lib/hoc";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <KodTRPCProvider>
          <KodAlertProvider>
            {children}
          </KodAlertProvider>
        </KodTRPCProvider>
      </body>
    </html >
  );
}
