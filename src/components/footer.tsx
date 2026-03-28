"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16.5 16c0-1.2-.5-1.5-1.5-2-.5-.2-1-.2-1.5-.1-.2.1-.4.2-.5.4-.3.4-.6.6-1 .2a11.8 11.8 0 0 1-3-3c-.4-.4-.2-.8.2-1l.4-.5c.2-.2.3-.4.4-.6-.1-.5-.1-1-.3-1.5-.5-1-1-1.5-2.2-1.5s-1.5.5-1.5 1c0 1.2 1.5 4 4 6.5s5.2 4 6.5 4c.5 0 1-1 1-1.5z" />
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    const socialLinks = [
        { icon: <Github className="w-4 h-4" />, href: "https://github.com/jeyaseelankomakan-art", label: "GitHub" },
        { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/komahan-jeyaseelan-72a3623a7", label: "LinkedIn" },
        { icon: <WhatsappIcon className="w-4 h-4" />, href: "https://wa.me/94760870583", label: "WhatsApp" },
        { icon: <Mail className="w-4 h-4" />, href: "mailto:jeyaseelankomakan@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative border-t border-white/[0.04] py-12 bg-gray-950/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo / Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold font-outfit text-white mb-1">
                            Jeyaseelan Komakan
                        </h3>
                        <p className="text-xs text-slate-500 tracking-wider uppercase">
                            Software Engineer
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                aria-label={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-600">
                        &copy; {currentYear} Jeyaseelan Komakan. All Rights Reserved<Link href="/admin/messages" className="cursor-text text-slate-600 hover:text-slate-600">.</Link>
                    </p>
                    <div className="flex items-center gap-6 text-xs text-slate-600">
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-indigo-400 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
