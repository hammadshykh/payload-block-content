import Link from 'next/link'
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import type { Footer } from '@/payload-types'

export default function FooterClient({ footerData }: { footerData: Footer }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">{footerData.companyInfo.logo.text}</span>
            </div>
            <p className="text-gray-300 mb-6">{footerData.companyInfo.description}</p>
            <div className="flex space-x-4">
              {footerData.companyInfo?.socialLinks?.map((social) => {
                const Icon =
                  social.platform === 'facebook'
                    ? Facebook
                    : social.platform === 'twitter'
                      ? Twitter
                      : social.platform === 'instagram'
                        ? Instagram
                        : Linkedin

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData?.quickLinks?.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerData?.services?.map((service) => (
                <li key={service.name} className="text-gray-300">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{footerData.contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{footerData.contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{footerData.contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
