import "@kod/ui/styles/globals.css";
import { default as KodTRPCProvider } from "@kod/server/next/trpc/Provider";
import { KodAlertProvider, KodAuthProvider, KodThemeProvider } from "@kod/lib/hoc";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body>
        <KodTRPCProvider>
          <KodThemeProvider attribute="class" themes={["dark", "light"]} defaultTheme="dark">
            <KodAlertProvider>
              <KodAuthProvider>
                {children}
              </KodAuthProvider>
            </KodAlertProvider>
          </KodThemeProvider>
        </KodTRPCProvider>
      </body>
    </html >
  );
}
