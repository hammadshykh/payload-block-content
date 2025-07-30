import { create } from 'zustand'
import { Language } from '@/lib/languages'

interface LanguageStore {
  language: Language | null
  open: boolean
  onLanguageChange: (language: Language) => void
  onOpenChange: (open: boolean) => void
  close: () => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: null,
  open: false,
  onLanguageChange: (language) => set({ language }),
  onOpenChange: (open) => set({ open }),
  close: () => set({ open: false }),
}))
