"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Rocket, Target } from "lucide-react";

export function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    const highlights = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Problem Solver",
            description: "Analytical thinker who thrives on decomposing complex challenges into elegant, maintainable solutions.",
            color: "from-indigo-500 to-purple-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-400",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "AI-Powered Development",
            description: "Leveraging cutting-edge AI tools to accelerate development cycles and deliver solutions 3x faster.",
            color: "from-cyan-500 to-blue-500",
            iconBg: "bg-cyan-500/10",
            iconColor: "text-cyan-400",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Rapid Builder",
            description: "Full-stack capability from database design to polished UI — I ship complete systems, not just code.",
            color: "from-purple-500 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Quality Focused",
            description: "Clean code architecture, thorough testing, and attention to detail in every line I write.",
            color: "from-emerald-500 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-400",
        },
    ];

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                            Get to know me
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Bio Column */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                I am a <strong className="text-white font-semibold">Software Engineer</strong> from 
                                Sri Lanka with a deep passion for building robust, production-grade systems. My expertise 
                                spans from <strong className="text-white font-semibold">Java desktop applications</strong> to 
                                modern <strong className="text-white font-semibold">full-stack web development</strong>.
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                I approach every project with an engineering mindset — writing clean, maintainable code 
                                while leveraging AI tools to push the boundaries of what&apos;s possible in modern 
                                software development. My goal is to create digital solutions that are not just 
                                functional, but genuinely impactful.
                            </p>

                            {/* Education Badge */}
                            <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold font-outfit text-white text-lg">Diploma in ICT</h4>
                                        <p className="text-sm text-slate-400">Sri Lanka German Training Institute</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Highlights Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((h, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 relative overflow-hidden"
                                >
                                    {/* Hover gradient glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                                    
                                    <div className={`w-12 h-12 rounded-xl ${h.iconBg} flex items-center justify-center ${h.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {h.icon}
                                    </div>
                                    <h3 className="text-base font-bold font-outfit text-white mb-2">{h.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{h.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
