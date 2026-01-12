import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-4">
                        <span className="text-2xl font-bold italic font-serif">
                            My Fair Lady Cleaning
                        </span>
                        <p className="text-sm leading-6 text-gray-300">
                            Professional Airbnb and Residential cleaning you can trust in the Pocono Lake area.
                        </p>
                        <div className="flex space-x-6">
                            {/* Add social links here if available */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">
                                    Services
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/services#airbnb" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Airbnb / Rental Cleaning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#residential" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Residential Cleaning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#deep-clean" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Deep Cleaning
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-areas" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Service Areas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">
                                    Contact Us
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Phone className="h-4 w-4" />
                                        <a href="tel:5707701863" className="hover:text-white">
                                            (570) 770-1863
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Mail className="h-4 w-4" />
                                        <a href="mailto:myfairladycleans@gmail.com" className="hover:text-white">
                                            myfairladycleans@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <MapPin className="h-4 w-4" />
                                        <span>Locally Owned - Serving Pocono Lake Area</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-100/10 pt-8">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} My Fair Lady Cleaning. Jessilyn Ciaburri. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
