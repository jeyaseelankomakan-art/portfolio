"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import Image from "next/image";

export function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    const nameVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } },
    };

    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "Graphic Designer",
        "Video Editor",
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-900"
        >
            {/* Background decoration elements */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse-slow max-md:hidden" style={{ animationDelay: "2s" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full md:w-1/2 flex flex-col items-start text-left"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 tracking-wider mb-6 border border-indigo-200 dark:border-indigo-800"
                        >
                            HELLO, I&apos;M
                        </motion.span>

                        <motion.h1
                            variants={nameVariants}
                            className="text-5xl md:text-7xl font-extrabold font-outfit text-slate-900 dark:text-white mb-4 leading-tight"
                        >
                            Jeyaseelan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
                                Komakan
                            </span>
                        </motion.h1>

                        <motion.div variants={itemVariants} className="h-8 mb-6 overflow-hidden relative">
                            <div className="flex flex-col animate-slide-up h-full">
                                {roles.map((role, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 h-8 flex items-center"
                                    >
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.p variants={itemVariants} className="max-w-xl text-slate-600 dark:text-slate-400 mb-8 text-lg">
                            I build efficient, scalable, and user-friendly digital solutions. Dedicated to creating modern web applications and exploring creative design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
                            >
                                View Projects
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="group flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 transition-all shadow-sm"
                            >
                                Download CV
                                <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-[360px] md:w-[340px] md:h-[460px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-[2rem] md:rounded-[3rem] border-4 border-white dark:border-slate-900 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile Photo"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 288px, 340px"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl animate-bounce-slow border border-slate-100 dark:border-slate-700">
                                🧑‍💻 Developer
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl animate-bounce-slow border border-slate-100 dark:border-slate-700" style={{ animationDelay: "1.5s" }}>
                                🎨 Designer
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
