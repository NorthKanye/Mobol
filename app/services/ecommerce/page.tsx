"use client"

import { ShoppingBag, CreditCard, BarChart, Globe, ShieldCheck, Truck } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function EcommercePage() {
  const features = [
    {
      title: "Shopify Development",
      description: "Custom Shopify stores with unique designs and powerful functionality to showcase your products.",
      icon: <ShoppingBag className="h-6 w-6" />,
    },
    {
      title: "WooCommerce Solutions",
      description: "WordPress-based e-commerce sites with complete control over your store and customer experience.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Payment Integration",
      description: "Seamless integration with multiple payment gateways for secure and convenient transactions.",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Inventory Management",
      description: "Robust systems to track stock levels, manage products, and streamline order fulfillment.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Security & Compliance",
      description: "PCI-compliant stores with advanced security features to protect customer data and build trust.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and insights to optimize your store's performance and increase sales.",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Store Planning",
      description:
        "We analyze your products, target audience, and business goals to create a strategic e-commerce plan.",
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our team designs and builds your store with a focus on user experience and conversion optimization.",
    },
    {
      number: "03",
      title: "Integration & Testing",
      description: "We integrate payment gateways, shipping methods, and thoroughly test all store functionality.",
    },
    {
      number: "04",
      title: "Launch & Growth",
      description:
        "After launch, we provide ongoing support and strategies to grow your online sales and customer base.",
    },
  ]

  return (
    <ServicePageLayout
      title="E-commerce Solutions"
      subtitle="Online Stores"
      description="Custom e-commerce development that combines beautiful design with powerful functionality to create online stores that drive sales and deliver exceptional shopping experiences."
      heroImage="https://i.postimg.cc/MTmf4860/image.png"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Sell Online With Confidence</h2>
              <p className="text-gray-300 mb-4">
                In today's digital marketplace, having a powerful and user-friendly online store is essential for
                business success. At Mobol, we specialize in creating e-commerce solutions that not only showcase your
                products beautifully but also convert visitors into customers.
              </p>
              <p className="text-gray-300">
                Whether you're launching your first online store or looking to upgrade an existing one, our team has the
                expertise to create a seamless shopping experience that reflects your brand identity and drives sales.
                We work with leading platforms like Shopify and WooCommerce to deliver robust, scalable e-commerce
                solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our E-commerce Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Shopify & Shopify Plus</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">WooCommerce</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">BigCommerce</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Custom E-commerce Solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Payment Gateway Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Shipping & Fulfillment Setup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">E-commerce SEO & Marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our E-commerce Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our E-commerce Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Indigenous Artisan Marketplace"
              client="Dreamtime Creations"
              description="We developed a Shopify-based marketplace that connects Indigenous artisans with global customers, featuring secure payments, multi-vendor capabilities, and cultural storytelling elements."
              image="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
              results={[
                { label: "Increase in Sales", value: "+215%" },
                { label: "Conversion Rate", value: "4.8%" },
                { label: "Artisans Onboarded", value: "45+" },
                { label: "Global Reach", value: "28 Countries" },
              ]}
            />

            <ServiceCaseStudy
              title="Sustainable Fashion Brand"
              client="EcoThread Apparel"
              description="We created a WooCommerce store for this sustainable fashion brand, incorporating advanced product filtering, size guides, and a seamless checkout process to enhance the customer experience."
              image="https://i.postimg.cc/FKcTY1p9/3.png"
              results={[
                { label: "Cart Abandonment", value: "-35%" },
                { label: "Average Order Value", value: "+28%" },
                { label: "Mobile Conversions", value: "+62%" },
                { label: "Return Customer Rate", value: "43%" },
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
              quote="Mobol transformed our vision into a beautiful online store that has significantly increased our sales. Their understanding of both e-commerce best practices and Indigenous design principles created something truly unique."
              author="Jessica Williams"
              position="Founder"
              company="Dreamtime Creations"
            />
            <ServiceTestimonial
              quote="The WooCommerce store Mobol built for us has been a game-changer. Their attention to detail and focus on the customer journey has resulted in higher conversion rates and happier customers."
              author="Daniel Rodriguez"
              position="CEO"
              company="EcoThread Apparel"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
