import { GlobalConfig } from 'payload'
import { revalidateHeader } from './hook/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true, // Publicly accessible
  },
  fields: [
    // Logo Section
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: 'RealEstate',
          required: true,
        },
      ],
    },

    // Navigation Links
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact-us' },
      ],
    },

    // CTA Button
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Get Started',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          defaultValue: '#',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
   
  },
}
