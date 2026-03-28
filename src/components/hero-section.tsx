"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Code2, Sparkles, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "Java Developer",
        "System Designer",
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Ambient Aurora Orbs */}
            <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[160px] animate-aurora" />
            <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-aurora animation-delay-2000" />
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[180px] animate-aurora animation-delay-4000" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 pt-24 pb-20">
                    
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Status Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                            </span>
                            <span className="text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
                                Available for Opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold font-outfit text-white leading-[1.05] tracking-tight mb-2"
                        >
                            <span className="block">Jeyaseelan</span>
                            <span className="block text-gradient mt-1">Komakan</span>
                        </motion.h1>

                        {/* Typewriter Role */}
                        <motion.div
                            variants={itemVariants}
                            className="h-12 mb-6 flex items-center gap-3 mt-4"
                        >
                            <Code2 className="w-5 h-5 text-indigo-400 shrink-0" />
                            <span className="text-xl md:text-2xl font-medium text-slate-400 font-outfit">
                                {displayText}
                                <span className="inline-block w-[3px] h-6 bg-indigo-400 ml-1 animate-pulse" />
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl text-slate-400 mb-10 text-lg leading-relaxed"
                        >
                            Building smart systems with clean code. I craft efficient, scalable 
                            solutions by blending robust backend architecture with intuitive 
                            frontend experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-500 hover:-translate-y-1"
                            >
                                {/* Animated gradient bg */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-[length:200%_100%] animate-gradient-x rounded-2xl" />
                                <div className="absolute inset-[1px] bg-gray-950 rounded-[calc(1rem-1px)] group-hover:bg-transparent transition-colors duration-500" />
                                <span className="relative z-10 group-hover:text-white transition-colors">
                                    View Projects
                                </span>
                                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
                            >
                                <span>Download CV</span>
                                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]"
                        >
                            {[
                                { value: "5+", label: "Projects Built" },
                                { value: "3+", label: "Tech Stacks" },
                                { value: "100%", label: "Passion Driven" },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center lg:text-left">
                                    <div className="text-2xl font-bold font-outfit text-white">{stat.value}</div>
                                    <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image with 3D Interactive Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                        className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                        style={{ perspective: 1200 }}
                    >
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] cursor-pointer group"
                        >
                            {/* Glow Backdrop */}
                            <div
                                style={{ transform: "translateZ(-50px)" }}
                                className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 rounded-[2.5rem] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-glow-pulse"
                            />

                            {/* Main Image Card */}
                            <div className="relative w-full h-full rounded-[2.5rem] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                                {/* Gradient overlay at top */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/60 z-10 pointer-events-none" />
                                
                                <Image
                                    src="/profile.jpg"
                                    alt="Jeyaseelan Komakan - Software Developer"
                                    fill
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 280px, 340px"
                                    priority
                                />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer" />
                                </div>
                            </div>

                            {/* Floating Badge - Code */}
                            <motion.div
                                style={{ transform: "translateZ(60px)" }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 -left-6 md:-left-10 bg-gray-950/80 backdrop-blur-2xl p-4 rounded-2xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex items-center gap-3 pointer-events-none"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                    <Code2 className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Role</span>
                                    <span className="text-sm font-bold text-white">Developer</span>
                                </div>
                            </motion.div>

                            {/* Floating Badge - Sparkles */}
                            <motion.div
                                style={{ transform: "translateZ(80px)" }}
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 -right-6 md:-right-10 bg-gray-950/80 backdrop-blur-2xl p-4 rounded-2xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex items-center gap-3 pointer-events-none"
                            >
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Focus</span>
                                    <span className="text-sm font-bold text-white">Clean Code</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
