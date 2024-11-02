
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/header";

const inter = Inter({subsets: ['latin']})
export const metadata = {
  title: "Zira Clone",
  description: "project management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {/* Header */}
          <Header/>
          <main className="min-h-screen">
          {children}
          </main>
          {/* Footer */}
          <footer className="bg-gray-900 py-12 ">
            <div className="container mx-auto px-4 text-center text-gray-200 ">
            <p>&copy; 2024 Zira Clone</p>
            </div>
          
          </footer>
           
        </ThemeProvider>
       
      </body>
    </html>
  );
}
