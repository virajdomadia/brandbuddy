"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Globe, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="about-page bg-cream min-h-screen">
            {/* MAGAZINE HERO */}
            <section className="about-hero">
                <div className="about-hero-left">
                    <div className="vertical-label">STUDIO PROFILE — 2025</div>
                    <div className="hero-statement">
                        <h1 className="about-title scale-in text-[10vw]">
                            THE<br />
                            <span className="text-yellow-stroke">BRANDS BUDDY</span>
                        </h1>
                    </div>
                    <div className="hero-subtext max-w-xs text-sm font-bold uppercase tracking-widest text-muted">
                        BUILDING THE NEXT GENERATION OF DIGITAL-FIRST BRANDS.
                    </div>
                </div>
                <div className="about-hero-right">
                    <div className="text-vertical font-heading text-[15vw] leading-none select-none opacity-20">
                        EST. 2025
                    </div>
                </div>
            </section>

            {/* EDITORIAL STORY */}
            <section className="story-grid">
                <div className="story-main">
                    "We didn't set out to build another agency. We set out to build a <span className="text-ink">better partner</span> for founders who are moving too fast for the status quo."
                </div>
                <div className="col-start-2 col-span-10 lg:col-start-6 lg:col-span-6 mt-12">
                    <div className="text-xl text-muted leading-relaxed space-y-8">
                        <p>
                            At BrandsBuddy, we believe that the best brands aren't just designed—they're engineered. 
                            We combine the raw creativity of a design studio with the technical precision of a 
                            software house.
                        </p>
                        <p>
                            Our mission is simple: to eliminate the friction between a great idea and a 
                            successful market presence. We focus on the high-impact levers that actually 
                            move the needle for your business.
                        </p>
                        <div className="pt-8 border-t border-border flex items-center gap-4">
                            <span className="dot-breathe w-3 h-3 bg-lime rounded-full"></span>
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Currently accepting selective partnerships</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDER EDITORIAL ROWS */}
            <section className="founder-editorial">
                {/* Saloni Borade */}
                <div className="profile-row group">
                    <div className="profile-name-block bg-white hover:bg-lime transition-colors duration-700">
                        <div className="vertical-label mb-8">FOUNDER</div>
                        <h2 className="profile-name">
                            SALONI<br />
                            <span className="stroke-text">BORADE</span>
                        </h2>
                        <div className="profile-role">Digital Marketing Strategist</div>
                    </div>
                    <div className="profile-detail-block flex flex-col justify-between">
                        <div className="detail-text text-xl leading-relaxed text-muted mb-12">
                            Saloni is the architectural force behind our growth systems. She specializes 
                            in turning complex brand visions into high-converting marketing ecosystems 
                            that resonate with real people. Her approach is rooted in data but driven 
                            by human psychology.
                        </div>
                        <div className="detail-footer flex gap-8">
                            <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-lime transition-colors">
                                <Linkedin size={16} /> LINKEDIN
                            </a>
                            <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-lime transition-colors">
                                <Instagram size={16} /> INSTAGRAM
                            </a>
                        </div>
                    </div>
                </div>

                {/* Viraj Domadia */}
                <div className="profile-row group">
                    <div className="profile-name-block bg-ink text-white">
                        <div className="vertical-label mb-8 text-white/30">CO-FOUNDER</div>
                        <h2 className="profile-name">
                            VIRAJ<br />
                            <span className="stroke-text">DOMADIA</span>
                        </h2>
                        <div className="profile-role text-white/50">Lead Web Engineer</div>
                    </div>
                    <div className="profile-detail-block flex flex-col justify-between">
                        <div className="detail-text text-xl leading-relaxed text-muted mb-12">
                            Viraj leads the studio's technical output. He is obsessed with modern web 
                            performance and building digital products that are as stable as they are 
                            stunning. At BrandsBuddy, he ensures that every line of code serves the 
                            overarching brand strategy.
                        </div>
                        <div className="detail-footer flex gap-8">
                            <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-lime transition-colors">
                                <Linkedin size={16} /> LINKEDIN
                            </a>
                            <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-lime transition-colors">
                                <Globe size={16} /> PORTFOLIO
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL BLEED CTA */}
            <section className="about-cta-full">
                <h2 className="uppercase">READY TO<br /><span className="serif italic lowercase text-white">start?</span></h2>
                <div className="flex justify-center">
                    <a href="/#packages" className="btn-primary" style={{ background: 'var(--ink)', color: 'white', padding: '2vw 5vw', fontSize: '1.5rem' }}>
                        WORK WITH US ↓
                    </a>
                </div>
            </section>
        </main>
    );
}


