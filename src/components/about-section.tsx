"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, BookOpen } from "lucide-react";

export function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const, staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                            About <span className="text-indigo-500">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text / Bio */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                I am a passionate <strong className="text-slate-900 dark:text-white font-medium">Software Engineer</strong> interested in
                                developing modern web applications and system solutions. I enjoy working with full-stack technologies, databases, and AI tools.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                My goal is to build efficient, scalable, and user-friendly digital solutions that solve real-world problems and provide an exceptional user experience.
                            </p>

                            <div className="pt-4">
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold font-outfit text-lg">Education</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">ICT &ndash; Sri Lanka German Training Institute</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual / Infographic */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <Code2 className=" text-indigo-500 w-8 h-8 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Full Stack</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Building scalable web applications from front to back.</p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow transform md:translate-y-8">
                                <BookOpen className="text-cyan-500 w-8 h-8 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Continuous Learning</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Always exploring new AI tools and modern frameworks.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
