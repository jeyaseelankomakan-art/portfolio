"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay, Download } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
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
            demo: "",
            featured: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                        Featured <span className="text-indigo-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-10"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className={`group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 ${project.featured ? "lg:col-span-1" : "lg:col-span-2 lg:flex-row"
                                }`}
                        >
                            {/* Image Container */}
                            <div
                                className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 ${project.featured ? "h-64 sm:h-80 w-full" : "h-64 lg:h-auto lg:w-2/5"
                                    }`}
                            >
                                {/* Fallback pattern if image is missing */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 dark:from-indigo-500/5 dark:to-cyan-500/5 flex items-center justify-center p-8">
                                    <MonitorPlay className="w-16 h-16 text-slate-400 dark:text-slate-600 opacity-50" />
                                </div>

                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-sm">
                                    <a href={project.github} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        className="p-3 bg-indigo-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                                        {...(project.demo.endsWith('.jar') ? { download: true } : {})}
                                    >
                                        {project.demo.endsWith('.jar') ? (
                                            <Download className="w-6 h-6" />
                                        ) : (
                                            <ExternalLink className="w-6 h-6" />
                                        )}
                                    </a>
                                </div>
                                {/* Add a placeholder image mock */}
                                <div className="absolute inset-0 flex items-end justify-center p-6 translate-y-8 group-hover:translate-y-2 transition-transform duration-500 ease-out z-10 w-full h-full">
                                    <div className="w-[80%] h-full bg-white dark:bg-slate-950 rounded-t-xl shadow-2xl border-t border-x border-slate-200 dark:border-slate-700 flex flex-col">
                                        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-t-xl flex items-center px-2 gap-1 border-b border-slate-200 dark:border-slate-700">
                                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="flex-1 p-2">
                                            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                                            <div className="w-2/3 h-2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`p-8 md:p-10 flex flex-col justify-center ${project.featured ? "flex-1" : "lg:w-3/5"}`}>
                                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <a
                                            href={project.github}
                                            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center font-medium gap-2 text-sm"
                                        >
                                            <Github className="w-5 h-5" /> Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors flex items-center font-medium gap-2 text-sm"
                                            {...(project.demo.endsWith('.jar') ? { download: true } : {})}
                                        >
                                            {project.demo.endsWith('.jar') ? (
                                                <><Download className="w-5 h-5" /> Live Demo (Download)</>
                                            ) : (
                                                <><ExternalLink className="w-5 h-5" /> Live Demo</>
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
