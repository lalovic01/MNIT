import { motion } from 'framer-motion'
import clsx from 'clsx'

const MotionSection = motion.section

export default function AnimatedSection({ className, children, delay = 0 }) {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={clsx(className)}
    >
      {children}
    </MotionSection>
  )
}
