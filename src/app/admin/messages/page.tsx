"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Inbox, Trash2, Calendar, User, ArrowLeft } from "lucide-react";

export default function AdminMessagesPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [messages, setMessages] = useState<any[]>([]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data);
                setIsAuthenticated(true);
            } else {
                setError("Incorrect password. Access denied.");
            }
        } catch (err) {
            setError("Server error.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;

        try {
            const response = await fetch("/api/admin/messages", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password, id }),
            });

            if (response.ok) {
                setMessages(messages.filter((msg) => msg.id !== id));
            } else {
                alert("Failed to delete message. Incorrect password or server error.");
            }
        } catch (err) {
            alert("Error connecting to server to delete message.");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/50 dark:border-slate-800 shadow-2xl relative z-10"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-500">
                            <Lock className="w-8 h-8" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-2 font-outfit">Admin Access</h1>
                    <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Enter the master password to view messages.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter secret password..."
                                className="w-full px-5 py-4 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white text-center tracking-widest"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center font-medium animate-pulse">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex justify-center items-center gap-2"
                        >
                            {isLoading ? "Verifying..." : "Unlock Dashboard"}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white font-outfit mb-2 flex items-center gap-3">
                            <Inbox className="text-indigo-500" />
                            Message Inbox
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">Manage and read all messages sent from your portfolio contact form.</p>
                    </div>
                    <a
                        href="/"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </a>
                </div>

                {messages.length === 0 ? (
                    <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl p-16 text-center shadow-sm">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inbox is empty</h3>
                        <p className="text-slate-500 dark:text-slate-400">You haven't received any messages yet. They will appear here!</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-xl uppercase">
                                            {msg.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                {msg.name}
                                            </h3>
                                            <a href={`mailto:${msg.email}`} className="text-indigo-500 hover:underline text-sm flex items-center gap-1">
                                                <Mail className="w-3 h-3" /> {msg.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(msg.createdAt).toLocaleString()}
                                        </div>
                                        <button
                                            onClick={() => handleDelete(msg.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-colors cursor-pointer"
                                            title="Delete message"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                                    <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                                        {msg.message}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
