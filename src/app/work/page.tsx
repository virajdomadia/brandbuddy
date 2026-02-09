"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
    return (
        <div className="p-4 md:p-6 flex flex-col gap-6 w-full min-h-[80vh]">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end gap-6 bg-primary rounded-3xl p-12 min-h-[400px]"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
                        Selected<br />Work
                    </h1>
                </div>
                <p className="text-white/90 text-xl max-w-sm font-medium">
                    We're just getting started. Be our first success story.
                </p>
            </motion.div>

            {/* Empty State / Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-zinc-900/50 rounded-3xl border border-zinc-800 p-12 flex flex-col items-center justify-center text-center gap-8 min-h-[400px]"
            >
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-12 h-12 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display uppercase text-white max-w-2xl">
                    Your Brand Could Be Here.
                </h2>
                <p className="text-zinc-400 text-lg max-w-xl">
                    We are currently accepting new clients for Marketing, Development, and Branding projects. Let's build something illegal in 9 countries together.
                </p>
                <Link href="/#contact">
                    <button className="bg-accent text-black px-8 py-4 font-display font-bold uppercase rounded-full hover:bg-white transition-all hover:scale-105 shadow-xl mt-4">
                        Start Your Project
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}
