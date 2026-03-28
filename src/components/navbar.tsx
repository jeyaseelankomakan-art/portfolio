"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Track active section
            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "py-2"
                    : "py-4"
            }`}
        >
            <div className={`mx-auto max-w-6xl px-4 transition-all duration-500 ${
                isScrolled ? "px-4" : "px-6"
            }`}>
                <div className={`flex items-center justify-between transition-all duration-500 rounded-2xl px-6 py-3 ${
                    isScrolled
                        ? "bg-gray-950/70 dark:bg-gray-950/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]"
                        : "bg-transparent"
                }`}>
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleScrollTo(e, "#home")}
                        className="relative group"
                    >
                        <span className="text-xl font-bold font-outfit tracking-tight text-white">
                            J<span className="text-gradient">.</span>Komakan
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-500" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                                    activeSection === link.href.slice(1)
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {activeSection === link.href.slice(1) && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/[0.06]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                        <div className="w-px h-5 bg-white/10 mx-2" />
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="md:hidden mx-4 mt-2 bg-gray-950/90 backdrop-blur-2xl border border-white/[0.06] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-1">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                        activeSection === link.href.slice(1)
                                            ? "text-white bg-white/[0.08]"
                                            : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                                    }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
