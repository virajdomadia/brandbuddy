"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, Rocket, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Megaphone className="w-12 h-12 text-black" />,
        title: "Marketing",
        description: "Data-driven campaigns that scale revenue, not just vanity metrics.",
        features: ["PPC & Paid Social", "SEO & Content Strategy", "Email Marketing Automation", "Conversion Rate Optimization"],
        color: "bg-accent text-black", // Yellow
        featureColor: "text-black/70",
        checkColor: "bg-black/10 text-black"
    },
    {
        icon: <Globe className="w-12 h-12 text-white" />,
        title: "Development",
        description: "High-performance websites and apps built for speed and conversion.",
        features: ["Next.js & React Web Apps", "Shopify & E-commerce", "WebGL & 3D Experiences", "Headless CMS Integration"],
        color: "bg-secondary text-white", // Purple
        featureColor: "text-white/80",
        checkColor: "bg-white/10 text-white"
    },
    {
        icon: <Rocket className="w-12 h-12 text-white" />,
        title: "Branding",
        description: "Visual identities that cut through the noise and build cult followings.",
        features: ["Logo & Identity Design", "Brand Strategy & Positioning", "Motion Design Systems", "Packaging & Print Design"],
        color: "bg-primary text-white", // Pink
        featureColor: "text-white/80",
        checkColor: "bg-white/10 text-white"
    }
];

export default function ServicesPage() {
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
            {/* Header - Purple Block */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end gap-6 bg-secondary rounded-3xl p-12 min-h-[300px]"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
                        What<br />We Do
                    </h1>
                </div>
                <p className="text-white/90 text-xl max-w-sm font-medium">
                    Full-service digital growth for brands that want to dominate.
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className={`${service.color} rounded-3xl p-8 flex flex-col group min-h-[400px] hover:scale-[1.02] hover:-rotate-1 transition-all duration-300 shadow-xl border border-transparent`}
                    >
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-300">
                            {service.icon}
                        </div>

                        <h2 className="text-4xl font-display uppercase mb-4">{service.title}</h2>
                        <p className={`${service.featureColor} mb-8 text-lg`}>{service.description}</p>

                        <ul className="flex flex-col gap-3 mt-auto">
                            {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className={`flex items-center gap-3 ${service.featureColor}`}>
                                    <div className={`w-6 h-6 rounded-full ${service.checkColor} flex items-center justify-center shrink-0`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Footer */}
            <Link href="/#contact">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-accent rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left group cursor-pointer"
                >
                    <div>
                        <h3 className="text-4xl font-display uppercase text-black mb-2">Ready to scale?</h3>
                        <p className="text-black/80 font-medium text-lg">Stop leaving money on the table.</p>
                    </div>
                    <div className="bg-black text-white px-8 py-4 font-display font-bold uppercase rounded-full group-hover:bg-white group-hover:text-black transition-all group-hover:scale-105 shadow-xl flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
