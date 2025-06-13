"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceFeatureProps {
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  features: ServiceFeatureProps[]
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} custom={0.1} className="text-sm uppercase tracking-wider text-gray-400 mb-2">
            {subtitle}
          </motion.p>
          <motion.h2 variants={fadeIn} custom={0.2} className="text-4xl font-bold mb-4 text-white">
            {title}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={feature.delay || index * 0.1}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
