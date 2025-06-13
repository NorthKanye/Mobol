"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, ShoppingBag, Globe, Layout, Search, Shield } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

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

export default function ServicesPage() {
  // Service categories with their details
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web development services that combine Indigenous cultural values with cutting-edge technology to create unique, high-performing digital experiences.",
      icon: <Code className="h-8 w-8" />,
      link: "/services/web-development",
      image: "https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif",
      features: ["Custom Web Applications", "Responsive Design", "Performance Optimization", "UI/UX Design"],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom e-commerce development that combines beautiful design with powerful functionality to create online stores that drive sales and deliver exceptional shopping experiences.",
      icon: <ShoppingBag className="h-8 w-8" />,
      link: "/services/ecommerce",
      image: "https://i.postimg.cc/MTmf4860/image.png",
      features: ["Shopify Development", "WooCommerce Solutions", "Payment Integration", "Inventory Management"],
    },
    {
      title: "WordPress Development",
      description:
        "Expert WordPress development services that deliver custom, high-performing websites with powerful content management capabilities and seamless user experiences.",
      icon: <Globe className="h-8 w-8" />,
      link: "/services/wordpress",
      image: "https://i.postimg.cc/FKcTY1p9/3.png",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Integration",
        "Performance Optimization",
      ],
    },
    {
      title: "Wix Development",
      description:
        "Professional Wix development services that deliver beautiful, functional websites with the ease of management that Wix is known for, enhanced with custom features and designs.",
      icon: <Layout className="h-8 w-8" />,
      link: "/services/wix",
      image: "https://i.postimg.cc/MTmf4860/image.png",
      features: ["Custom Wix Design", "Wix Corvid Development", "Responsive Optimization", "Wix Store Setup"],
    },
    {
      title: "SEO Strategies",
      description:
        "Data-driven SEO services that improve your search engine visibility, drive targeted traffic to your website, and help you connect with your ideal audience.",
      icon: <Search className="h-8 w-8" />,
      link: "/services/seo",
      image: "https://i.postimg.cc/FKcTY1p9/3.png",
      features: ["SEO Audit & Strategy", "On-Page Optimization", "Keyword Research", "Content Strategy"],
    },
    {
      title: "Reputation Management",
      description:
        "Strategic reputation management services that help remove harmful content, protect your online image, and build a positive digital presence that accurately reflects your values.",
      icon: <Shield className="h-8 w-8" />,
      link: "/services/reputation-management",
      image: "https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif",
      features: ["Content Removal", "Reputation Monitoring", "Crisis Management", "Positive Content Creation"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-black relative overflow-hidden">
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.p variants={fadeIn} custom={0.1} className="text-sm uppercase tracking-wider text-gray-400 mb-2">
              What We Do
            </motion.p>
            <motion.h1 variants={fadeIn} custom={0.2} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </motion.h1>
            <motion.p variants={fadeIn} custom={0.3} className="text-xl text-gray-300 mb-8">
              Indigenous Australian-owned digital solutions that honor culture and embrace innovation. Explore our
              comprehensive range of services designed to elevate your online presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                custom={index * 0.1}
                className="group relative overflow-hidden"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 h-full flex flex-col transition-all duration-300 group-hover:bg-white/10">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm p-3 rounded-full">
                      <div className="text-white">{service.icon}</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>

                    {/* Features List */}
                    <div className="mt-auto">
                      <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href={service.link}>
                        <CustomButton
                          rounded="full"
                          className="w-full bg-white text-black hover:bg-gray-200 group relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <span className="absolute inset-0 bg-gray-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </CustomButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} custom={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Approach to Service</h2>
              <p className="text-gray-300 mb-4">
                At Mobol, we believe that effective digital solutions must be both technically excellent and culturally
                authentic. Our approach combines Indigenous perspectives with cutting-edge technology to create digital
                experiences that truly connect with audiences.
              </p>
              <p className="text-gray-300 mb-6">
                Every service we offer is delivered with a focus on quality, innovation, and cultural sensitivity. We
                work closely with our clients to understand their unique needs and create tailored solutions that drive
                real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Cultural Authenticity</h3>
                    <p className="text-gray-300">
                      We honor Indigenous perspectives and ensure authentic representation in everything we create.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Technical Excellence</h3>
                    <p className="text-gray-300">
                      We deliver cutting-edge solutions that perform flawlessly across all platforms and devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Collaborative Partnership</h3>
                    <p className="text-gray-300">
                      We work closely with our clients, ensuring their vision guides every step of the process.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} custom={0.3} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(https://i.postimg.cc/MTmf4860/image.png)` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full flex items-center justify-center border border-white/20">
                <div className="text-white font-bold text-center">
                  <div className="text-3xl">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} custom={0.1} className="text-sm uppercase tracking-wider text-gray-400 mb-2">
              Common Questions
            </motion.p>
            <motion.h2 variants={fadeIn} custom={0.2} className="text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn} custom={0.1} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">
                How do I know which service is right for my business?
              </h3>
              <p className="text-gray-300">
                We offer free consultations to understand your specific needs and goals. Our team will assess your
                requirements and recommend the most suitable services to achieve your objectives. Every solution we
                provide is tailored to your unique situation.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} custom={0.2} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">What makes Mobol different from other agencies?</h3>
              <p className="text-gray-300">
                As an Indigenous Australian-owned agency, we bring a unique cultural perspective to digital solutions.
                We combine this cultural authenticity with technical excellence to create digital experiences that are
                both innovative and meaningful, helping your brand connect with diverse audiences.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} custom={0.3} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">
                How long does it typically take to complete a project?
              </h3>
              <p className="text-gray-300">
                Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while
                more complex projects like e-commerce sites or custom web applications can take 8-12 weeks or more.
                We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} custom={0.4} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-300">
                Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform
                optimally. These include technical support, content updates, security monitoring, and performance
                optimization. We're committed to building long-term relationships with our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                <Link href="#contact">
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
                  <Link href="/services/wix" className="hover:text-white transition-colors">
                    Wix
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-white transition-colors">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/reputation-management" className="hover:text-white transition-colors">
                    Reputation Management
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
