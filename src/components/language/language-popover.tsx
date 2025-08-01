'use client'

import { useShallow } from 'zustand/react/shallow'
import { LanguagePopoverTrigger } from './language-popover-trigger'
import { LanguageSelector } from './language-selector'
import { useLanguageStore } from '@/store/language-store'
// import { useWiderThanMdLg } from '@/hooks/use-mobile'
import { Popover, PopoverContent } from '../ui/popover'
import { callAll } from '@/lib/utils'

export const LanguagePopover = ({
  onOpenChange,
  ...props
}: {
  onExitComplete?: () => void
  onOpenChange?: (details: { open: boolean }) => void
}) => {
  const [open, setIsOpen] = useLanguageStore(
    useShallow((state) => [state.open, state.onOpenChange]),
  )
  // const wider = useWiderThanMdLg()

  const handleOpenChange = (details: { open: boolean }) => {
    setIsOpen(details.open)
    onOpenChange?.(details)
  }

  // const show = wider && open

  return (
    <Popover
      modal={true}
      open={open}
      onOpenChange={callAll(handleOpenChange, onOpenChange)}
      {...props}
    >
      <LanguagePopoverTrigger />
      <PopoverContent className="w-full p-0" align="end" sideOffset={8}>
        <LanguageSelector />
      </PopoverContent>
    </Popover>
  )
}
