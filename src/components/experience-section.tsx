"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Layout, Database, Sparkles, Image as ImageIcon, Video } from "lucide-react";

export function ExperienceSection() {
    const experiences = [
        { title: "Software Development", icon: <Code className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", description: "Building scalable and robust software applications." },
        { title: "Full Stack Web Development", icon: <Layout className="w-5 h-5" />, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30", description: "Creating end-to-end web applications with modern tech." },
        { title: "UI Design", icon: <Sparkles className="w-5 h-5" />, color: "text-pink-500", bg: "bg-pink-100 dark:bg-pink-900/30", description: "Designing intuitive and engaging user interfaces." },
        { title: "Database Design", icon: <Database className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", description: "Architecting efficient and secure database structures." },
        { title: "AI Tool Usage", icon: <Briefcase className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30", description: "Leveraging artificial intelligence to accelerate development." },
        { title: "Graphic Design", icon: <ImageIcon className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", description: "Creating visually appealing graphics and brand assets." },
        { title: "Video Editing", icon: <Video className="w-5 h-5" />, color: "text-rose-500", bg: "bg-rose-100 dark:bg-rose-900/30", description: "Producing high-quality video content and animations." },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                        Experience & <span className="text-pink-500">Learning</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="group p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${exp.bg} ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                                {exp.icon}
                            </div>
                            <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2">
                                {exp.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
