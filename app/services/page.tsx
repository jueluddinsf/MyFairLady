"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Check, Calendar, ShieldCheck, Sparkles, Building2, Home, Truck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-teal-50/50 py-20 lg:py-32">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
                            Our Cleaning <span className="text-teal-600">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Professional, reliable, and thorough cleaning solutions tailored to your specific needs. From vacation rentals to your forever home, we handle it all.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </section>

            {/* Service 1: Short-Term Rentals */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10">
                                <Image
                                    src="/bedroom-real.jpg"
                                    alt="Pristine Airbnb Bedroom"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
                                <p className="font-serif text-xl font-bold text-gray-900 mb-2">5-Star Ready</p>
                                <p className="text-sm text-gray-600">We ensure every guest walks into a "wow" experience.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                                <Building2 className="h-4 w-4" />
                                <span>Short-Term Rentals</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
                                Airbnb & Vacation Rental Turnovers
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We understand that a 5-star review starts with a spotless home. Our turnover specialists are trained to meet Superhost standards, ensuring your property is hotel-ready for every guest. We don't just clean; we inspect, restock, and stage your property for the next guest.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Fast & Reliable Turnaround",
                                    "Linen Changing & Laundry Service",
                                    "Restocking Supplies (Toiletries, Coffee, etc.)",
                                    "Damage & Maintenance Reporting",
                                    "Staging for Photos/Guests"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-3.5 w-3.5 text-teal-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full">Get a Turnover Quote</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service 2: Residential Cleaning */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                                <Home className="h-4 w-4" />
                                <span>Residential Cleaning</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
                                Standard & Deep Cleaning
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you need a weekly touch-up or a deep seasonal scrub, our residential services bring the sparkle back to your home. We customize our checklist to focus on what matters most to you.
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-amber-500" />
                                    Deep Clean Includes:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                                    <span>• Baseboards & Moldings</span>
                                    <span>• Inside Windows (reachable)</span>
                                    <span>• Light Fixtures & Fans</span>
                                    <span>• Cabinet Fronts</span>
                                    <span>• Heavy Dusting</span>
                                    <span>• Behind Furniture (if moveable)</span>
                                </div>
                            </div>

                            <Link href="/contact">
                                <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700">Schedule Your Clean</Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
                                <Image
                                    src="/living-real.jpg"
                                    alt="Spacious clean living room"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service: Commercial Cleaning (New) */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                                <Image
                                    src="/commercial-cleaning.png"
                                    alt="Professional Commercial Cleaning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-sm font-medium mb-6">
                                <Building2 className="h-4 w-4" />
                                <span>Commercial Services</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
                                Office & Commercial Spaces
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                A clean workspace is essential for productivity and first impressions. We provide reliable janitorial and cleaning services for offices, retail spaces, and small businesses in the Pocono region.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Daily / Weekly Office Cleaning",
                                    "Restroom Sanitization & Restocking",
                                    "Common Area Maintenance",
                                    "Trash Removal & Recycling",
                                    "After-Hours Service Available"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-3.5 w-3.5 text-slate-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">Get a Commercial Quote</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service 3: Move-In / Move-Out */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10">
                                <Image
                                    src="/bathroom-real.jpg"
                                    alt="Sparkling Bathroom"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
                                <Truck className="h-4 w-4" />
                                <span>Move-In / Move-Out</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
                                Moving Made Easier
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Moving is stressful enough without worrying about the cleaning context. Leave the dirty work to us. We serve homeowners, tenants, and real estate agents with comprehensive move-out cleans that ensure security deposit returns and happy buyers.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Inside Cabinets & Drawers",
                                    "Inside Fridge & Oven",
                                    "Detailed Bathroom Sanitization",
                                    "All Floors Mopped & Vacuumed",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-3.5 w-3.5 text-purple-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">Get Moving Quote</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Guarantee Section */}
            <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <ShieldCheck className="h-16 w-16 text-teal-300 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our 100% Satisfaction Guarantee</h2>
                    <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-10">
                        We stand behind our work. If you're not completely satisfied with any area we've cleaned, let us know within 24 hours and we'll come back and re-clean it for free.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50 shadow-lg border-none">
                            Book with Confidence
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
