"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Check, Star, Sparkles, Home, Building2, Phone, Leaf, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-team-bg.png"
            alt="Professional cleaning team in background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30"></div>
        </div>

        {/* Background Gradients/Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-100 blur-3xl opacity-40 mix-blend-multiply filter animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-40 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50/50 px-3 py-1 text-sm font-medium text-teal-700 mb-6 backdrop-blur-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Premium Cleaning Service in Pocono Lake</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 font-serif leading-tight">
                Your Peace of Mind, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Our Promise.</span>
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-xl text-gray-600 mb-10 leading-relaxed">
                We don't just clean; we care. Professional Airbnb & residential cleaning solutions designed for peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-teal-500/30 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 border-0 shimmer-gold">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-gray-200 hover:text-teal-600 hover:border-teal-200 bg-white/50 backdrop-blur-sm">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image - Real Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white">
                <Image
                  src="/hero-real.png"
                  alt="Jessilyn from My Fair Lady Cleaning"
                  width={600}
                  height={800}
                  className="object-cover object-top w-full h-[500px] lg:h-[600px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow hidden sm:flex">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Trust Score</p>
                  <p className="text-lg font-bold text-gray-900">100% Verified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="border-y border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-500" /> Locally Owned
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-500" /> Insured & Bonded
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-500" /> 100% Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Our Expertise</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 font-serif">
              Tailored Cleaning Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service Card 1 - Airbnb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="h-72 overflow-hidden relative">
                <Image
                  src="/bedroom-real.jpg"
                  alt="Luxury Airbnb Bedroom"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">Short-Term Rentals</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Maximize your ratings with our 5-star turnover service. We handle everything from deep cleans to restocking, so you can host with confidence.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Turnover Specialists", "Linen Service", "Damage Reporting"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-gray-200 hover:border-primary hover:text-primary">View Plans</Button>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 2 - Residential */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="h-72 overflow-hidden relative">
                <Image
                  src="/kitchen-real.jpg"
                  alt="Sparkling Clean Kitchen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">Residential Cleaning</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Your home is your sanctuary. Let us maintain its sparkle with our thorough standard and deep cleaning services tailored to your lifestyle.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Weekly / Bi-Weekly", "Deep Spring Cleans", "Move-In / Move-Out"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="block">
                  <Button variant="outline" className="w-full border-gray-200 hover:border-blue-600 hover:text-blue-600">View Plans</Button>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 3 - Commercial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/commercial-cleaning.png"
                  alt="Professional Commercial Cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">Commercial</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Create a pristine environment for your employees and clients. Reliable janitorial services for offices and small businesses.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Office Cleaning", "Restroom Sanitation", "Common Areas"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="block">
                  <Button variant="outline" className="w-full border-gray-200 hover:border-slate-600 hover:text-slate-600">View Plans</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New - Our Work / Results Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              The My Fair Lady Standard
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We use safe, non-toxic products to deliver a pristine clean every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/supplies-real.jpg" alt="Eco-friendly cleaning supplies" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-teal-600 font-semibold">
                  <Leaf className="h-5 w-5" />
                  <h3>Safe & Eco-Friendly</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use trusted products like Branch Basics to ensure your home is safe for children and pets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/living-real.jpg" alt="Spotless spacious living room" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-teal-600 font-semibold">
                  <Zap className="h-5 w-5" />
                  <h3>Attention to Detail</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From light fixtures to baseboards, we ensure every corner of your living space is dust-free and inviting.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/bathroom-real.jpg" alt="Sparkling clean bathroom" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-teal-600 font-semibold">
                  <ShieldCheck className="h-5 w-5" />
                  <h3>Hygiene & Sanitization</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bathrooms are scrubbed and sanitized to hotel standards, leaving them fresh and sparkling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-teal-50/30">
        {/* ... (Existing Testimonials Code) ... */}
        {/* Re-pasting snippet for completeness or just implying it's there? I will paste the whole file content to be safe since I'm overwriting. */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              Loved by Our Customers
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              See what our clients are saying on Google and Yelp.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "My Fair Lady Cleaning is highly recommended! They are professional, reliable, and the cabin is always consistently clean. We have delt with many cleaning companies in the past and always struggle with consistency... there is no worries with My Fair Lady!",
                author: "Michael Piotti",
                role: "Google Review",
                stars: 5,
              },
              {
                text: "We are incredibly happy with Jess... We finally found a professional cleaner and business owner who goes above and beyond when cleaning our home. She focuses on details and is a true 'dust detective'...",
                author: "Patrick D'Onofrio",
                role: "Google Review",
                stars: 5,
              },
              {
                text: "I’ve used My Fair Lady Cleaning for multiple short-term rental turnovers and they consistently go above and beyond. They arrive on time, communicate clearly, and the attention to detail is incredible; inside and out.",
                author: "Timelimitxceeded",
                role: "Google Review",
                stars: 5,
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 font-serif">{review.author}</p>
                  <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 text-center">
            <a
              href="https://www.google.com/search?q=My+Fair+Lady+Cleaning+Pocono+Lake+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Read more on Google</span>
            </a>

            <a
              href="https://www.yelp.com/biz/my-fair-lady-cleaning-pocono-lake"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm group"
            >
              <svg className="w-5 h-5 text-[#FF1A1A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.535 17.275c-.324 0-.616.03-.616.03L12.56 22h2.52s.322-.09.524-.263a2.665 2.665 0 001.31-2.22c0-1.226-1.125-2.242-3.38-2.242zm-2.09-.94l-2.015 4.887s-.103.29-.413.29H6.463s.02-.27.273-.66l2.126-4.99s.11-.274.526-.274h2.057zm-1.89-1.24L4.8 19.34s-.184.095-.31.026c-.125-.068-.198-.3-.198-.3l-.868-2.58s-.055-.168.04-.325c.095-.157.65-1.166 1.76-2.913 1.09-1.716 2.37-2.316 3.655-1.87 1.285.446.677 3.677.677 3.677zm3.033-1.576l4.24 3.03s.22.148.33.056c.11-.092.274-.21.274-.21l1.527-2.25s.098-.16-.01-.322c-.11-.164-1.28-1.565-3.3-1.847-2.018-.28-3.03.623-3.06 1.543zm.25-3.356c-.52 2.365-1.517 3.12-2.73 2.87-1.213-.25-1.04-1.66-1.04-1.66L9.62 6.5s-.044-.247.116-.483c.16-.236 1.34-1.7 3.397-1.928 2.057-.228 3.518.52 3.518.52l-2.5 5.5s-.276.54.685.16z" />
              </svg>
              <span>Read more on Yelp</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero-team-bg.png"
            alt="Professional cleaner background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 font-serif">
            Ready for a Sparkling Clean Space?
          </h2>
          <p className="text-teal-50 text-xl max-w-2xl mx-auto mb-10">
            Get a free, no-obligation estimate today. Call us or fill out our quick form.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold text-primary hover:text-primary min-w-[200px] shadow-xl">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:5707701863">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10 hover:text-white min-w-[200px]">
                <Phone className="mr-2 h-4 w-4" /> Call (570) 770-1863
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
