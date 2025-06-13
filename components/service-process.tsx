"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  delay?: number
}

interface ServiceProcessProps {
  title: string
  subtitle: string
  steps: ProcessStepProps[]
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

export default function ServiceProcess({ title, subtitle, steps }: ServiceProcessProps) {
  return (
    <section className="py-20 px-4 bg-white/5">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeIn} custom={step.delay || index * 0.1} className="relative">
              <div className="text-5xl font-bold text-white/10 absolute -top-6 left-0">{step.number}</div>
              <div className="pt-8">
                <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5">
                  <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
