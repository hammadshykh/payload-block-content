export interface Language {
  label: string
  value: string
  country: string
  flag: string
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
    label: 'Deutsch',
    value: '/auto/de',
    country: 'Germany',
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg',
  },
  // {
  //   label: 'العربية',
  //   value: '/auto/ar',
  //   country: 'Saudi Arabia',
  //   flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg',
  // },
]
