"use client"

import { Shield, FileSearch, AlertTriangle, Trash2, RefreshCw, BarChart } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function ReputationManagementPage() {
  const features = [
    {
      title: "Content Removal",
      description: "Strategic removal of harmful articles, social media posts, and videos that damage your reputation.",
      icon: <Trash2 className="h-6 w-6" />,
    },
    {
      title: "Reputation Monitoring",
      description: "Continuous monitoring of your online presence to identify and address potential issues quickly.",
      icon: <FileSearch className="h-6 w-6" />,
    },
    {
      title: "Crisis Management",
      description: "Rapid response strategies to mitigate damage during reputation crises and negative publicity.",
      icon: <AlertTriangle className="h-6 w-6" />,
    },
    {
      title: "Positive Content Creation",
      description: "Development of authentic, positive content to improve your online narrative and search results.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Reputation Recovery",
      description: "Comprehensive strategies to rebuild damaged reputations and restore public trust.",
      icon: <RefreshCw className="h-6 w-6" />,
    },
    {
      title: "Performance Tracking",
      description: "Regular reporting and analysis to measure reputation improvements and strategy effectiveness.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We conduct a thorough analysis of your current online reputation and identify problematic content.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Our team creates a customized plan to address negative content and strengthen your online presence.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute content removal strategies, legal approaches, and positive content campaigns.",
    },
    {
      number: "04",
      title: "Monitoring & Maintenance",
      description: "We provide ongoing monitoring and maintenance to protect and enhance your reputation long-term.",
    },
  ]

  return (
    <ServicePageLayout
      title="Reputation Management"
      subtitle="Online Presence Protection"
      description="Strategic reputation management services that help remove harmful content, protect your online image, and build a positive digital presence that accurately reflects your values."
      heroImage="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Protect & Restore Your Online Reputation</h2>
              <p className="text-gray-300 mb-4">
                In today's digital world, your online reputation can significantly impact your personal and professional
                success. Negative content, such as harmful articles, social media posts, and videos, can damage your
                reputation and be difficult to remove without expert assistance.
              </p>
              <p className="text-gray-300">
                At Mobol, we specialize in strategic reputation management services that help individuals and
                organizations remove harmful content, suppress negative search results, and build a positive online
                presence. Our team combines legal expertise, technical knowledge, and content strategies to protect and
                enhance your digital reputation.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our Reputation Management Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Article & News Removal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Social Media Content Removal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Video Content Removal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Search Result Suppression</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Crisis Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Positive Content Creation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Ongoing Reputation Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our Reputation Management Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our Reputation Management Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Executive Reputation Recovery"
              client="Indigenous Business Leader"
              description="We helped a prominent Indigenous business leader remove misleading articles and social media content while building a positive online presence that accurately reflected their achievements and values."
              image="https://i.postimg.cc/MTmf4860/image.png"
              results={[
                { label: "Harmful Articles Removed", value: "12" },
                { label: "Positive Content Ranking", value: "Top 10 Results" },
                { label: "Social Media Cleanup", value: "100%" },
                { label: "Brand Sentiment", value: "+75%" },
              ]}
            />

            <ServiceCaseStudy
              title="Community Organization Protection"
              client="Indigenous Rights Foundation"
              description="We provided reputation management for an Indigenous rights organization facing coordinated negative content campaigns, successfully removing harmful videos and articles while strengthening their authentic online narrative."
              image="https://i.postimg.cc/FKcTY1p9/3.png"
              results={[
                { label: "Videos Removed", value: "25+" },
                { label: "Harmful Posts Removed", value: "100+" },
                { label: "Positive Media Coverage", value: "15 Features" },
                { label: "Support Engagement", value: "+230%" },
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
              quote="Mobol's reputation management services were transformative for my career. They successfully removed harmful content that was affecting my professional opportunities and helped rebuild my online presence."
              author="Anonymous"
              position="Business Executive"
              company="Client Identity Protected"
            />
            <ServiceTestimonial
              quote="When our organization faced a coordinated campaign of misinformation, Mobol stepped in with effective strategies that not only removed the harmful content but strengthened our authentic voice online."
              author="Anonymous"
              position="Director"
              company="Indigenous Rights Foundation"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
