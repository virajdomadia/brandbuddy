"use client";

import { ContactForm } from "@/components/contact-form";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Logo } from "@/components/ui/logo";
import { LogoCard } from "@/components/logo-card";
import { motion } from "framer-motion";
import {
  Megaphone,
  Rocket,
  Zap,
  Globe,
  ArrowUpRight,
  Video
} from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-6 flex flex-col gap-6">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(180px,auto)]"
      >

        {/* Item 1: HERO - Pink Background */}
        <motion.div variants={item} className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-primary rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group min-h-[500px] hover:scale-[1.01] hover:-rotate-1 transition-all duration-300 shadow-2xl">
          <div className="z-10 relative flex flex-col gap-8 items-start">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.85] text-white break-words drop-shadow-sm tracking-tight">
              Scale Your<br />Brand To<br />The Moon.
            </h1>

            <button className="bg-accent text-black px-8 py-4 font-display font-bold uppercase rounded-full hover:bg-white transition-all hover:scale-105 shadow-xl">
              Book Strategy Call
            </button>
          </div>
        </motion.div>

        {/* Item 3: SERVICES - Purple Background (Matches Sidebar) */}
        {/* Item 3: SERVICES - Purple Background (Top Right) */}
        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-1 bg-secondary rounded-3xl p-8 border-none flex flex-col justify-between min-h-[240px]">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-display uppercase text-white mb-0">What<br />You Get</h2>
            <ArrowUpRight className="text-white w-6 h-6" />
          </div>

          <div className="flex flex-col gap-2">
            <ServiceItem icon={<Megaphone className="w-5 h-5 text-white" />} title="Marketing" />
            <ServiceItem icon={<Globe className="w-5 h-5 text-white" />} title="Development" />
            <ServiceItem icon={<Rocket className="w-5 h-5 text-white" />} title="Branding" />
          </div>
        </motion.div>

        {/* Item 4: LOGO CARD - Sticker Pattern (Bottom Right) */}
        <motion.div variants={item} className="col-span-1 row-span-1">
          <LogoCard className="h-full min-h-[240px]" />
        </motion.div>

        {/* Item 5: CONTACT FORM SECTION */}
        <motion.div variants={item} className="col-span-1 md:col-span-3 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />

          <div className="flex-1 z-10">
            <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-6">Let's Talk<br /><span className="text-zinc-600">Business.</span></h2>
            <p className="text-zinc-400 text-lg max-w-md">Ready to start a project? Fill out the form and we'll get back to you within 24 hours.</p>

            <div className="mt-12 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-accent">@</span>
                hello@brandbaby.com
              </div>
            </div>
          </div>

          <div className="flex-1 z-10 border-l border-zinc-800 pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0">
            <ContactForm />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

function ServiceItem({ icon, title }: { icon: any, title: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors">
      {icon}
      <h3 className="text-white font-display uppercase text-xl font-bold">{title}</h3>
    </div>
  )
}
