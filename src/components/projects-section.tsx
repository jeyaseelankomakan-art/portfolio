"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";

const projects = [
  {
    title: "Grama Niladhari Management System",
    description:
      "Java desktop application developed to manage administrative tasks of a Grama Niladhari division including citizens, certificates, welfare records, and complaints.",
    image: "/placeholder-gnms.png",
    technologies: ["Java", "Swing", "MySQL", "JasperReports"],
    github: "https://github.com/jeyaseelankomakan-art/GNMS",
    demo: "/GNMS.jar",
    featured: true,
  },
  {
    title: "Sri Lanka Price Comparison Website",
    description:
      "A web application that compares product prices from multiple Sri Lankan e-commerce websites using web scraping and displays the best deals for users.",
    image: "/placeholder-price.png",
    technologies: ["PHP", "MySQL", "Web Scraping", "JavaScript"],
    github: "https://github.com/jeyaseelankomakan-art/comparelk",
    demo: "https://comparelk.great-site.net/?i=1",
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive developer portfolio built with Next.js and Tailwind CSS to showcase projects, skills, and contact details.",
    image: "/placeholder-portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jeyaseelankomakan-art/portfolio",
    demo: "/",
    featured: false,
  },
];

function ProjectCard({ project }: { project: { title: string, description: string, image: string, technologies: string[], github: string, demo: string, featured: boolean } }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const spotlightX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)] transition-shadow duration-500 will-change-transform ${
        project.featured ? "lg:col-span-1" : "lg:col-span-2"
      }`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 z-50 overflow-hidden"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(99, 102, 241, 0.12), transparent 40%)`,
        }}
      />
      
      <div 
        className={`w-full h-full flex relative z-10 overflow-hidden rounded-[2rem] isolate ${project.featured ? "flex-col" : "flex-col lg:flex-row"}`}
      >
        {/* Sub-container holding the visual elements, translating Z for 3D Pop */}
        <div style={{ transform: "translateZ(40px)" }} className={`w-full flex relative flex-1 ${project.featured ? "flex-col" : "flex-col lg:flex-row"}`}>
          {/* Image Container with Custom Mobile & Desktop Mock */}
          <div
            onClick={() => {
                if (project.demo.endsWith(".jar")) return;
                if (project.demo.startsWith("/")) {
                  window.location.href = project.demo;
                } else {
                  window.open(project.demo, "_blank", "noopener,noreferrer");
                }
            }}
            className={`relative overflow-hidden bg-slate-100 dark:bg-slate-950/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-colors duration-500 cursor-pointer ${
              project.featured ? "h-72 sm:h-96 w-full" : "h-64 lg:h-auto lg:w-2/5"
            }`}
          >
            {/* Background ambient gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 dark:from-indigo-500/10 dark:to-cyan-500/10" />

            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-40 backdrop-blur-sm">
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg relative z-50"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href={project.demo}
                  className="p-3 bg-indigo-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg relative z-50"
                  {...(project.demo.endsWith(".jar")
                    ? { download: true }
                    : project.demo.startsWith("/")
                    ? {}
                    : {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.demo.endsWith(".jar") ? (
                    <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </a>
              </div>
              <span className="text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                View Project
              </span>
            </div>

             {/* Desktop and Mobile Mockups - Animated on Hover */}
            <div className="absolute inset-0 w-full h-full pointer-events-none perspective-[1000px] flex items-center justify-center">
              {/* Desktop Mockup */}
              <div className="absolute top-[12%] right-[5%] w-[80%] sm:w-[70%] h-[70%] sm:h-[75%] bg-white dark:bg-slate-950 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:translate-x-3 group-hover:rotate-y-[8deg] group-hover:scale-[1.03] z-10 origin-right">
                {/* Browser Header */}
                <div className="h-6 sm:h-8 bg-slate-100 dark:bg-slate-900 rounded-t-lg flex items-center px-3 gap-1.5 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]"></div>
                  <div className="ml-2 sm:ml-4 flex-1 h-3 sm:h-4 bg-white dark:bg-slate-800 rounded-md opacity-50 flex items-center px-2">
                    <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  </div>
                </div>
                {/* Desktop Content Placeholder */}
                <div className="flex-1 p-3 sm:p-5 flex flex-col gap-3 relative overflow-hidden">
                  <div className="w-3/4 h-4 sm:h-6 bg-slate-200 dark:bg-slate-800 rounded-md" />
                  <div className="w-1/2 h-2 sm:h-3 bg-slate-100 dark:bg-slate-800/50 rounded-md" />
                  
                  <div className="mt-2 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-4 flex-1">
                    <div className="col-span-2 bg-slate-100 dark:bg-slate-800/30 rounded-md p-2">
                        <div className="w-full h-full bg-slate-200/50 dark:bg-slate-700/50 rounded" />
                    </div>
                    <div className="col-span-1 bg-slate-100 dark:bg-slate-800/30 rounded-md p-2 flex flex-col gap-2">
                        <div className="w-full h-1/3 bg-indigo-500/20 rounded" />
                        <div className="w-full h-1/3 bg-cyan-500/20 rounded" />
                    </div>
                  </div>

                  {/* Floating title inside the desktop screen */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                    <span className="font-outfit font-bold text-2xl sm:text-4xl text-slate-800 dark:text-slate-200 text-center px-4 leading-tight">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute bottom-[2%] left-[5%] sm:left-[10%] w-[32%] sm:w-[25%] h-[65%] sm:h-[80%] bg-white dark:bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[4px] sm:border-[6px] border-slate-800 dark:border-slate-950 flex flex-col transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:-translate-y-8 group-hover:-translate-x-2 group-hover:-rotate-[5deg] z-20 overflow-hidden group-hover:scale-[1.08] origin-bottom-left">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-4 sm:h-5 flex justify-center z-10">
                  <div className="w-1/2 h-full bg-slate-800 dark:bg-slate-950 rounded-b-xl" />
                </div>
                {/* Mobile Content Placeholder */}
                <div className="flex-1 mt-6 p-2 sm:p-3 flex flex-col gap-2 relative bg-slate-50 dark:bg-slate-900">
                  <div className="w-full h-20 sm:h-28 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-lg shrink-0" />
                  <div className="w-3/4 h-2 sm:h-3 bg-slate-200 dark:bg-slate-800 rounded mt-2" />
                  <div className="w-1/2 h-2 sm:h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="flex-1 mt-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center p-8 sm:p-10 ${project.featured ? "flex-1" : "lg:w-3/5"}`}
          >
            <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, tIdx: number) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.github}
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center font-medium gap-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" /> Code
                </a>
                <a
                  href={project.demo}
                  className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors flex items-center font-medium gap-2 text-sm"
                  {...(project.demo.endsWith(".jar")
                    ? { download: true }
                    : {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                >
                  {project.demo.endsWith(".jar") ? (
                    <>
                      <Download className="w-5 h-5" /> Live Demo (Download)
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
              Featured <span className="text-indigo-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
