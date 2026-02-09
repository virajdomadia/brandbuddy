"use client";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Sidebar({ className }: { className?: string }) {
    const links = [
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <aside
            className={cn(
                "hidden md:flex flex-col justify-between h-screen sticky top-0 bg-secondary p-8 overscroll-contain rounded-3xl m-4 ml-6 h-[calc(100vh-32px)] border-none",
                className
            )}
        >
            {/* Top: Logo & Nav */}
            <div className="flex flex-col gap-12">
                <Logo size="default" />

                <nav className="flex flex-col gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-display font-bold text-white uppercase tracking-wider hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Bottom: CTA */}
            <div className="flex flex-col gap-6">
                <button className="w-full py-4 bg-accent text-black font-display font-bold text-xl uppercase tracking-wide rounded-xl hover:bg-white transition-colors flex justify-between items-center px-6">
                    Start Project
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </aside>
    );
}
