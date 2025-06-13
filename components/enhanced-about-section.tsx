"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, Layers, Lightbulb, Search, ShoppingBag } from "lucide-react"
import Link from "next/link"
import LogoSlider from "./logo-slider"

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

export default function EnhancedAboutSection() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "WordPress & Shopify",
      description: "Flexible, scalable solutions for businesses of all sizes with powerful content management.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Development",
      description: "Bespoke solutions using HTML, CSS, JavaScript, React, and Vue for unique digital experiences.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "E-commerce",
      description: "Conversion-focused online stores that drive sales and enhance customer experience.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Strategy",
      description: "Data-driven optimization to increase visibility and drive organic traffic to your website.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Digital Strategy",
      description: "Comprehensive planning that aligns your online presence with your business objectives.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Content Management",
      description: "Intuitive back-end systems that make updating your website simple and efficient.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin by understanding your vision, goals, and audience to create a tailored digital strategy.",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team crafts visually stunning designs and builds robust, scalable technical solutions.",
    },
    {
      number: "03",
      title: "Testing & Launch",
      description: "Rigorous quality assurance ensures your project launches flawlessly across all devices.",
    },
    {
      number: "04",
      title: "Support & Growth",
      description: "We provide ongoing support and strategic guidance to help your digital presence evolve.",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="grid grid-cols-12 h-full w-full opacity-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-500 h-full"></div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} custom={0.1} className="text-sm uppercase tracking-wider text-gray-400 mb-2">
            Who we are
          </motion.p>
          <motion.h2 variants={fadeIn} custom={0.2} className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Mobol
          </motion.h2>
          <motion.p variants={fadeIn} custom={0.3} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Indigenous Australian-owned digital innovators creating authentic online experiences
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Story */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h3 variants={fadeIn} custom={0.1} className="text-2xl font-bold mb-6 text-white">
              Our Story
            </motion.h3>
            <motion.div variants={fadeIn} custom={0.2} className="space-y-6">
              <p className="text-gray-300">
                Mobol is more than a web design agency – we're storytellers, culture keepers, and digital innovators. As
                a proudly Indigenous Australian-owned business, we understand the importance of authentic representation
                in the digital space.
              </p>
              <p className="text-gray-300">
                Founded with a vision to bridge traditional cultural values with cutting-edge technology, we create
                digital experiences that honor heritage while embracing innovation. Our team combines deep cultural
                knowledge with technical expertise to deliver websites and digital solutions that resonate with diverse
                audiences.
              </p>
              <p className="text-gray-300">
                We believe that effective digital presence should be accessible to all businesses and organizations,
                especially those that bring unique perspectives and valuable contributions to our society. Our approach
                emphasizes both visual excellence and technical performance, ensuring your online presence not only
                looks exceptional but also delivers measurable results.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} custom={0.3} className="mt-8">
              <Button className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <motion.h3 variants={fadeIn} custom={0.1} className="text-2xl font-bold mb-6 text-white">
              Our Values
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeIn} custom={0.1} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Cultural Authenticity</h4>
                  <p className="text-gray-300">
                    We honor Indigenous perspectives and ensure authentic representation in everything we create.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} custom={0.2} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Technical Excellence</h4>
                  <p className="text-gray-300">
                    We deliver cutting-edge solutions that perform flawlessly across all platforms and devices.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} custom={0.3} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Collaborative Partnership</h4>
                  <p className="text-gray-300">
                    We work closely with our clients, ensuring their vision guides every step of the process.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} custom={0.4} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">04</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Continuous Innovation</h4>
                  <p className="text-gray-300">
                    We constantly evolve our skills and approaches to stay at the forefront of digital trends.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Technology Partners Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3 variants={fadeIn} custom={0.1} className="text-2xl font-bold mb-8 text-white text-center">
            Technologies We Work With
          </motion.h3>
          <motion.div
            variants={fadeIn}
            custom={0.2}
            className="py-8 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <LogoSlider className="text-white" />
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3 variants={fadeIn} custom={0.1} className="text-2xl font-bold mb-8 text-white text-center">
            Our Expertise
          </motion.h3>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h3 variants={fadeIn} custom={0.1} className="text-2xl font-bold mb-8 text-white text-center">
            Our Process
          </motion.h3>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div key={index} variants={fadeIn} custom={index * 0.1} className="relative">
                <div className="text-5xl font-bold text-white/10 absolute -top-6 left-0">{step.number}</div>
                <div className="pt-8">
                  <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
          <motion.p variants={fadeIn} custom={0.1} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to create a digital experience that truly represents your vision and connects with your audience?
          </motion.p>
          <motion.div variants={fadeIn} custom={0.2}>
            <Link href="#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
