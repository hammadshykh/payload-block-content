import { Block } from '@/payload-types'
import HeroSlider from './hero-slider'
import CTABlock from './cta-block'
import CardGrid from './card-grid'
import Testimonials from './testimonials'
import ContactForm from './contact-form'
import ServiceList from './service-list'

interface BlockRendererProps {
  blocks: Block[]
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero-slider':
            return <HeroSlider key={index} block={block} />
          case 'cta-block':
            return <CTABlock key={index} block={block} />
          case 'card-grid':
            return <CardGrid key={index} block={block} />
          case 'testimonials':
            return <Testimonials key={index} block={block} />
          case 'contact-form':
            return <ContactForm key={index} block={block} />
          case 'service-list':
            return <ServiceList key={index} block={block} />
          default:
            return null
        }
      })}
    </div>
  )
}
