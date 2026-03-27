"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Code2, Palette, TerminalSquare, MousePointerClick } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
    // 3D Tilt effect for the profile image
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    // Words animation for the name
    const titleWords = "Jeyaseelan Komakan".split(" ");

    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "Graphic Designer",
        "Video Editor",
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950/80"
        >
            {/* Ultra-Premium Background Glowing Orbs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
            <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-6 relative z-10 isolate">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
                    
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10"
                    >
                        {/* Glassmorphic Intro Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md mb-8 shadow-[0_8px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                        >
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                            </span>
                            <span className="text-sm font-bold tracking-widest text-slate-700 dark:text-slate-300 uppercase">
                                Welcome to my universe
                            </span>
                        </motion.div>

                        {/* Staggered Name Reveal */}
                        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold font-outfit text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight flex flex-col">
                            <motion.span variants={itemVariants} className="block pb-2">
                                I'm {titleWords[0]}
                            </motion.span>
                            <motion.span variants={itemVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 animate-gradient-x bg-[length:200%_auto] pb-2">
                                {titleWords[1]}
                            </motion.span>
                        </h1>

                        {/* Dynamic Role Carousel */}
                        <motion.div variants={itemVariants} className="h-10 mb-8 relative flex items-center justify-center lg:justify-start w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentRoleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute flex items-center justify-center lg:justify-start w-full text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap"
                                >
                                    <Code2 className="w-6 h-6 mr-3 text-indigo-500" />
                                    {roles[currentRoleIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p variants={itemVariants} className="max-w-xl text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed mt-2">
                            Crafting efficient, scalable, and visually stunning digital experiences. I bring ideas to life by blending robust backend architecture with breathtaking frontend design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="relative group w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.3)] transform hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                                <MousePointerClick className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300" />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                            >
                                <span>Download CV</span>
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content with 3D Interaction */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-[1200px]"
                    >
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative w-[300px] h-[380px] md:w-[380px] md:h-[480px] cursor-pointer group"
                        >
                            {/* Backdrop pulsing aura */}
                            <div style={{ transform: "translateZ(-50px)" }} className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
                            
                            {/* Main Image Card */}
                            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-[3rem] border border-white/40 dark:border-slate-700 shadow-2xl overflow-hidden isolate">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile Photo"
                                    fill
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 300px, 380px"
                                    priority
                                />
                                {/* Glass shine overlay */}
                                <div className="absolute inset-x-0 inset-y-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'all 1.5s ease' }} />
                            </div>

                            {/* Floating Glass Badges */}
                            <div 
                                style={{ transform: "translateZ(60px)" }} 
                                className="absolute top-8 -left-8 md:-left-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 dark:border-slate-700/50 flex items-center gap-3 animate-float pointer-events-none"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <TerminalSquare className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Role</span>
                                    <span className="text-sm font-bold text-slate-800 dark:text-white">Developer</span>
                                </div>
                            </div>

                            <div 
                                style={{ transform: "translateZ(80px)" }} 
                                className="absolute bottom-12 -right-8 md:-right-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 dark:border-slate-700/50 flex items-center gap-3 animate-float delay-1000 pointer-events-none"
                            >
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                                    <Palette className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Skill</span>
                                    <span className="text-sm font-bold text-slate-800 dark:text-white">Designer</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
