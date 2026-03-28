"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, Github, Download, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Grama Niladhari Management System",
        shortTitle: "GNMS",
        description:
            "A comprehensive Java desktop application designed to digitize and streamline the administrative tasks of a Grama Niladhari division. Handles citizen records, certificate generation, welfare tracking, and complaint management with JasperReports integration.",
        image: "/gnms-mockup.png",
        technologies: ["Java", "Swing", "MySQL", "JasperReports"],
        github: "https://github.com/jeyaseelankomakan-art/GNMS",
        demo: "/GNMS.jar",
        featured: true,
        gradient: "from-indigo-500/20 to-purple-500/20",
        accentColor: "indigo",
    },
    {
        title: "Sri Lanka Price Comparison",
        shortTitle: "compare.lk",
        description:
            "A web platform that aggregates product prices from multiple Sri Lankan e-commerce websites using web scraping and presents the best deals. Includes search, filtering, and real-time price comparison across stores.",
        image: "/comparelk-mockup.png",
        technologies: ["PHP", "MySQL", "Web Scraping", "JavaScript"],
        github: "https://github.com/jeyaseelankomakan-art/comparelk",
        demo: "https://comparelk.great-site.net/?i=1",
        featured: true,
        gradient: "from-cyan-500/20 to-blue-500/20",
        accentColor: "cyan",
    },
    {
        title: "Personal Portfolio Website",
        shortTitle: "Portfolio",
        description:
            "This responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion — featuring glassmorphism, interactive particles, and premium micro-animations.",
        image: null,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/jeyaseelankomakan-art/portfolio",
        demo: "/",
        featured: false,
        gradient: "from-purple-500/20 to-pink-500/20",
        accentColor: "purple",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

    const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const isJar = project.demo.endsWith(".jar");

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative rounded-3xl overflow-hidden will-change-transform ${
                project.featured ? "" : "lg:col-span-2"
            }`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(99, 102, 241, 0.08), transparent 40%)`,
                }}
            />

            {/* Card */}
            <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-3xl hover:border-white/[0.1] transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className={`flex ${project.featured ? "flex-col" : "flex-col lg:flex-row"}`}>
                    {/* Image Area */}
                    <div
                        className={`relative overflow-hidden ${
                            project.featured
                                ? "h-64 sm:h-80"
                                : "h-56 lg:h-auto lg:w-2/5"
                        }`}
                    >
                        {project.image ? (
                            <>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                            </>
                        ) : (
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                <span className="font-outfit font-bold text-4xl text-white/10">{project.shortTitle}</span>
                            </div>
                        )}

                        {/* Hover overlay with buttons */}
                        <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
                            <a
                                href={project.github}
                                className="p-3.5 bg-white/10 border border-white/10 text-white rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-md"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={project.demo}
                                className="p-3.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-2xl hover:bg-indigo-500/30 hover:scale-110 transition-all duration-300 backdrop-blur-md"
                                {...(isJar
                                    ? { download: true }
                                    : project.demo.startsWith("/")
                                    ? {}
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {isJar ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                            </a>
                        </div>

                        {/* Featured Tag */}
                        {project.featured && (
                            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-[10px] font-bold tracking-[0.15em] text-slate-300 uppercase">
                                Featured
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className={`relative z-10 p-8 sm:p-10 ${project.featured ? "" : "lg:w-3/5"} flex flex-col justify-center`}>
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, tIdx) => (
                                <span
                                    key={tIdx}
                                    className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-slate-300 text-xs font-medium rounded-lg backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
                            <a
                                href={project.github}
                                className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group/link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                                Source Code
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href={project.demo}
                                className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 text-sm font-medium group/link"
                                {...(isJar
                                    ? { download: true }
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                            >
                                {isJar ? (
                                    <>
                                        <Download className="w-4 h-4" />
                                        Download JAR
                                    </>
                                ) : (
                                    <>
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </>
                                )}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ProjectsSection() {
    return (
        <section id="projects" className="relative py-32 overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
