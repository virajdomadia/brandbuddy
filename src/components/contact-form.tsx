"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <form className="flex flex-col gap-6 w-full max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Name" focused={focused} setFocused={setFocused} name="name" />
                <Input placeholder="Email" focused={focused} setFocused={setFocused} name="email" type="email" />
            </div>
            <Input placeholder="What are we building?" focused={focused} setFocused={setFocused} name="project" />

            <div className="relative">
                <textarea
                    placeholder="Tell us about the chaos you want to create..."
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none h-32"
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-black font-display font-bold text-xl uppercase py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-colors mt-4 group"
            >
                Send It <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </form>
    );
}

function Input({
    placeholder,
    focused,
    setFocused,
    name,
    type = "text"
}: {
    placeholder: string;
    focused: string | null;
    setFocused: (val: string | null) => void;
    name: string;
    type?: string;
}) {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
            />
            <motion.label
                initial={{ y: 0, opacity: 0.5 }}
                animate={{
                    y: focused === name ? -24 : 0,
                    opacity: focused === name ? 1 : 0.5,
                    scale: focused === name ? 0.8 : 1,
                    originX: 0
                }}
                className="absolute left-0 top-4 text-zinc-400 pointer-events-none"
            >
                {placeholder}
            </motion.label>
        </div>
    )
}
