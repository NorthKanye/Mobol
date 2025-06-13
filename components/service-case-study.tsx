"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCaseStudyProps {
  title: string
  client: string
  description: string
  image: string
  results: {
    label: string
    value: string
  }[]
  link?: string
  reverse?: boolean
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

export default function ServiceCaseStudy({
  title,
  client,
  description,
  image,
  results,
  link = "#",
  reverse = false,
}: ServiceCaseStudyProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div variants={fadeIn} custom={0.1} className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </motion.div>
      <motion.div variants={fadeIn} custom={0.2} className={`order-1 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{client}</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-lg">
              <p className="text-sm text-gray-400">{result.label}</p>
              <p className="text-xl font-bold text-white">{result.value}</p>
            </div>
          ))}
        </div>

        <Link href={link}>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 group"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
