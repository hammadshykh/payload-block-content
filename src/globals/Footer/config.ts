import { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true, // Publicly accessible
  },
  fields: [
    // Company Info Section
    {
      name: 'companyInfo',
      type: 'group',
      label: 'Company Information',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'text',
              type: 'text',
              defaultValue: 'RealEstate',
              required: true,
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Your trusted partner in finding the perfect home. We make real estate dreams come true.',
          required: true,
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Media Links',
          fields: [
            {
              name: 'platform',
              type: 'select',
              options: ['facebook', 'twitter', 'instagram', 'linkedin'],
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            { platform: 'facebook', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'linkedin', url: '#' },
          ],
        },
      ],
    },

    // Quick Links Section
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { label: 'Home', url: '/' },
        { label: 'About Us', url: '/about-us' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact-us' },
      ],
    },

    // Services Section
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Property Sales' },
        { name: 'Property Rentals' },
        { name: 'Property Management' },
        { name: 'Investment Consulting' },
      ],
    },

    // Contact Info Section
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'address',
          type: 'text',
          defaultValue: '123 Real Estate Ave, New York, NY 10001',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '+1 (555) 123-4567',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'contact@realestate.com',
          required: true,
        },
      ],
    },

    // Copyright Section
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2024 RealEstate. All rights reserved. Built with Next.js and Payload CMS.',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
   
  },
}
