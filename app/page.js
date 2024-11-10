import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
    <div>
      {/* HeroSection */}
      <section>
        <h1>Streamline your workflow
          <br />
         <span>
            with{""}
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
      </section>
  </div>


)
}
