"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AreasPage() {
    const areas = [
        "Pocono Lake", "Blakeslee", "Jack Frost", "Big Boulder",
        "Lake Harmony", "Albrightsville", "White Haven", "Arrowhead Lake",
        "Locust Lake Village", "Emerald Lakes"
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/areas-hero.png"
                    alt="Scenic Pocono Home"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Proudly Serving the Poconos</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                            From Lake Harmony to Pocono Lake, we are the trusted cleaning partner for vacation rentals and homes in the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Map / Areas List Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Service Coverage</h2>
                            <p className="text-gray-600">
                                We primarily service Short-Term Rentals and Residential homes in these communities. <br />
                                Don't see your area? Give us a call.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {areas.map((area, index) => (
                                <motion.div
                                    key={area}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-teal-50 hover:shadow-md transition-all group"
                                >
                                    <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-teal-200 group-hover:text-teal-600 transition-colors">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold text-gray-700 group-hover:text-teal-900">{area}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-teal-900/5 rounded-3xl p-8">
                            <h3 className="font-bold text-xl text-teal-900 mb-2">Expanding Soon!</h3>
                            <p className="text-gray-600 mb-6">
                                We are constantly growing our team to reach more beautiful homes in the Pocono Mountains.
                            </p>
                            <Link href="/contact">
                                <Button>Check Availability in Your Area</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
