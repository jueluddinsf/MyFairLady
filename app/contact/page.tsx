"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="grid lg:grid-cols-2 min-h-screen">

                {/* Left Column: Info & Image */}
                <div className="relative bg-teal-900 text-white p-8 lg:p-16 flex flex-col justify-between overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 opacity-20 z-0">
                        <Image src="/contact-hero.png" alt="Customer Support" fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-teal-900/95 z-0"></div>

                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Let's Clean Up.</h1>
                        <p className="text-teal-100 text-lg max-w-md leading-relaxed mb-12">
                            Ready to schedule your first clean or need a quote for your rental turnover? We're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <Phone className="h-6 w-6 text-teal-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Call or Text</p>
                                    <a href="tel:5707701863" className="text-2xl font-bold hover:text-white transition-colors">(570) 770-1863</a>
                                    <p className="text-sm text-teal-400 mt-1">Mon-Fri: 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <Mail className="h-6 w-6 text-teal-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Email Us</p>
                                    <a href="mailto:hello@myfairladycleaning.com" className="text-xl font-bold hover:text-white transition-colors">hello@myfairladycleaning.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <MapPin className="h-6 w-6 text-teal-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-teal-300 font-semibold uppercase tracking-wider mb-1">Service Area</p>
                                    <p className="text-lg font-medium">Pocono Lake, Blakeslee, & Surrounding Areas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                        {/* Social proof or badge could go here */}
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white p-8 lg:p-16 flex items-center">
                    <div className="w-full max-w-lg mx-auto">
                        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Get a Free Quote</h2>
                        <p className="text-gray-600 mb-8">Tell us a bit about your cleaning needs.</p>

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="(555) 000-0000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" id="email" className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Type</label>
                                <select id="service" className="w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white">
                                    <option>Airbnb / Turnover Cleaning</option>
                                    <option>Residential Standard Clean</option>
                                    <option>Deep Cleaning</option>
                                    <option>Move-In / Move-Out</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Property Details / Message</label>
                                <textarea id="message" rows={4} className="w-full p-4 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Approx square footage, number of beds/baths, etc."></textarea>
                            </div>

                            <Button className="w-full h-12 text-base shadow-lg shadow-teal-500/20">
                                <Send className="mr-2 h-4 w-4" /> Send Request
                            </Button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                We promise not to spam you. Your details are safe with us.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
