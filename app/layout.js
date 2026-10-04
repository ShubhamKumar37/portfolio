import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Shubham Kumar | Software Engineer",
  description:
    "Portfolio of Shubham Kumar — Software Engineer specializing in full-stack development, .NET, JavaScript, Next.js, and GenAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}