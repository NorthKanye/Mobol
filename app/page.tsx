"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Globe, Users, Heart, ArrowDown, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import FootprintAnimation from "./components/FootprintAnimation"
import EnhancedAboutSection from "../components/enhanced-about-section"
import { CustomButton } from "@/components/ui/custom-button"

export default function MobolLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [targetScale, setTargetScale] = useState(0.2)
  const heroRef = useRef(null)
  const mainContainerRef = useRef(null) // Create the ref for the main container
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section for navigation highlighting
      const scrollPosition = window.scrollY + 100

      if (scrollPosition < servicesRef.current.offsetTop) {
        setActiveSection("hero")
      } else if (scrollPosition < aboutRef.current.offsetTop) {
        setActiveSection("services")
      } else if (scrollPosition < valuesRef.current.offsetTop) {
        setActiveSection("about")
      } else if (scrollPosition < ctaRef.current.offsetTop) {
        setActiveSection("values")
      } else {
        setActiveSection("cta")
      }
    }

    // Calculate the target scale for the hero text animation
    const calculateScale = () => {
      if (heroRef.current) {
        const finalSize = 24
        const initialSize = Number.parseFloat(window.getComputedStyle(heroRef.current).fontSize)
        if (initialSize > 0) {
          setTargetScale(finalSize / initialSize)
        }
      }
    }

    calculateScale()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", calculateScale)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", calculateScale)
    }
  }, [])

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and Indigenous design principles.",
      delay: 0.1,
      backgroundImage: "https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif",
      isDark: true, // Dark background with light text
    },
    {
      title: "Brand Identity",
      description: "Authentic branding that honors culture while embracing contemporary design.",
      delay: 0.2,
      backgroundImage: "https://i.postimg.cc/MTmf4860/image.png",
      isDark: true, // Light background with dark text
    },
    {
      title: "Mobile First",
      description: "Responsive designs that work seamlessly across all devices and platforms.",
      delay: 0.3,
      backgroundImage: "https://i.postimg.cc/FKcTY1p9/3.png",
      isDark: true, // Dark background with light text
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital solutions that connect communities and drive growth.",
      delay: 0.4,
      backgroundImage: "https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif",
      isDark: true, // Light background with dark text
    },
  ]

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Building connections that strengthen Indigenous communities online.",
      delay: 0.1,
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Culture",
      description: "Honoring traditional values while embracing digital innovation.",
      delay: 0.2,
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Connection",
      description: "Creating digital bridges between cultures and communities.",
      delay: 0.3,
    },
  ]

  // Animation Calculations
  const animationEndScroll = 250
  const rawProgress = Math.min(1, scrollY / animationEndScroll)
  const easeInOutCubic = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
  const progress = easeInOutCubic(rawProgress)

  const lerp = (start, end, p) => start * (1 - p) + end * p

  // Hero Title Animation
  const heroStyle = {
    opacity: lerp(1, 0, progress),
    transform: `translateY(${lerp(0, -100, progress)}px) scale(${lerp(1, targetScale, progress)})`,
    transformOrigin: "center 70%",
    pointerEvents: "none",
  }

  // Header Logo Animation
  const logoAnimationStartProgress = 0.7
  const rawLogoProgress = (progress - logoAnimationStartProgress) / (1 - logoAnimationStartProgress)
  const logoProgress = Math.min(1, Math.max(0, rawLogoProgress))

  const headerLogoStyle = {
    opacity: logoProgress,
    transform: `scale(${lerp(0.8, 1, logoProgress)})`,
    pointerEvents: logoProgress < 1 ? "none" : "auto",
  }

  const showHeaderBg = scrollY > 50

  // Animation variants for Framer Motion
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

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div ref={mainContainerRef} className="min-h-screen bg-black text-white">
      <FootprintAnimation mainContainerRef={mainContainerRef} />

      {/* Hero Section */}
      <section className="bg-black min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden z-10">
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

        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Animated Hero Text */}
          <h1
            ref={heroRef}
            style={heroStyle}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-none text-white"
          >
            Mob Online
          </h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Indigenous-owned web design agency crafting digital experiences that honor culture and embrace innovation
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div variants={fadeIn} custom={0.4}>
              <CustomButton
                size="lg"
                rounded="full"
                className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </CustomButton>
            </motion.div>

            <motion.div variants={fadeIn} custom={0.5}>
              <CustomButton
                variant="outline"
                size="lg"
                rounded="full"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 inset-x-0 flex flex-col items-center"
        >
          <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 px-4 bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} custom={0.1}>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">What we do</p>
            </motion.div>
            <motion.h2 variants={fadeIn} custom={0.2} className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Services
            </motion.h2>
            <motion.p variants={fadeIn} custom={0.3} className="text-xl text-gray-300 max-w-2xl mx-auto">
              We blend traditional Indigenous values with cutting-edge web technologies to create meaningful digital
              experiences
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={service.delay}
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${
                    service.isDark ? "bg-black" : "bg-white"
                  }`}
                >
                  {/* Background Image with Overlay */}
                  {service.backgroundImage && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.backgroundImage})` }}
                      ></div>
                      <div
                        className={`absolute inset-0 ${
                          service.isDark
                            ? "bg-black bg-opacity-50 group-hover:bg-opacity-40"
                            : "bg-white bg-opacity-80 group-hover:bg-opacity-70"
                        } transition-opacity duration-300`}
                      ></div>
                    </>
                  )}

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    <h3
                      className={`text-2xl text-center font-prompt uppercase tracking-wider font-bold mb-4 ${
                        service.isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`font-prompt font-medium text-lg  mb-6 ${service.isDark ? "text-gray-200" : "text-gray-800"}`}
                    >
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <CustomButton
                        size="sm"
                        rounded="full"
                        variant={service.isDark ? "outline" : "default"}
                        className={`${
                          service.isDark
                            ? "border-white text-white hover:bg-white hover:text-black"
                            : "bg-black text-white hover:bg-gray-800"
                        } transition-all duration-300`}
                      >
                        <span className="flex items-center">
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutRef}>
        <EnhancedAboutSection />
      </div>

      {/* Values Section */}
      <section ref={valuesRef} id="values" className="py-24 px-4 bg-white text-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} custom={0.1} className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              What drives us
            </motion.p>
            <motion.h2 variants={fadeIn} custom={0.2} className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Our Values
            </motion.h2>
            <motion.p variants={fadeIn} custom={0.3} className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={value.delay}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center"
                  >
                    <div className="text-white">{value.icon}</div>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="py-24 px-4 bg-black relative">
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p variants={fadeIn} custom={0.2} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something meaningful together. We're here to bring your vision to life with cultural
              authenticity and technical excellence.
            </motion.p>
            <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={fadeIn} custom={0.3}>
                <CustomButton
                  size="lg"
                  rounded="full"
                  className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </CustomButton>
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

      {/* Footer */}
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
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-4 text-white"
              >
                Mobol
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 mb-4 max-w-md"
              >
                Indigenous Australian-owned web design agency creating digital experiences that honor culture and
                embrace innovation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-gray-400"
              >
                We acknowledge the Traditional Owners of the land on which we work and pay our respects to Elders past,
                present and emerging.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors flex items-center group">
                    <span>Web Development</span>
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#brand" className="hover:text-white transition-colors flex items-center group">
                    <span>Brand Identity</span>
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#mobile" className="hover:text-white transition-colors flex items-center group">
                    <span>Mobile Design</span>
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#digital" className="hover:text-white transition-colors flex items-center group">
                    <span>Digital Strategy</span>
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors">
                  <span>hello@mobol.com.au</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </li>
                <li>+61 (0) 123 456 789</li>
                <li>Australia</li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Mobol. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
