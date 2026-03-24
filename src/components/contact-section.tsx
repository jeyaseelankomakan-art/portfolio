"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send, Sparkles } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(5);

    // Smooth scroll animations handling
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Handle countdown timer for success state
    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSubmitted && countdown > 0) {
            timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
        } else if (countdown === 0) {
            setIsSubmitted(false);
        }
        return () => clearInterval(timer);
    }, [isSubmitted, countdown]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setCountdown(5);
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setIsSubmitting(false);
            alert("Oops! Something went wrong while saving your message to the database. Please try again.");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-slate-950/80">
            {/* Ambient Background Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 backdrop-blur-md mb-6 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 uppercase">Connect With Me</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 dark:text-white mb-6"
                    >
                        Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Something Amazing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400"
                    >
                        Whether you have a wild idea, a business inquiry, or just want to connect—my inbox is always open.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto relative cursor-default">
                    {/* Glassmorphism Wrapper */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 dark:from-slate-800/40 dark:to-slate-900/10 rounded-[3rem] backdrop-blur-2xl border border-white/40 dark:border-slate-700/50 shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] -z-10 transform scale-[0.98] translate-y-2" />
                    <div className="grid lg:grid-cols-5 bg-white/40 dark:bg-slate-900/40 rounded-[3rem] backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-2xl overflow-hidden relative">
                        
                        {/* Decorative internal diagonal glow */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

                        {/* Contact Info */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:col-span-2 p-10 md:p-14 border-r border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden"
                        >
                            <motion.div variants={fadeUp} className="mb-12">
                                <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-4">Contact Information</h3>
                                <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mb-6" />
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    I am currently available for professional opportunities and freelance consulting. Feel free to reach out across any of these platforms!
                                </p>
                            </motion.div>

                            <motion.div variants={containerVariants} className="space-y-4">
                                {[
                                    { icon: <Mail className="w-5 h-5" />, label: "Email Address", text: "jeyaseelankomakan@gmail.com", href: "mailto:jeyaseelankomakan@gmail.com" },
                                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn Profile", text: "Komahan Jeyaseelan", href: "https://www.linkedin.com/in/komahan-jeyaseelan-72a3623a7" },
                                    { icon: <Github className="w-5 h-5" />, label: "GitHub Hub", text: "@jeyaseelan-komakan", href: "https://github.com/jeyaseelankomakan-art" },
                                    { icon: <Phone className="w-5 h-5" />, label: "Direct Phone", text: "+94 76 087 0583", href: "tel:+94760870583" },
                                ].map((info, idx) => (
                                    <motion.a
                                        key={idx}
                                        variants={fadeUp}
                                        whileHover={{ x: 8 }}
                                        href={info.href}
                                        target={info.href.startsWith("http") ? "_blank" : undefined}
                                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-5 p-4 rounded-2xl group hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50"
                                    >
                                        <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-indigo-500 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6 group-hover:scale-110">
                                            {info.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-0.5">{info.label}</span>
                                            <span className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {info.text}
                                            </span>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 p-10 md:p-14 relative bg-white/20 dark:bg-slate-950/20">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-2">Send me a message</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-10">Fill out the form below and I'll get back to you as soon as possible.</p>
                                
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3 group relative">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Full Name</label>
                                            <div className="relative overflow-hidden rounded-2xl">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all text-slate-900 dark:text-white peer relative z-10"
                                                    placeholder="komakan "
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left peer-focus:scale-x-100 transition-transform duration-500 z-20" />
                                            </div>
                                        </div>
                                        <div className="space-y-3 group relative">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                            <div className="relative overflow-hidden rounded-2xl">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all text-slate-900 dark:text-white peer relative z-10"
                                                    placeholder="jkomakan@gmail.com"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left peer-focus:scale-x-100 transition-transform duration-500 z-20" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 group relative">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Message</label>
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-0 transition-all text-slate-900 dark:text-white peer relative z-10 resize-none"
                                                placeholder="Tell me about your project or opportunity..."
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left peer-focus:scale-x-100 transition-transform duration-500 z-20" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className="relative group w-full overflow-hidden flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.3)] disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                                    >
                                        {/* Button Background Gradient Animation on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Transmitting...
                                                </span>
                                            ) : isSubmitted ? (
                                                <span className="group-hover:text-white transition-colors duration-300 font-semibold tracking-wide">
                                                    Message Sent Successfully! ✨ ({countdown}s)
                                                </span>
                                            ) : (
                                                <>
                                                    <span className="group-hover:text-white transition-colors duration-300">Send Message Now</span>
                                                    <Send className="w-5 h-5 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-white transition-all duration-300" />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
