import { Button } from "@/components/ui/button";
import { BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
export default function Home() {
  const features = [
    {
      title: "Intuitive Kanban Boards",
      description:
        "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
      icon: Layout,
    },
    {
      title: "Powerful Sprint Planning",
      description:
        "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
      icon: Calendar,
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Gain insights into your team's performance with detailed, customizable reports and analytics.",
      icon: BarChart,
    },
  ];
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

          <p className="text-lg text-gray-400 sm:text-xl">
            Manage your projects with ease
          </p>

          <div className="flex justify-center gap-1 pt-4">
            <Link href="/onboarding">
              <Button size="lg" className="mr-2">
                Get Started
                <ChevronRight size={18} />
              </Button>
            </Link>

            <Link href="#features">
              <Button variant="outline" size="lg" className="mr-2">
                Learn More
                <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div>
          <h3>Key Features</h3>
          <div>
              {features.map((feature,index)=>{
                 <Card key={index} className="bg-gray-800">
                 <CardContent className="pt-6">
                   <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                   <h4 className="text-xl font-semibold mb-2">
                     {feature.title}
                   </h4>
                   <p className="text-gray-300">{feature.description}</p>
                 </CardContent>
               </Card>
              })}
          </div>
        </div>

      </section>




    </div>


  )
}
