'use client'

import { DO_NOT_TRANSLATE } from '@/constants/google'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { Globe021, ChevronDown } from '@blend-metrics/icons'
import { PopoverTrigger } from '../ui/popover'

export const LanguagePopoverTrigger = () => {
  const language = useLanguageStore((state) => state.language)

  return (
    <PopoverTrigger className="flex items-center gap-2">
      <Globe021 className="h-5 w-5 flex-none" />
      <span className={cn('inline-flex gap-x-1.5 items-center', DO_NOT_TRANSLATE)}>
        <span className={DO_NOT_TRANSLATE}>
          {language ? `${language.country}/${language.label}` : 'Global/English'}
        </span>
        <ChevronDown className="h-4 w-4 flex-none group-data-[state=open]:-rotate-180 transition-transform duration-300" />
      </span>
    </PopoverTrigger>
  )
}
