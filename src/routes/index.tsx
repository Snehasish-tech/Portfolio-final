import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Ideas } from "@/components/portfolio/Ideas";
import { Overview } from "@/components/portfolio/Overview";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { GithubActivity } from "@/components/portfolio/GithubActivity";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/portfolio/Certificates";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Connect } from "@/components/portfolio/Connect";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

const title = "Snehasish-tech";
const description =
  "Full Stack Web Developer and IT undergraduate building AI-powered web apps with React, TypeScript, Node.js, Django and PostgreSQL.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-clip">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Ideas />
      <Overview />
      <TechStack />
      <Projects />
      <Experience />
      <GithubActivity />
      <Education />
      <Certificates />
      <ResumeSection />
      <Connect />
    </main>
  );
}
