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
        className={`${inter.className}`}
      >
        <ThemeProvider attribute ="class" defaultTheme ='dark'>
          {/* Header */}
          <main className="min-h-screen">
          {children}
          </main>
        
          {/* Footer */}
          <footer className="bg-gray-900 py-12" >
            <div className="container mx-auto text-center text-white">
              <p>&copy; 2021 Zira</p>
            </div>
          </footer>
        </ThemeProvider>
        
      </body>
    </html>
  );
}