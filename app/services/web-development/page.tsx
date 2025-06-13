"use client"

import { Code, Layers, Smartphone, Zap, PenTool, LineChart } from "lucide-react"
import ServicePageLayout from "@/components/service-page-layout"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceCaseStudy from "@/components/service-case-study"
import ServiceTestimonial from "@/components/service-testimonial"

export default function WebDevelopmentPage() {
  const features = [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions built from the ground up to meet your specific business requirements and goals.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Responsive Design",
      description: "Websites that look and function perfectly across all devices, from desktops to smartphones.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth interactions for an exceptional user experience.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces and engaging user experiences that keep visitors coming back.",
      icon: <PenTool className="h-6 w-6" />,
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business and adapt to changing needs.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Analytics Integration",
      description: "Comprehensive tracking and reporting to measure performance and drive continuous improvement.",
      icon: <LineChart className="h-6 w-6" />,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and target audience to create a tailored strategy.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our team creates wireframes and visual designs that align with your brand and objectives.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your website using modern technologies and best practices for optimal performance.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "After thorough testing, we deploy your site and provide ongoing maintenance and updates.",
    },
  ]

  return (
    <ServicePageLayout
      title="Web Development"
      subtitle="Digital Solutions"
      description="Custom web development services that combine Indigenous cultural values with cutting-edge technology to create unique, high-performing digital experiences."
      heroImage="https://i.postimg.cc/zfg7b4xT/temp-Image8-Nyox-X.avif"
    >
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Crafting Digital Experiences That Connect</h2>
              <p className="text-gray-300 mb-4">
                At Mobol, we believe that a website is more than just code and design—it's a digital representation of
                your story, values, and vision. Our web development services blend Indigenous cultural perspectives with
                modern technology to create websites that not only look stunning but also perform exceptionally.
              </p>
              <p className="text-gray-300">
                Whether you need a simple informational site, a complex web application, or anything in between, our
                team of experienced developers has the expertise to bring your vision to life. We focus on creating
                responsive, accessible, and user-friendly websites that deliver results.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Our Web Development Technologies</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">HTML5, CSS3, JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">React, Vue.js, Next.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Node.js, Express, PHP</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">MongoDB, MySQL, PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">WordPress, Shopify, WooCommerce</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">Tailwind CSS, SASS, Bootstrap</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-gray-300">AWS, Vercel, Netlify</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ServiceFeatures title="Our Web Development Services" subtitle="What We Offer" features={features} />

      {/* Process Section */}
      <ServiceProcess title="Our Development Process" subtitle="How We Work" steps={processSteps} />

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Success Stories</p>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </div>

          <div className="space-y-24">
            <ServiceCaseStudy
              title="Cultural Heritage Platform"
              client="Indigenous Arts Foundation"
              description="We developed a comprehensive digital platform to showcase and preserve Indigenous art and cultural heritage, featuring interactive galleries, artist profiles, and educational resources."
              image="https://i.postimg.cc/MTmf4860/image.png"
              results={[
                { label: "Increase in Engagement", value: "+187%" },
                { label: "New Online Visitors", value: "10,000+" },
                { label: "Digital Archives Created", value: "500+" },
                { label: "Artist Profiles", value: "75+" },
              ]}
            />

            <ServiceCaseStudy
              title="Community Health Portal"
              client="Regional Health Services"
              description="We created an accessible health information portal specifically designed for remote Indigenous communities, providing vital health resources, telehealth integration, and multilingual support."
              image="https://i.postimg.cc/FKcTY1p9/3.png"
              results={[
                { label: "Telehealth Consultations", value: "+230%" },
                { label: "Resource Downloads", value: "25,000+" },
                { label: "Community Reach", value: "15 Regions" },
                { label: "Languages Supported", value: "8" },
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
              quote="Mobol transformed our online presence with a website that truly captures our cultural identity while providing a seamless user experience. Their understanding of Indigenous perspectives sets them apart."
              author="Sarah Thompson"
              position="Director"
              company="Indigenous Arts Foundation"
            />
            <ServiceTestimonial
              quote="The health portal Mobol created has been a game-changer for our remote communities. Their technical expertise combined with cultural sensitivity resulted in a platform that's both powerful and accessible."
              author="Dr. Michael Chen"
              position="Chief Medical Officer"
              company="Regional Health Services"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
