"use client"

import { Code, Settings, Layers, Zap, Lock, BarChart } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function WordPressPage() {
  const features = [
    {
      title: "Custom Theme Development",
      description: "Unique WordPress themes designed specifically for your brand and business requirements.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Plugin Development",
      description: "Custom plugins and extensions to add specialized functionality to your WordPress site.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "WooCommerce Integration",
      description: "Powerful e-commerce capabilities with customized product displays and checkout experiences.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Performance Optimization",
      description: "Speed enhancements and caching strategies to ensure your WordPress site loads quickly.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Security Hardening",
      description: "Comprehensive security measures to protect your WordPress site from vulnerabilities.",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Analytics & SEO",
      description: "Built-in SEO optimization and analytics integration to improve visibility and track performance.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description: "We identify your specific needs, goals, and functionality requirements for your WordPress site.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team creates wireframes and designs that align with your brand and user experience goals.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your custom WordPress solution and thoroughly test all functionality and compatibility.",
    },
    {
      number: "04",
      title: "Launch & Training",
      description: "After deployment, we provide comprehensive training and ongoing support for your WordPress site.",
    },
  ]

  return (
    <ServicePageLayout
      title="WordPress Development"
      subtitle="Content Management"
      description="Expert WordPress development services that deliver custom, high-performing websites with powerful content management capabilities and seamless user experiences."
      heroImage="https://i.postimg.cc/FKcTY1p9/3.png"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">WordPress Solutions That Work</h2>
              <p className="text-gray-300 mb-4">
                WordPress powers over 40% of all websites on the internet, and for good reason. Its flexibility,
                scalability, and user-friendly interface make it an excellent choice for businesses of all sizes. At
                Mobol, we specialize in creating custom WordPress solutions that go beyond the basics.
              </p>
              <p className="text-gray-300">
                Our WordPress development services focus on creating websites that are not only visually stunning but
                also highly functional, secure, and optimized for performance. Whether you need a simple blog, a complex
                business website, or an e-commerce store with WooCommerce, our team has the expertise to deliver
                WordPress solutions that exceed your expectations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our WordPress Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Custom Theme Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">WooCommerce & E-commerce</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Plugin Development & Customization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Multisite Networks</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Performance Optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Security Hardening</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Maintenance & Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our WordPress Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our WordPress Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Community News Platform"
              client="Indigenous Voice Media"
              description="We developed a custom WordPress multisite network that enables multiple Indigenous communities to share news, events, and stories while maintaining their unique identities and content control."
              image="https://i.postimg.cc/MTmf4860/image.png"
              results={[
                { label: "Community Sites", value: "12+" },
                { label: "Monthly Visitors", value: "50,000+" },
                { label: "Content Contributors", value: "85+" },
                { label: "Page Load Speed", value: "1.2s" },
              ]}
            />

            <ServiceCaseStudy
              title="Cultural Education Platform"
              client="Heritage Learning Center"
              description="We created a WordPress-based learning management system with custom course modules, student tracking, and multimedia content delivery for Indigenous language and cultural education."
              image="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
              results={[
                { label: "Enrolled Students", value: "1,200+" },
                { label: "Course Completion", value: "87%" },
                { label: "Languages Taught", value: "5" },
                { label: "Video Content", value: "200+ hours" },
              ]}
              reverse={true}
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Client Feedback</p>
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceTestimonial
              quote="Mobol's WordPress expertise has been invaluable to our media network. They created a powerful platform that's easy to manage while supporting our complex content requirements and community engagement goals."
              author="Robert Johnson"
              position="Editor-in-Chief"
              company="Indigenous Voice Media"
            />
            <ServiceTestimonial
              quote="The learning platform Mobol built for us has transformed how we deliver cultural education. Their understanding of both WordPress capabilities and Indigenous teaching methods created a truly effective solution."
              author="Emily White"
              position="Director"
              company="Heritage Learning Center"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
