"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface ServiceTestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  image?: string
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

export default function ServiceTestimonial({ quote, author, position, company, image }: ServiceTestimonialProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <motion.div variants={fadeIn} custom={0.1} className="mb-6">
        <Quote className="h-10 w-10 text-white/20" />
      </motion.div>
      <motion.blockquote variants={fadeIn} custom={0.2} className="text-xl md:text-2xl text-white mb-6">
        "{quote}"
      </motion.blockquote>
      <motion.div variants={fadeIn} custom={0.3} className="flex items-center">
        {image && (
          <div className="mr-4">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">
            {position}, {company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
