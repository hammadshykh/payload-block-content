import { Button } from '@/components/ui/button'

interface CTABlockProps {
  block: any
}

export default function CTABlock({ block }: CTABlockProps) {
  const { title, description, buttonText, buttonLink } = block

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        {description && <p className="text-xl text-blue-100 mb-8 leading-relaxed">{description}</p>}
        {buttonText && buttonLink && (
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </section>
  )
}
