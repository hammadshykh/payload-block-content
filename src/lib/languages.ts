export interface Language {
  label: string
  value: string
  country: string
  flag: string
  rtl?: boolean // Added RTL support for languages like Arabic
}

type Languages = Language[]

export const languages: Languages = [
  {
    label: 'English',
    value: '/auto/en',
    country: 'United States',
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
  },
  {
    label: 'Español',
    value: '/auto/es',
    country: 'Spain',
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
  },
  {
    label: 'Deutsch',
    value: '/auto/de',
    country: 'Germany',
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg',
  },
]
