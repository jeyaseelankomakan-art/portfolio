"use client";

import { Github, Linkedin, Mail } from "lucide-react";

// Custom WhatsApp SVG matching Lucide stroke style
const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16.5 16c0-1.2-.5-1.5-1.5-2-.5-.2-1-.2-1.5-.1-.2.1-.4.2-.5.4-.3.4-.6.6-1 .2a11.8 11.8 0 0 1-3-3c-.4-.4-.2-.8.2-1l.4-.5c.2-.2.3-.4.4-.6-.1-.5-.1-1-.3-1.5-.5-1-1-1.5-2.2-1.5s-1.5.5-1.5 1c0 1.2 1.5 4 4 6.5s5.2 4 6.5 4c.5 0 1-1 1-1.5z" />
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/jeyaseelankomakan-art", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/komahan-jeyaseelan-72a3623a7", label: "LinkedIn" },
        { icon: <WhatsappIcon className="w-5 h-5" />, href: "https://wa.me/94760870583", label: "WhatsApp" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:jeyaseelankomakan@gmail.com", label: "Email" },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                            Jeyaseelan Komakan
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Software Engineer & Designer
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                aria-label={link.label}
                                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm hover:shadow-md"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        &copy; {currentYear} Jeyaseelan Komakan. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <a href="#home" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Home</a>
                        <a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
