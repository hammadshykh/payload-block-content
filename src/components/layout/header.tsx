'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguagePopover } from '@/components/language/language-popover'
import type { Header } from '@/payload-types'

export default function HeaderClient({ header }: { header: Header }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(header, 'HEADER DATA')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{header.logo.text}</span>
          </Link>
          {header.logo && header.logo.icon && header.logo.text && (
            <Link href="/" className="flex items-center space-x-2">
              {/* Using the actual logo from Payload */}
              {header.logo.icon && typeof header.logo.icon === 'object' && (
                <img
                  src={header.logo.icon.url || ''}
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="text-2xl font-bold text-gray-900">{header.logo.text}</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {header?.navItems?.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="ml-4">
              <LanguagePopover />
            </div>

            {/* CTA Button */}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href={header.ctaButton.url}>{header.ctaButton.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {header?.navItems?.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="mt-4">
              <LanguagePopover />
            </div>

            {/* Mobile CTA Button */}
            <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href={header.ctaButton.url}>{header.ctaButton.text}</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
