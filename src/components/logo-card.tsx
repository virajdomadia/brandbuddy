"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LogoCard({ className }: { className?: string }) {
    // Creating a 3x4 grid of logos for the pattern
    const rows = [1, 2, 3, 4];
    const cols = [1, 2, 3];

    return (
        <div className={cn("bg-zinc-950 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center min-h-[280px] border border-zinc-900 group", className)}>
            <div className="absolute inset-0 grid grid-cols-3 gap-8 p-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500 rotate-12 scale-125">
                {rows.map((row) => (
                    cols.map((col) => (
                        <div key={`${row}-${col}`} className="flex flex-col items-center">
                            <span className={cn(
                                "font-display font-bold text-4xl uppercase leading-[0.85] text-zinc-800 select-none",
                                // Randomly color some items pink or yellow for the "chaos" look
                                (row + col) % 5 === 0 ? "text-primary" :
                                    (row * col) % 4 === 0 ? "text-accent" : "text-zinc-800"
                            )}>
                                BRANDS<br />BUDDY
                            </span>
                        </div>
                    ))
                ))}
            </div>

            {/* Center Piece */}
            <div className="z-10 bg-black/80 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                <span className="font-display font-bold text-5xl uppercase leading-[0.85] text-white">
                    BRANDS<br />BUDDY
                    <span className="w-3 h-3 bg-accent rounded-full ml-1 inline-block" />
                </span>
            </div>
        </div>
    );
}
