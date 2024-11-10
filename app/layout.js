import Header from "@/components/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
const inter =Inter({subsets:["latin"]})
export const metadata = {
  title: "Zira clone",
  description: "A Project management application for teams",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: shadesOfPurple,
    }}
    
    >
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}
      >
        <ThemeProvider attribute ="class" defaultTheme ='dark'>
          {/* Header */}
          <Header/>
          <main className="min-h-screen">
          {children}
          </main>
        
          {/* Footer */}
          <footer className="bg-gray-900 py-12" >
            <div className="container mx-auto text-center text-gray-200">
              <p>&copy; 2024 Zira Clone</p>
            </div>
          </footer>
        </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}