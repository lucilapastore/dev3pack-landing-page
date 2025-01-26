import SupportersCarousel from "@/components/SupportersCarousel.client";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

import MentorsCarousel from "@/components/MentorsCarousel.client";
import RegisterButton from "@/components/RegisterButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { curriculumTopics } from "@/lib/constants";
import { GraduationCap, Handshake, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen text-foreground md:px-20">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/favicon.ico"
                alt="Dev3Pack Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-200"
                priority
              />
              <span className="text-xl font-gliker">Dev3Pack</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6 font-gliker">
                <Link href="#curriculum" className="hover:text-primary">
                  Program
                </Link>
                <Link href="#faq" className="hover:text-primary">
                  FAQ
                </Link>
                <Link href="#register" className="hover:text-primary">
                  Register
                </Link>
                <Link href="https://frost-foe-274.notion.site/About-dev3pack-17bb6900a299809493e9db82dc1fb608">
                  About
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-4xl font-gliker tracking-tight sm:text-5xl lg:text-6xl inline-blockuppercase !bg-clip-text text-transparent !bg-cover !bg-center transition-all bg-gradient-to-r from-foreground to-primary">
              Dev3Pack
            </h1>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground sm:text-xl">
              Join the first onchain builder school for women and students
              coming from Web2 development
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://t.me/sdaav">Get in touch</a>
              </Button>

              <RegisterButton />
            </div>
          </div>
        </section>

        {/* Supportes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl  font-bold">
              Trusted By Industry Leaders
            </h2>
            <div className="p-4 rounded-xl border-2 border-primary/50 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <SupportersCarousel />
            </div>
          </div>
        </section>

        {/* Bootcamp Program Section */}
        <section id="curriculum" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-gliker font-bold">
              Discovery Basecamp Curriculum
            </h2>
            <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-3xl">
              {curriculumTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 border-primary/50 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Join the Dev3Pack Club
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <Handshake className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Make some frens</h3>
                <p className="text-muted-foreground">
                  Join your next fam and build with people like you
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Zap className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">
                  Mentorship Access
                </h3>
                <p className="text-muted-foreground">
                  Get full guidance through a fast onchain integration process
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">
                  Exclusive benefits
                </h3>
                <p className="text-muted-foreground">
                  Get fast track for different programs and attend exclusive
                  sessions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-gliker font-bold">
              Learn with top teachers in Web3
            </h2>
            <MentorsCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-gliker font-bold">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  I don&apos;t have a technical background, can I participate in
                  the program?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we are looking for motivated people to discover Web3
                  development in a friendly way, and awaken new vocations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How much does the program cost?
                </AccordionTrigger>
                <AccordionContent>
                  The program is free for selected participants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What time is the cohort?</AccordionTrigger>
                <AccordionContent>
                  From Monday to Friday, at 4 PM to 5 PM UTC.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Will sessions be recorded?</AccordionTrigger>
                <AccordionContent>
                  The sessions will be recorded on Zoom and available on
                  Youtube. To obtain certification, live attendance at at least
                  4 sessions is required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will I receive certification at the end of the cohort?
                </AccordionTrigger>
                <AccordionContent>
                  Two levels of certification are available. The details will be
                  provided during the first session.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-md text-center">
              <SparklesText
                text="Join Us"
                className="mb-4 text-3xl font-gliker font-bold"
              />

              <p className="mb-8 text-muted-foreground">
                Secure your spot now! Limited seats available for the first
                cohort.
              </p>

              <RegisterButton />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-2">
                <Image
                  src="/favicon.ico"
                  alt="Dev3Pack Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-200"
                  priority
                />
                <span className="font-semibold font-gliker">Dev3Pack</span>
              </div>
              <div className="flex space-x-6">
                <Link
                  href="https://x.com/dev3pack"
                  className="hover:text-primary transition-colors"
                >
                  <FaXTwitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://t.me/dev3pack"
                  className="hover:text-primary transition-colors"
                >
                  <FaTelegram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
