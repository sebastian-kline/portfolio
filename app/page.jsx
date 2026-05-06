"use client";

import { motion } from "framer-motion";
import ConstellationBackground from "./components/ConstellationBackground";

const projects = [
  {
    name: "TrackHire",
    label: "Production-style full-stack system",
    description:
      "A job application tracking platform with authentication, persistent data, deployment, and a polished user workflow.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "JWT",
      "PostgreSQL",
      "Supabase",
      "Railway",
      "Vercel",
    ],
    live: "https://www.trackhire.app/",
    github: "https://github.com/sebastian-kline/trackhire",
  },
  {
    name: "Internal Company Portal",
    label: "Role-based business application",
    description:
      "A company portal that separates employee, manager, and admin permissions for PTO workflows and user management.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "H2",
    ],
    github: "https://github.com/sebastian-kline/company-portal",
  },
  {
    name: "IT Support Ticket System",
    label: "Backend-focused CRUD system",
    description:
      "A support ticket system with REST APIs, validation, layered backend structure, and ticket lifecycle management.",
    stack: ["Java", "Spring Boot", "REST APIs", "H2 Database"],
    github:
      "https://github.com/sebastian-kline/it-support-ticket-system",
  },
];

const strengths = [
  "Full-stack application design",
  "Backend APIs and data flow",
  "Authentication and authorization",
  "Database-backed applications",
  "Deployment and production setup",
  "Clean, usable interfaces",
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-zinc-100">

      {/* Full page animated particle background */}
      <ConstellationBackground />

      {/* Soft gradient glow behind everything */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

      {/* Floating blur orb */}
      <motion.div
        className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-zinc-500/10 blur-3xl"
        animate={{
          y: [0, 40, 0],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
      />

      {/* Main page content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">

        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-zinc-800 bg-[#080808]/95 px-4 py-4 backdrop-blur-xl">

          <a
            href="#"
            className="hidden text-sm font-semibold tracking-tight text-white sm:block"
          >
            Sebastian Kline
          </a>

          <div className="flex w-full items-center justify-between gap-3 text-xs text-zinc-400 sm:w-auto sm:justify-start sm:gap-6 sm:text-sm">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#systems" className="transition hover:text-white">
              Systems
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero section */}
        <section className="grid min-h-[86vh] items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr]">

          {/* Left side hero content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Junior Software Engineer
            </p>

            <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white md:text-8xl">
              Sebastian Kline
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I’m a software engineer focused on building practical systems -
              from backend APIs and authentication to databases, user workflows,
              and deployed applications.
            </p>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                View Work
              </a>

              <a
                href="/Sebastian_Kline_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-300 transition hover:-translate-y-1 hover:bg-zinc-900"
              >
                Resume
              </a>

              <a
                href="https://github.com/sebastian-kline"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-300 transition hover:-translate-y-1 hover:bg-zinc-900"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right side hero card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Engineering Focus
            </p>

            <div className="mt-6 space-y-4">

              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20">

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected Projects
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Software I’ve built
            </h2>
          </div>

          <div className="space-y-5">

            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-6 shadow-xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-zinc-600"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-center">

                  <div>

                    <p className="text-sm text-zinc-500">
                      {project.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                      {project.name}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    {/* Tech stack pills */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="flex gap-5 md:justify-end">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white hover:underline"
                      >
                        Live →
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-zinc-400 hover:text-white"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Systems section */}
        <motion.section
          id="systems"
          className="py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <div className="grid gap-8 border-t border-zinc-800 pt-12 md:grid-cols-[0.4fr_1fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Beyond UI
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
                I care about the whole system.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="font-bold text-white">
                  Backend logic
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Controllers, services, repositories, validation,
                  database access, and clean API design.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="font-bold text-white">
                  Security basics
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  JWT authentication, BCrypt password hashing,
                  protected endpoints, and role-based permissions.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="font-bold text-white">
                  Data and persistence
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Relational data models, PostgreSQL, H2 for development,
                  and production database setup.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="font-bold text-white">
                  Deployment
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Frontend/backend separation, environment configs,
                  Vercel, Railway, and hosted databases.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Work experience section */}
        <motion.section
          id="experience"
          className="py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 border-t border-zinc-800 pt-12 md:grid-cols-[0.4fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Experience
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
                Work experience
              </h2>
            </div>

            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-6 shadow-xl shadow-black/30 backdrop-blur">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    System Administrator Intern
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    West Penn Manufacturing
                  </p>
                </div>

                <p className="text-sm text-zinc-500">
                  Dec 2024 - May 2025
                </p>
              </div>

              <div className="mt-6 space-y-4 text-zinc-400">
                <p>
                  Worked on IT administration and security-focused tasks that supported
                  company compliance efforts, device management, and internal system
                  organization.
                </p>

                <p>
                  Assisted with CMMC compliance measures, configured Microsoft Intune
                  and Entra ID, helped enforce laptop security policies, and documented
                  IT processes and security protocols.
                </p>

                <p>
                  This experience helped me understand how software, security, users,
                  devices, and business requirements all connect in a real company
                  environment.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About section */}
        <motion.section
          id="about"
          className="py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 border-t border-zinc-800 pt-12 md:grid-cols-[0.4fr_1fr]">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                About
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
                More about me
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-zinc-400">

              <p>
                I graduated from Saint Francis University with a degree in
                Computer Science focused on Software Engineering and Machine Learning.
                During college, I was also involved in Phi Kappa Theta where I served
                as Vice President and helped oversee academic performance and chapter operations.
              </p>

              <p>
                Outside of software engineering, I’m a huge Pittsburgh sports fan,
                especially hockey and the Pittsburgh Penguins. I also enjoy working on
                side projects, learning new technologies, and finding ways to make the
                things I build feel more polished and complete.
              </p>

              <p>
                Most of my projects come from trying to solve real problems or recreate
                systems that companies actually use. I enjoy understanding how everything
                connects together - from backend architecture and security to frontend
                experience and deployment.
              </p>

            </div>
          </div>
        </motion.section>

        {/* Contact section */}
        <motion.section
          id="contact"
          className="py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-8 shadow-xl shadow-black/30 backdrop-blur">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Let’s connect.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              I’m currently looking for junior software engineering roles
              and would be happy to talk about my projects, experience,
              or open opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="mailto:sebastiankline3@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                Email Me
              </a>

              <a
                href="https://github.com/sebastian-kline"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-300 transition hover:-translate-y-1 hover:bg-zinc-900"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sebastiankline/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-zinc-300 transition hover:-translate-y-1 hover:bg-zinc-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}