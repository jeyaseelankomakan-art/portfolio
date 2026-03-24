"use client";

import { motion } from "framer-motion";
import { Laptop, Database, PenTool } from "lucide-react";

export function SkillsSection() {
    const categories = [
        {
            title: "Programming",
            icon: <Laptop className="w-6 h-6 text-indigo-500" />,
            skills: [
                { name: "Java", level: 85 },
                { name: "Python", level: 80 },
                { name: "PHP", level: 75 },
                { name: "JavaScript", level: 90 },
            ],
        },
        {
            title: "Web Development",
            icon: <Laptop className="w-6 h-6 text-cyan-500" />,
            skills: [
                { name: "HTML/CSS", level: 95 },
                { name: "MERN Stack", level: 85 },
            ],
        },
        {
            title: "Databases & Tools",
            icon: <Database className="w-6 h-6 text-emerald-500" />,
            skills: [
                { name: "MySQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "Git & GitHub", level: 90 },
            ],
        },
        {
            title: "Creative & Other",
            icon: <PenTool className="w-6 h-6 text-rose-500" />,
            skills: [
                { name: "Photoshop & Illustrator", level: 85 },
                { name: "Premiere Pro", level: 80 },
                { name: "AI Tools", level: 90 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                        My <span className="text-cyan-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A comprehensive overview of my technical expertise, ranging from core programming languages to modern web frameworks and creative tools.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-500">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
