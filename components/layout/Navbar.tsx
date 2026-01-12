"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Areas", href: "/areas" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-10 w-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:rotate-6 transition-transform duration-300">
                            <span className="text-white font-serif font-bold text-2xl italic">M</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-2xl text-gray-900 leading-none group-hover:text-teal-600 transition-colors tracking-tight">
                                My Fair Lady
                            </span>
                            <span className="text-[10px] text-teal-600 uppercase tracking-[0.2em] font-bold">
                                Cleaning Services
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium leading-6 text-gray-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6 items-center">
                    <a href="tel:5707701863" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" /> (570) 770-1863
                    </a>
                    <Link href="/contact">
                        <Button size="sm" className="font-semibold shadow-none">Get a Quote</Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition duration-300 ease-in-out lg:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
                style={{ left: mobileMenuOpen ? "0" : "100%", width: "100%", maxWidth: "100%" }}
            >
                <div className="fixed inset-0 z-50 bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-xl font-bold text-primary italic font-serif">
                                My Fair Lady Cleaning
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6 space-y-4">
                                <a href="tel:5707701863" className="flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-primary">
                                    <Phone className="h-5 w-5" /> (570) 770-1863
                                </a>
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full">Get a Quote</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
