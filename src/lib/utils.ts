import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function callAll(...cbs: (((...args: any[]) => any) | undefined)[]) {
  return (...args: any[]) => cbs.forEach((cb) => cb?.(...args))
}
