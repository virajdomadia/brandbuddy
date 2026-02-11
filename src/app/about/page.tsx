"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="p-4 md:p-6 flex flex-col gap-6 w-full">
            {/* Header - Pink Block */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end gap-6 bg-primary rounded-3xl p-12 min-h-[300px]"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
                        Who<br />We Are
                    </h1>
                </div>
                <p className="text-white/90 text-xl max-w-sm font-medium">
                    A chaotic collective of creatives, coders, and strategists.
                </p>
            </motion.div>

            {/* Content Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* Story Block */}
                <motion.div
                    variants={item}
                    className="bg-accent text-black rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-center"
                >
                    <h2 className="text-4xl font-display uppercase mb-6">The Anti-Agency</h2>
                    <div className="space-y-6 text-black/80 text-lg leading-relaxed font-medium">
                        <p>
                            We started BrandsBuddy because we were tired of "safe". Safe design, safe code, safe marketing. Safe doesn't stop scrolling. Safe doesn't go viral.
                        </p>
                        <p>
                            We exist to disrupt. To take brands from "blending in" to "impossible to ignore". We combine bleeding-edge technology with raw, unfiltered creativity.
                        </p>
                        <p>
                            Our team is distributed, diverse, and deadly serious about growth. We don't care about awards. We care about your ROI.
                        </p>
                    </div>
                </motion.div>

                {/* Stats / Philosophy */}
                <div className="flex flex-col gap-4">
                    <motion.div variants={item} className="bg-secondary rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center">
                        <span className="text-6xl font-display font-bold text-white mb-2">100%</span>
                        <span className="text-white/80 uppercase tracking-widest font-bold">Chaos</span>
                    </motion.div>
                    <motion.div variants={item} className="bg-accent rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center">
                        <span className="text-6xl font-display font-bold text-black mb-2">0%</span>
                        <span className="text-black/80 uppercase tracking-widest font-bold">Boring</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
