"use client"

import { Layout, Code, Smartphone, Zap, PenTool, BarChart } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function WixPage() {
  const features = [
    {
      title: "Custom Wix Design",
      description: "Unique, branded Wix websites that stand out from templates and reflect your unique identity.",
      icon: <PenTool className="h-6 w-6" />,
    },
    {
      title: "Wix Corvid Development",
      description: "Advanced functionality using Wix's Corvid platform for custom applications and features.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Responsive Optimization",
      description: "Ensuring your Wix site looks and functions perfectly across all devices and screen sizes.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Performance Tuning",
      description: "Optimizing your Wix site for speed and performance to provide the best user experience.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Wix Store Setup",
      description: "E-commerce implementation with Wix Stores, including product setup and payment configuration.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "SEO & Analytics",
      description: "Implementing SEO best practices and analytics tracking to improve visibility and performance.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your goals, requirements, and preferences to plan your ideal Wix website.",
    },
    {
      number: "02",
      title: "Design & Structure",
      description: "Our team creates custom designs and site architecture tailored to your brand and objectives.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your Wix site with custom features, optimized content, and responsive design.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "After thorough testing, we launch your site and provide training on the Wix platform.",
    },
  ]

  return (
    <ServicePageLayout
      title="Wix Development"
      subtitle="User-Friendly Websites"
      description="Professional Wix development services that deliver beautiful, functional websites with the ease of management that Wix is known for, enhanced with custom features and designs."
      heroImage="https://i.postimg.cc/MTmf4860/image.png"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Wix Websites That Work For You</h2>
              <p className="text-gray-300 mb-4">
                Wix offers a powerful platform for creating beautiful, functional websites with ease. At Mobol, we take
                Wix development to the next level by combining the platform's user-friendly interface with our expertise
                in custom design and development.
              </p>
              <p className="text-gray-300">
                Our Wix development services are perfect for businesses and organizations that want a professional
                website with easy content management capabilities. We go beyond basic templates to create custom Wix
                solutions that truly represent your brand and meet your specific business needs, all while ensuring you
                can easily update and manage your site.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our Wix Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Custom Wix Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Wix Corvid/Velo Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Wix Stores & E-commerce</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Wix Bookings & Scheduling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Wix Blog Setup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Custom Forms & Databases</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">SEO & Marketing Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our Wix Development Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our Wix Development Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Indigenous Tourism Platform"
              client="Walkabout Tours"
              description="We created a Wix-based booking platform for an Indigenous tourism company, featuring custom tour listings, online booking capabilities, and integrated payment processing."
              image="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
              results={[
                { label: "Online Bookings", value: "+175%" },
                { label: "Site Visitors", value: "15,000+" },
                { label: "Booking Conversion", value: "8.3%" },
                { label: "Mobile Bookings", value: "65%" },
              ]}
            />

            <ServiceCaseStudy
              title="Artist Portfolio & Store"
              client="Dreamtime Gallery"
              description="We developed a Wix site for an Indigenous artist collective, featuring portfolio galleries, artist profiles, and an integrated Wix Store for artwork sales."
              image="https://i.postimg.cc/FKcTY1p9/3.png"
              results={[
                { label: "Online Sales", value: "+220%" },
                { label: "Featured Artists", value: "24" },
                { label: "Gallery Views", value: "35,000+" },
                { label: "International Orders", value: "40%" },
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
              quote="Mobol transformed our basic Wix site into a powerful booking platform that's dramatically increased our online reservations. Their ability to customize Wix beyond what we thought possible has been game-changing."
              author="James Cooper"
              position="Owner"
              company="Walkabout Tours"
            />
            <ServiceTestimonial
              quote="Our Wix store has become our primary sales channel thanks to Mobol's expertise. They created a beautiful showcase for our artists while making it incredibly easy for customers to purchase artwork online."
              author="Lisa Nguyen"
              position="Director"
              company="Dreamtime Gallery"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
