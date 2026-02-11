"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4 bg-black sticky top-0 z-50 border-b border-zinc-900">
                <Logo size="small" />
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-accent p-2 rounded-lg text-black hover:bg-white transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black z-[100] flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Logo size="default" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-zinc-900 p-2 rounded-full text-white hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-display uppercase font-bold text-white hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <button className="w-full py-6 bg-accent text-black font-display font-bold text-2xl uppercase rounded-xl flex justify-between items-center px-6 hover:scale-[1.02] transition-transform">
                                    Start Project
                                    <ArrowRight className="w-8 h-8" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
