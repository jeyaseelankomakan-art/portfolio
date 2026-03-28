"use client";

import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import React from "react";

interface Skill {
    name: string;
    level: number;
    icon: string;
    color: string;
    glow: string;
}

const skillCategories = [
    {
        title: "Languages & Core",
        skills: [
            { name: "Java (Core + Swing)", level: 88, icon: "☕", color: "from-orange-500 to-red-500", glow: "rgba(249,115,22,0.15)" },
            { name: "JavaScript", level: 85, icon: "⚡", color: "from-yellow-400 to-amber-500", glow: "rgba(250,204,21,0.15)" },
            { name: "Python", level: 78, icon: "🐍", color: "from-blue-400 to-cyan-400", glow: "rgba(96,165,250,0.15)" },
            { name: "PHP", level: 75, icon: "🔮", color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.15)" },
        ],
    },
    {
        title: "Web & Frameworks",
        skills: [
            { name: "HTML / CSS", level: 92, icon: "🌐", color: "from-cyan-400 to-blue-500", glow: "rgba(34,211,238,0.15)" },
            { name: "React / Next.js", level: 82, icon: "⚛️", color: "from-sky-400 to-indigo-500", glow: "rgba(56,189,248,0.15)" },
            { name: "REST APIs", level: 85, icon: "🔗", color: "from-emerald-400 to-teal-500", glow: "rgba(52,211,153,0.15)" },
            { name: "UI/UX Design", level: 80, icon: "🎨", color: "from-pink-400 to-rose-500", glow: "rgba(244,114,182,0.15)" },
            { name: "MERN Stack", level: 88, icon: "💻", color: "from-green-400 to-emerald-500", glow: "rgba(16,185,129,0.15)" },
        ],
    },
    {
        title: "Tools & Infrastructure",
        skills: [
            { name: "MySQL", level: 87, icon: "🗄️", color: "from-blue-500 to-indigo-500", glow: "rgba(99,102,241,0.15)" },
            { name: "Git & GitHub", level: 90, icon: "📦", color: "from-slate-400 to-slate-600", glow: "rgba(148,163,184,0.15)" },
            { name: "System Design", level: 82, icon: "🏗️", color: "from-amber-400 to-orange-500", glow: "rgba(251,191,36,0.15)" },
            { name: "AI Tools", level: 88, icon: "🤖", color: "from-purple-400 to-indigo-500", glow: "rgba(168,85,247,0.15)" },
        ],
    },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useTransform(mouseX, (v) => `${v}px`);
    const spotlightY = useTransform(mouseY, (v) => `${v}px`);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -3 }}
            onMouseMove={handleMouse}
            className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden cursor-default"
        >
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useMotionTemplate`radial-gradient(250px circle at ${spotlightX} ${spotlightY}, ${skill.glow}, transparent 80%)`,
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm truncate">{skill.name}</h4>
                    </div>
                    <span className="text-xs font-bold text-slate-500 tabular-nums">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 + index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="relative py-32 overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                        Technical Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit built through hands-on experience with real-world projects and continuous learning.
                    </p>
                </motion.div>

                {/* Skills Grid by Category */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 pl-1">
                                {category.title}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <SkillCard key={idx} skill={skill} index={idx} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
