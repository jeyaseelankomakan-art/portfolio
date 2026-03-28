"use client";

import { motion } from "framer-motion";
import { Code, Layout, Database, Sparkles, Image as ImageIcon, Video, Briefcase } from "lucide-react";

export function ExperienceSection() {
    const experiences = [
        {
            title: "Software Development",
            icon: <Code className="w-5 h-5" />,
            gradient: "from-blue-500 to-indigo-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400",
            description: "Building scalable and robust software applications with clean architecture.",
        },
        {
            title: "Full Stack Web Dev",
            icon: <Layout className="w-5 h-5" />,
            gradient: "from-indigo-500 to-violet-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-400",
            description: "Creating end-to-end web applications with modern tech stacks.",
        },
        {
            title: "UI/UX Design",
            icon: <Sparkles className="w-5 h-5" />,
            gradient: "from-pink-500 to-rose-500",
            iconBg: "bg-pink-500/10",
            iconColor: "text-pink-400",
            description: "Designing intuitive and visually stunning user interfaces.",
        },
        {
            title: "Database Architecture",
            icon: <Database className="w-5 h-5" />,
            gradient: "from-emerald-500 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-400",
            description: "Architecting efficient, normalized, and secure database structures.",
        },
        {
            title: "AI-Powered Workflows",
            icon: <Briefcase className="w-5 h-5" />,
            gradient: "from-amber-500 to-yellow-500",
            iconBg: "bg-amber-500/10",
            iconColor: "text-amber-400",
            description: "Leveraging AI to accelerate development and enhance productivity.",
        },
        {
            title: "Graphic Design",
            icon: <ImageIcon className="w-5 h-5" />,
            gradient: "from-purple-500 to-fuchsia-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            description: "Creating professional graphics, brand assets, and visual content.",
        },
        {
            title: "Video Editing",
            icon: <Video className="w-5 h-5" />,
            gradient: "from-rose-500 to-red-500",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-400",
            description: "Producing high-quality video content with professional editing.",
        },
    ];

    return (
        <section id="experience" className="relative py-32 overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[130px]" />

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
                        What I Do
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6">
                        Experience & <span className="text-gradient">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline / Grid */}
                <div className="max-w-5xl mx-auto">
                    {/* Education Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-indigo-500/[0.06] to-cyan-500/[0.06] border border-white/[0.06] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/[0.08] flex items-center justify-center shrink-0">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold font-outfit text-white mb-1">
                                    Diploma in Information & Communication Technology
                                </h3>
                                <p className="text-slate-400">
                                    Sri Lanka German Training Institute — Comprehensive diploma covering software 
                                    engineering, database management, networking, and system design.
                                </p>
                            </div>
                            <div className="shrink-0 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-bold text-indigo-300 uppercase tracking-wider">
                                ICT
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.06 }}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 relative overflow-hidden cursor-default"
                            >
                                {/* Hover gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className={`w-14 h-14 rounded-2xl ${exp.iconBg} flex items-center justify-center ${exp.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {exp.icon}
                                    </div>
                                    <h3 className="text-sm font-bold font-outfit text-white mb-2">{exp.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
