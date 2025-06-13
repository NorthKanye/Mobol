"use client"

import { Search, BarChart, Target, Globe, Users, LineChart } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function SEOPage() {
  const features = [
    {
      title: "SEO Audit & Strategy",
      description: "Comprehensive analysis of your current SEO performance and development of a tailored strategy.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "On-Page Optimization",
      description: "Optimizing content, meta tags, headings, and site structure to improve search engine visibility.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Keyword Research",
      description: "Identifying high-value keywords and search terms that your target audience is using.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Content Strategy",
      description: "Developing SEO-friendly content that engages users and improves search rankings.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Technical SEO",
      description: "Addressing technical issues that affect search performance, including site speed and structure.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Performance Tracking",
      description: "Regular reporting and analysis to measure SEO performance and refine strategies.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "SEO Audit",
      description:
        "We analyze your current SEO performance, identify issues, and uncover opportunities for improvement.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our team creates a customized SEO strategy based on your goals, industry, and target audience.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We implement on-page, technical, and content optimizations to improve your search visibility.",
    },
    {
      number: "04",
      title: "Monitoring & Refinement",
      description:
        "We continuously track performance, provide regular reports, and refine strategies for optimal results.",
    },
  ]

  return (
    <ServicePageLayout
      title="SEO Strategies"
      subtitle="Search Engine Optimization"
      description="Data-driven SEO services that improve your search engine visibility, drive targeted traffic to your website, and help you connect with your ideal audience."
      heroImage="https://i.postimg.cc/FKcTY1p9/3.png"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Be Found By Your Ideal Audience</h2>
              <p className="text-gray-300 mb-4">
                In today's digital landscape, being visible in search engine results is essential for business success.
                Our SEO services are designed to help your website rank higher in search results, drive more qualified
                traffic, and ultimately increase conversions and revenue.
              </p>
              <p className="text-gray-300">
                At Mobol, we take a holistic approach to SEO that combines technical expertise with creative content
                strategies. We understand that effective SEO is not just about rankings—it's about connecting with the
                right audience at the right time with the right message. Our data-driven strategies are tailored to your
                specific business goals and target audience.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our SEO Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Technical SEO Audits</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Keyword Research & Strategy</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">On-Page Optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Content Strategy & Creation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Local SEO</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">E-commerce SEO</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Performance Tracking & Reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our SEO Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our SEO Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Indigenous Tourism SEO Campaign"
              client="Cultural Experiences Australia"
              description="We developed and implemented a comprehensive SEO strategy for a tourism company specializing in Indigenous cultural experiences, focusing on both international and domestic search visibility."
              image="https://i.postimg.cc/MTmf4860/image.png"
              results={[
                { label: "Organic Traffic", value: "+210%" },
                { label: "Keyword Rankings", value: "Top 3 for 45+" },
                { label: "Booking Inquiries", value: "+175%" },
                { label: "International Visibility", value: "12 Countries" },
              ]}
            />

            <ServiceCaseStudy
              title="E-commerce SEO Optimization"
              client="Native Crafts Marketplace"
              description="We optimized an e-commerce site selling Indigenous crafts and artwork, focusing on product page SEO, category optimization, and technical improvements to increase visibility and sales."
              image="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
              results={[
                { label: "Organic Revenue", value: "+185%" },
                { label: "Product Visibility", value: "+230%" },
                { label: "Conversion Rate", value: "5.2%" },
                { label: "Page Load Speed", value: "-65%" },
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
              quote="Mobol's SEO expertise has transformed our online visibility. Their understanding of both technical SEO and cultural context has helped us reach international audiences we never thought possible."
              author="Sarah Mitchell"
              position="Marketing Director"
              company="Cultural Experiences Australia"
            />
            <ServiceTestimonial
              quote="The SEO improvements Mobol made to our e-commerce site have directly impacted our bottom line. We're now reaching customers who are specifically searching for Indigenous artwork and crafts."
              author="David Wilson"
              position="Founder"
              company="Native Crafts Marketplace"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
