"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Check, Users, Heart, Target, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-50/50"></div>
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center rounded-full border border-teal-100 bg-white px-3 py-1 text-sm font-medium text-teal-700 mb-6 shadow-sm">
                            <Users className="mr-2 h-4 w-4" />
                            <span>Meet the Team</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
                            A Cleaner Home, <br />
                            <span className="text-teal-600">A Peace of Mind</span>.
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We are My Fair Lady Cleaning. Locally owned, women-operated, and dedicated to bringing the sparkle back to the Poconos.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                                <Image
                                    src="/jessilyn-portrait.jpg"
                                    alt="Jessilyn, Owner of My Fair Lady Cleaning"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            {/* Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
                                <p className="font-serif text-3xl font-bold text-teal-600 mb-1">10+</p>
                                <p className="text-sm text-gray-600 font-medium">Years of Combined Experience</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Built on Trust & Details.</h2>
                            <h3 className="text-xl text-teal-700 font-medium mb-6">Hi, I'm Jessilyn.</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                I started My Fair Lady Cleaning with a simple mission: to provide a cleaning service that I would trust in my own home. In the vacation rental market, cleanliness isn't just a luxury—it's the backbone of your business.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We treat every property like it's our own. From the neatly folded towels to the streak-free windows, we obsess over the details so you don't have to. We are proud to serve Pocono Lake and the surrounding communities.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: Heart, label: "Pet Friendly" },
                                    { icon: ShieldCheck, label: "Insured (Harborway)" },
                                    { icon: Users, label: "Vetted Staff" },
                                    { icon: Sparkles, label: "Eco Solutions" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-semibold text-gray-900">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg">Join Our Family</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Values */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-900/50"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-serif mb-6">Our Core Values</h2>
                        <p className="text-teal-100 text-lg">
                            It's not just about cleaning. It's about integrity, reliability, and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                title: "Reliability",
                                desc: "We show up. On time, every time. You can count on us for your tight turnover windows.",
                                icon: Target
                            },
                            {
                                title: "Consistency",
                                desc: "We use standardized checklists to ensure the same high quality of clean, visit after visit.",
                                icon: Check
                            },
                            {
                                title: "Integrity",
                                desc: "We do the right thing, even when no one is watching. Honesty is the foundation of our work.",
                                icon: Heart
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mx-auto mb-6 text-teal-300">
                                    <value.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif">{value.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
