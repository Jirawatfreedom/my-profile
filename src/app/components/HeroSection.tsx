import React from "react"
import Image from "next/image"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section id="hero" className="relative">
      <div className="absolute -top-[98px] -z-10">
        <div className="relative  h-[795px] w-[1572px]">
          <Image
            src="/images/common/hero.svg"
            alt="Hero"
            fill
            className="absolute w-full min-h-full object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="relative left-0 top-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-500">xxx</div>
          <div className="bg-orange-500"></div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
