'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MessageCircle } from 'lucide-react'

interface ContactAgentProps {
  agent: {
    name: string
    phone: string
    email: string
    image?: { url: string; alt: string }
  }
}

export default function ContactAgent({ agent }: ContactAgentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this property. Please contact me with more information.',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert('Message sent! The agent will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: 'I am interested in this property. Please contact me with more information.',
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="border-0 shadow-lg sticky top-32">
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
          {agent.image?.url ? (
            <img
              src={agent.image.url}
              alt={agent.image.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              {agent.name.charAt(0)}
            </div>
          )}
        </div>
        <CardTitle className="text-xl">{agent.name}</CardTitle>
        <p className="text-gray-600">Licensed Real Estate Agent</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Contact */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-300"
            asChild
          >
            <a href={`tel:${agent.phone}`}>
              <Phone size={16} />
              Call
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
            asChild
          >
            <a href={`mailto:${agent.email}`}>
              <Mail size={16} />
              Email
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Agent Info */}
        <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>{agent.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>{agent.email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
