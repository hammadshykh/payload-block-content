import type { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the page (e.g., "about-us", "contact")',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        // Hero Slider Block
        {
          slug: 'hero-slider',
          labels: {
            singular: 'Hero Slider',
            plural: 'Hero Sliders',
          },
          fields: [
            {
              name: 'slides',
              type: 'array',
              required: true,
              minRows: 1,
              maxRows: 5,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                },
              ],
            },
          ],
        },
        // CTA Block
        {
          slug: 'cta-block',
          labels: {
            singular: 'CTA Block',
            plural: 'CTA Blocks',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'buttonText',
              type: 'text',
            },
            {
              name: 'buttonLink',
              type: 'text',
            },
          ],
        },
        // Card Grid Block (Real Estate Properties)
        {
          slug: 'card-grid',
          labels: {
            singular: 'Property Grid',
            plural: 'Property Grids',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'cards',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Unique ID for the property',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'price',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'location',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'bedrooms',
                  type: 'number',
                },
                {
                  name: 'bathrooms',
                  type: 'number',
                },
                {
                  name: 'sqft',
                  type: 'number',
                },
                {
                  name: 'propertyType',
                  type: 'select',
                  options: [
                    { label: 'House', value: 'House' },
                    { label: 'Apartment', value: 'Apartment' },
                    { label: 'Condo', value: 'Condo' },
                    { label: 'Townhouse', value: 'Townhouse' },
                    { label: 'Loft', value: 'Loft' },
                    { label: 'Penthouse', value: 'Penthouse' },
                  ],
                },
                {
                  name: 'yearBuilt',
                  type: 'number',
                },
                {
                  name: 'features',
                  type: 'array',
                  fields: [
                    {
                      name: 'feature',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Testimonials Block
        {
          slug: 'testimonials',
          labels: {
            singular: 'Testimonials',
            plural: 'Testimonials',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'testimonials',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'rating',
                  type: 'number',
                  min: 1,
                  max: 5,
                  defaultValue: 5,
                },
              ],
            },
          ],
        },
        // Contact Form Block
        {
          slug: 'contact-form',
          labels: {
            singular: 'Contact Form',
            plural: 'Contact Forms',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'showContactInfo',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
        // Service List Block
        {
          slug: 'service-list',
          labels: {
            singular: 'Service List',
            plural: 'Service Lists',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'services',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'icon',
                  type: 'select',
                  options: [
                    { label: 'Home', value: 'home' },
                    { label: 'Search', value: 'search' },
                    { label: 'Dollar Sign', value: 'dollar' },
                    { label: 'Users', value: 'users' },
                    { label: 'File', value: 'file' },
                    { label: 'Key', value: 'key' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // SEO Fields
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title (leave blank to use page title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO description for search engines',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'SEO keywords (comma separated)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Social media sharing image',
          },
        },
      ],
    },
    // Page Status
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: true,
  },
}

export default Pages
