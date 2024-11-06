import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google"

const inter =Inter({subsets:["latin"]})
export const metadata = {
  title: "Zira clone",
  description: "A Project management application for teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        <ThemeProvider attribute ="class" defaultTheme ="dark">
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
