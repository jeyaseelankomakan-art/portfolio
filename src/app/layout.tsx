import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Jeyaseelan Komakan | Software Developer Portfolio",
  description:
    "Software Developer specializing in full-stack development, Java desktop apps, and system design. Building smart systems with clean code.",
  keywords: [
    "Jeyaseelan Komakan",
    "Software Developer",
    "Java Developer",
    "Full Stack Developer",
    "Portfolio",
    "Sri Lanka",
  ],
  openGraph: {
    title: "Jeyaseelan Komakan | Software Developer",
    description:
      "Building smart systems with clean code. Full-stack development, Java desktop apps, and system design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
