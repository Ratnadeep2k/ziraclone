import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
    <div className="min-h-secreen">
      {/* HeroSection */}
      <section className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title">
          Streamline your workflow
          <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center justify-center mt-4">
            with{" "}
            <Image
              src="/logo2.png"
              alt="Zira"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl">
          Manage your projects with ease
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/onboarding">
            <Button size="lg" className="mr-4">
              Get Started
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
          
          <Link href="#features">
            <Button variant="outline" size="lg" className="mr-4">
              Learn More
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>


)
}
