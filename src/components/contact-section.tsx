"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
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
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                        Get In <span className="text-indigo-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">

                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-8"
                    >
                        <motion.div variants={fadeUp}>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let&apos;s talk business</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="space-y-6">
                            {[
                                { icon: <Mail className="w-6 h-6" />, label: "Email", text: "jeyaseelankomakan@gmail.com", href: "mailto:jeyaseelankomakan@gmail.com" },
                                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", text: "Komahan Jeyaseelan", href: "https://www.linkedin.com/in/komahan-jeyaseelan-72a3623a7" },
                                { icon: <Github className="w-6 h-6" />, label: "GitHub", text: "@jeyaseelan-komakan", href: "https://github.com/jeyaseelankomakan-art" },
                                { icon: <Phone className="w-6 h-6" />, label: "Phone", text: "+94 76 087 0583", href: "tel:+94760870583" },
                            ].map((info, idx) => (
                                <motion.a
                                    key={idx}
                                    variants={fadeUp}
                                    href={info.href}
                                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium">{info.label}</h4>
                                        <span className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {info.text}
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-3 bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="jeyaseelan komakan"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="jeyaseelankomakan@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className="w-full group mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:from-indigo-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : isSubmitted ? (
                                    <span>Message Sent Successfully!</span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
