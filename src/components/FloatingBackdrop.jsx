import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const MotionDiv = motion.div

export default function FloatingBackdrop() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const scrollY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 28, mass: 0.4 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 28, mass: 0.4 })

  const orbOneX = useTransform(smoothX, (value) => value * 0.85)
  const orbOneY = useTransform([smoothY, scrollY], ([my, sy]) => my * 0.65 - sy * 0.04)

  const orbTwoX = useTransform(smoothX, (value) => value * -0.65)
  const orbTwoY = useTransform([smoothY, scrollY], ([my, sy]) => my * -0.45 + sy * 0.05)

  const gridOffset = useTransform(scrollY, (value) => value * 0.08)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 90
      const y = (event.clientY / window.innerHeight - 0.5) * 90
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mouseX, mouseY, scrollY])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <MotionDiv
        style={{ x: orbOneX, y: orbOneY }}
        className="absolute left-[-8rem] top-[7rem] h-80 w-80 rounded-full bg-pine/45 blur-[85px]"
      />
      <MotionDiv
        style={{ x: orbTwoX, y: orbTwoY }}
        className="absolute right-[-6rem] top-[18rem] h-72 w-72 rounded-full bg-mint/40 blur-[90px]"
      />
      <MotionDiv
        style={{ y: gridOffset }}
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <div className="h-full w-full bg-36 bg-grid-pattern" />
      </MotionDiv>
    </div>
  )
}
