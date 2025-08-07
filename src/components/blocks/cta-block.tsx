'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
interface CTABlockProps {
  block: any
}

export default function CTABlock({ block }: CTABlockProps) {
  const { title, description, buttonText, buttonLink } = block

  return (
    <section className="py-20 relative">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #38b2ac 0%, #319795 50%, #2c7a7b 100%)',
        }}
        animate={{
          backgroundImage: [
            'linear-gradient(135deg, #38b2ac 0%, #319795 50%, #2c7a7b 100%)',
            'linear-gradient(135deg, #48bb78 0%, #38a169 50%, #2f855a 100%)',
            'linear-gradient(135deg, #38b2ac 0%, #319795 50%, #2c7a7b 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
      <div className="max-w-4xl mx-auto text-center px-6 relative z-50">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        {description && <p className="text-xl text-blue-100 mb-8 leading-relaxed">{description}</p>}
        {buttonText && buttonLink && (
          <Button
            size="lg"
            className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </section>
  )
}
