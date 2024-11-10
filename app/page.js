import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
    <div className="min-h-secreen">
      {/* HeroSection */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex felx-col">
          Streamline your workflow
          <br />
         <span>
            with
            <Image
            src={'/logo.svg'}
            alt="Zira"
            width={400}
            height={80}
            className="h-14 sm:h-24 w-auto object-contain"
            />
         </span>
        </h1>
        <p>Manage your projects with ease</p>
        <Link href='/onboarding'>
          <Button  size='lg' className='mr-4'>
            Get Started  <ChevronRight size={18} className="ml-1"/>
          </Button>
        </Link>
        <Link href='#features'>
          <Button varient='outline' size='lg' className='mr-4'>
            Learn More <ChevronRight size={18} className="ml-1"/>
          </Button>
        </Link>
      </section>
  </div>


)
}
