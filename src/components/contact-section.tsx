"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send, Sparkles, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(5);

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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
            alert("Something went wrong. Please try again.");
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            text: "jeyaseelankomakan@gmail.com",
            href: "mailto:jeyaseelankomakan@gmail.com",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            text: "Komahan Jeyaseelan",
            href: "https://www.linkedin.com/in/komahan-jeyaseelan-72a3623a7",
        },
        {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            text: "@jeyaseelan-komakan",
            href: "https://github.com/jeyaseelankomakan-art",
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            text: "+94 76 087 0583",
            href: "tel:+94760870583",
        },
    ];

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] animate-aurora" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] animate-aurora animation-delay-2000" />
            <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] animate-aurora animation-delay-4000" />

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
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6">
                        Let&apos;s Build{" "}
                        <span className="text-gradient">Something Amazing</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
                        Whether you have a project idea, a business inquiry, or just want to connect — my inbox is always open.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden">
                        {/* Glass Background */}
                        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl" />
                        <div className="absolute inset-0 border border-white/[0.06] rounded-[2.5rem]" />
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/[0.03] via-transparent to-cyan-500/[0.03] pointer-events-none" />

                        <div className="relative grid lg:grid-cols-5">
                            {/* Contact Info Panel */}
                            <div className="lg:col-span-2 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                                <h3 className="text-2xl font-bold font-outfit text-white mb-3">
                                    Contact Information
                                </h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mb-6" />
                                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                                    Available for professional opportunities and freelance consulting. Feel free to reach out!
                                </p>

                                <div className="space-y-3">
                                    {contactInfo.map((info, idx) => (
                                        <motion.a
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + idx * 0.08 }}
                                            whileHover={{ x: 6 }}
                                            href={info.href}
                                            target={info.href.startsWith("http") ? "_blank" : undefined}
                                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.04] transition-all duration-300"
                                        >
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] text-indigo-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 group-hover:scale-105">
                                                {info.icon}
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                                    {info.label}
                                                </span>
                                                <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                                                    {info.text}
                                                </span>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Form Panel */}
                            <div className="lg:col-span-3 p-10 md:p-14">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                                        Send a Message
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-10">
                                        Fill out the form below and I&apos;ll get back to you as soon as possible.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="contact-name"
                                                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        id="contact-name"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, name: e.target.value })
                                                        }
                                                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-slate-600 text-sm"
                                                        placeholder="Your name"
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="contact-email"
                                                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="relative group">
                                                    <input
                                                        type="email"
                                                        id="contact-email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, email: e.target.value })
                                                        }
                                                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-slate-600 text-sm"
                                                        placeholder="your@email.com"
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="contact-message"
                                                className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
                                            >
                                                Message
                                            </label>
                                            <div className="relative group">
                                                <textarea
                                                    id="contact-message"
                                                    required
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, message: e.target.value })
                                                    }
                                                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-white placeholder-slate-600 text-sm resize-none"
                                                    placeholder="Tell me about your project or opportunity..."
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 origin-left group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting || isSubmitted}
                                            className="group relative w-full overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                                        >
                                            {/* Gradient border background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-xl" />
                                            <div className="absolute inset-[1px] bg-gray-950 rounded-[calc(0.75rem-1px)] group-hover:bg-gray-900 transition-colors duration-500" />

                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <svg
                                                            className="animate-spin h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : isSubmitted ? (
                                                    <span className="font-semibold">
                                                        ✨ Message Sent! ({countdown}s)
                                                    </span>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
