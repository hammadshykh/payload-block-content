'use client'

import { useEffect, useMemo, useState } from 'react'

import { Check, X } from '@blend-metrics/icons'
import { deleteCookie, setCookie } from 'cookies-next'
import { useShallow } from 'zustand/react/shallow'
import { Language, languages } from '@/lib/languages'
import { COOKIE_NAME, DEFAULT_FLAG, DO_NOT_TRANSLATE, ELEMENT_ID } from '@/constants/google'
import Image from 'next/image'
import { callAll, cn } from '@/lib/utils'
import loadGoogleTranslateScript from '@/scripts/google-transalate'
import { useLanguageStore } from '@/store/language-store'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

const googleTranslateElementInit = () => {
  if (!window.google) return

  const includedLanguages = languages.map((language) => language.value.slice(6)).join(',')

  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'auto',
      autoDisplay: false,
      includedLanguages,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      gaTrack: false,
    },
    ELEMENT_ID,
  )
}

export const LanguageSelector = () => {
  const [inputValue, setInputValue] = useState('')
  const [language, onLanguageChange] = useLanguageStore(
    useShallow((s) => [s.language, s.onLanguageChange]),
  )
  const close = useLanguageStore((s) => s.close)

  useEffect(() => {
    const loadScript = async () => {
      try {
        await loadGoogleTranslateScript()
        window.googleTranslateElementInit = googleTranslateElementInit
      } catch (error) {
        console.error('Failed to load Google Translate:', error)
      }
    }

    loadScript()
  }, [language])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    deleteCookie(COOKIE_NAME)
  }

  const resetInputValue = () => setInputValue('')

  const onChange = (selectedLanguage: Language) => {
    onLanguageChange(selectedLanguage)
    resetInputValue()
    deleteCookie(COOKIE_NAME)
    setCookie(COOKIE_NAME, selectedLanguage.value)
  }

  const filteredLanguages = useMemo(
    () =>
      languages
        .filter(
          (lang) =>
            lang.country.toLowerCase().includes(inputValue.toLowerCase()) ||
            lang.label.toLowerCase().includes(inputValue.toLowerCase()),
        )
        .sort((a, b) => a.country.localeCompare(b.country)),
    [inputValue],
  )

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex items-center gap-x-2">
          <input
            className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search language..."
            onChange={onInputChange}
            value={inputValue}
          />
          <button
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={callAll(resetInputValue, close)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-6 relative">
            <Image
              src={language?.flag || DEFAULT_FLAG}
              alt="Current language"
              fill
              className="object-contain"
            />
            <div id={ELEMENT_ID} className="hidden" />
          </div>
          <span className={cn('font-medium', DO_NOT_TRANSLATE)}>
            {language?.country || 'Global'} - {language?.label || 'English'}
          </span>
        </div>
        <Check className="w-5 h-5 text-blue-500" />
      </div>

      <div className="mt-4 max-h-96 overflow-y-auto">
        {inputValue && filteredLanguages.length === 0 ? (
          <p className="p-2 text-red-500">No languages found</p>
        ) : (
          <div className="space-y-2">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.value}
                className={`flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-100 ${
                  language?.value === lang.value ? 'bg-blue-50' : ''
                }`}
                onClick={() => onChange(lang)}
              >
                <div className="w-8 h-6 relative mr-3">
                  <Image src={lang.flag} alt={lang.label} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <p className={cn('font-medium', DO_NOT_TRANSLATE)}>{lang.country}</p>
                  <p className={cn('text-sm text-gray-500', DO_NOT_TRANSLATE)}>{lang.label}</p>
                </div>
                {language?.value === lang.value && <Check className="w-5 h-5 text-blue-500" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
