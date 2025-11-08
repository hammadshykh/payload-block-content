import type { CollectionConfig } from 'payload'
import { revalidateDeleteProperty, revalidateProperty } from './hooks/revalidateProperty'

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'location', 'propertyType', 'status'],
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
        description: 'URL-friendly identifier for the property',
      },
    },
    // Featured Image (main image)
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // Gallery images
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
    // Property details
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'Formatted price (e.g., "$850,000")',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'bedrooms',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'bathrooms',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'sqft',
      type: 'number',
      required: true,
      min: 0,
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
      required: true,
    },
    {
      name: 'yearBuilt',
      type: 'number',
      required: true,
    },
    // Status field
    // {
    //   name: 'status',
    //   type: 'select',
    //   options: [
    //     // Make sure these values EXACTLY match your PostgreSQL enum
    //     { label: 'For Sale', value: 'for_sale' }, // Note underscore instead of hyphen
    //     { label: 'For Rent', value: 'for_rent' },
    //     { label: 'Sold', value: 'sold' },
    //   ],
    //   defaultValue: 'for_sale', // Must match one of the enum values
    // },
    // Features array
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    // Parking
    {
      name: 'parking',
      type: 'number',
      required: true,
      min: 0,
    },
    // Agent relationship
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      required: true,
    },
    // Related Properties (new field)
    {
      name: 'relatedProperties',
      type: 'relationship',
      relationTo: 'properties',
      hasMany: true,
      admin: {
        description: 'Select similar or related properties',
      },
      filterOptions: ({ id }) => {
        // Exclude current property from related properties
        return {
          id: {
            not_equals: id,
          },
        }
      },
    },
    // Neighborhood info
    {
      name: 'neighborhood',
      type: 'group',
      fields: [
        {
          name: 'walkScore',
          type: 'number',
          min: 0,
          max: 100,
        },
        {
          name: 'transitScore',
          type: 'number',
          min: 0,
          max: 100,
        },
        {
          name: 'bikeScore',
          type: 'number',
          min: 0,
          max: 100,
        },
        // Schools sub-group
        {
          name: 'schools',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'rating',
              type: 'number',
              min: 0,
              max: 10,
            },
            {
              name: 'distance',
              type: 'text',
            },
          ],
        },
        // Amenities sub-group
        {
          name: 'amenities',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'type',
              type: 'text',
            },
            {
              name: 'distance',
              type: 'text',
            },
          ],
        },
      ],
    },
    // SEO Metadata
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Custom title for search engines',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Custom description for search engines',
          },
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
  hooks: {
    // afterChange: [revalidateProperty],
    afterDelete: [revalidateDeleteProperty],
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create' && !data.slug) {
          // Auto-generate slug from title if not provided
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        }
        return data
      },
    ],
  },
}
