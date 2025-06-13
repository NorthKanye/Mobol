"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CustomButton } from "@/components/ui/custom-button"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  children: ReactNode
  ctaText?: string
  ctaLink?: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  children,
  ctaText = "Start Your Project",
  ctaLink = "#contact",
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-black relative overflow-hidden">
        {/* Breadcrumbs */}
        <div className="bg-white/5 py-3 border-y border-white/10">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/#services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-white">{title}</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-transparent"></div>
          <div className="grid grid-cols-10 h-full w-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-r border-gray-800/10 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-10 h-full w-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-b border-gray-800/10 w-full"></div>
            ))}
          </div>
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.div variants={fadeIn} custom={0.1}>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{subtitle}</p>
              </motion.div>
              <motion.h1 variants={fadeIn} custom={0.2} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </motion.h1>
              <motion.p variants={fadeIn} custom={0.3} className="text-xl text-gray-300 mb-8">
                {description}
              </motion.p>
              <motion.div variants={fadeIn} custom={0.4}>
                <CustomButton
                  size="lg"
                  rounded="full"
                  className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </CustomButton>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <div className="text-black font-bold text-sm">Indigenous Owned</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-black">{children}</div>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </motion.div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeIn} custom={0.1} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p variants={fadeIn} custom={0.2} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something meaningful together. We're here to bring your vision to life with cultural
              authenticity and technical excellence.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={fadeIn} custom={0.3}>
                <Link href={ctaLink}>
                  <CustomButton
                    size="lg"
                    rounded="full"
                    className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      {ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </CustomButton>
                </Link>
              </motion.div>
              <motion.div variants={fadeIn} custom={0.4}>
                <CustomButton
                  variant="outline"
                  size="lg"
                  rounded="full"
                  className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Schedule a Call
                </CustomButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Simplified version */}
      <footer className="bg-black py-16 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">Mobol</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Indigenous Australian-owned web design agency creating digital experiences that honor culture and
                embrace innovation.
              </p>
              <p className="text-sm text-gray-400">
                We acknowledge the Traditional Owners of the land on which we work and pay our respects to Elders past,
                present and emerging.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/wordpress" className="hover:text-white transition-colors">
                    WordPress
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-white transition-colors">
                    SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors">
                  <span>hello@mobol.com.au</span>
                </li>
                <li>+61 (0) 123 456 789</li>
                <li>Australia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mobol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
