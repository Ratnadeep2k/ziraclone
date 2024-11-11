

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import CompanyCarousel from "@/components/company-carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqs from "@/data/faqs";
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
      <section id="features" className="bg-gray-900 py-20 px-5 border -b">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/80 border-gray-700 hover:bg-gray-800/95 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="relative p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
          {/* TRUSTED BY  */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
       {/* CTA Section */}
       <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using Jira to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

    </div>


  )
}
