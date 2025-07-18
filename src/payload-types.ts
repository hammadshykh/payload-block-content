/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji'

export interface Config {
  auth: {
    users: UserAuthOperations
  }
  blocks: {}
  collections: {
    users: User
    media: Media
    pages: Page
    'payload-locked-documents': PayloadLockedDocument
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  collectionsJoins: {}
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>
    media: MediaSelect<false> | MediaSelect<true>
    pages: PagesSelect<false> | PagesSelect<true>
    'payload-locked-documents':
      | PayloadLockedDocumentsSelect<false>
      | PayloadLockedDocumentsSelect<true>
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>
  }
  db: {
    defaultIDType: number
  }
  globals: {}
  globalsSelect: {}
  locale: null
  user: User & {
    collection: 'users'
  }
  jobs: {
    tasks: unknown
    workflows: unknown
  }
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string
    password: string
  }
  login: {
    email: string
    password: string
  }
  registerFirstUser: {
    email: string
    password: string
  }
  unlock: {
    email: string
    password: string
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  sessions?:
    | {
        id: string
        createdAt?: string | null
        expiresAt: string
      }[]
    | null
  password?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id?: number
  alt?: string
  _key?: string | null
  updatedAt?: string
  createdAt?: string
  url?: string | null
  thumbnailURL?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  focalX?: number | null
  focalY?: number | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number
  document?:
    | ({
        relationTo: 'users'
        value: number | User
      } | null)
    | ({
        relationTo: 'media'
        value: number | Media
      } | null)
    | ({
        relationTo: 'pages'
        value: number | Page
      } | null)
  globalSlug?: string | null
  user: {
    relationTo: 'users'
    value: number | User
  }
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number
  user: {
    relationTo: 'users'
    value: number | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T
  createdAt?: T
  email?: T
  resetPasswordToken?: T
  resetPasswordExpiration?: T
  salt?: T
  hash?: T
  loginAttempts?: T
  lockUntil?: T
  sessions?:
    | T
    | {
        id?: T
        createdAt?: T
        expiresAt?: T
      }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T
  _key?: T
  updatedAt?: T
  createdAt?: T
  url?: T
  thumbnailURL?: T
  filename?: T
  mimeType?: T
  filesize?: T
  width?: T
  height?: T
  focalX?: T
  focalY?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T
  slug?: T
  layout?:
    | T
    | {
        hero?:
          | T
          | {
              Heading?: T
              subheading?: T
              image?: T
              cta_button?:
                | T
                | {
                    lable?: T
                    url?: T
                  }
              id?: T
              blockName?: T
            }
      }
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T
  globalSlug?: T
  user?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T
  key?: T
  value?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T
  batch?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}

export interface HeroSlide {
  title: string
  subtitle?: string
  image?: Media
  buttonText?: string
  buttonLink?: string
}

export interface HeroSliderBlock {
  blockType: 'hero-slider'
  slides: HeroSlide[]
}

export interface CTABlock {
  blockType: 'cta-block'
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export interface PropertyCard {
  image?: Media
  title: string
  price?: string
  location?: string
  description?: string
  link?: string
  id?: string
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  propertyType?: string
  yearBuilt?: number
  features?: string[]
  gallery?: Media[]
  parking?: number
  agent?: {
    name: string
    phone: string
    email: string
    image?: Media
  }
  neighborhood?: {
    walkScore?: number
    transitScore?: number
    bikeScore?: number
    schools?: Array<{
      name: string
      rating: number
      distance: string
    }>
    amenities?: Array<{
      name: string
      distance: string
      type: string
    }>
  }
}
export interface CardGridBlock {
  blockType: 'card-grid'
  title?: string
  cards: PropertyCard[]
}

export interface Testimonial {
  name: string
  title?: string
  content: string
  image?: Media
  rating?: number
}

export interface TestimonialsBlock {
  blockType: 'testimonials'
  title?: string
  testimonials: Testimonial[]
}

export interface ContactFormBlock {
  blockType: 'contact-form'
  title: string
  description?: string
}

export interface Service {
  title: string
  description?: string
  icon?: string
}

export interface ServiceListBlock {
  blockType: 'service-list'
  title?: string
  services: Service[]
}

export type Block =
  | HeroSliderBlock
  | CTABlock
  | CardGridBlock
  | TestimonialsBlock
  | ContactFormBlock
  | ServiceListBlock

export interface Page {
  id: string
  title: string
  slug: string
  blocks: Block[]
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
  updatedAt: string
  createdAt: string
}
