"use client"
import { motion } from "framer-motion"
import Image from "next/image"
const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="whitespace-nowrap flex space-x-12"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="flex-none">
          <Image
            src="/images/common/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-[100px] w-[100px] mr-2"
          />
          <span className="font-semibold text-white text-lg">Navigation</span>
        </div>
        <div className="flex-none">
          <Image
            src="/images/common/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-[100px] w-[100px] mr-2"
          />
          <span className="font-semibold text-gray-500 text-lg">
            Navigation
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default Marquee
