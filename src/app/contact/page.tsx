"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
    return (
        <div className="p-4 md:p-6 flex flex-col gap-6 w-full min-h-screen">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col justify-end bg-primary rounded-3xl p-12 min-h-[200px]"
            >
                <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
                    Get In<br />Touch
                </h1>
            </motion.div>

            {/* Form Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-black border-2 border-zinc-800 rounded-3xl p-8 md:p-12 hover:scale-[1.01] transition-transform duration-500"
            >
                <div className="max-w-2xl mx-auto">
                    <p className="text-white/80 text-xl mb-12 text-center">
                        Ready to scale? Fill out the form below or email us at <span className="text-white font-bold underline decoration-white/30 underline-offset-4">thebrandsbuddy@gmail.com</span>
                    </p>
                    <ContactForm />
                </div>
            </motion.div>
        </div>
    );
}
