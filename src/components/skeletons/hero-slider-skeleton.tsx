import { Skeleton } from '@/components/ui/skeleton'

export function HeroSliderSkeleton() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />

      {/* Centered content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center text-white max-w-5xl w-full space-y-6">
          {/* Simulated Title */}
          <Skeleton className="h-12 md:h-16 w-3/4 mx-auto rounded" />

          {/* Simulated Subtitle */}
          <Skeleton className="h-6 md:h-8 w-2/3 mx-auto rounded" />

          {/* Simulated Button */}
          <div className="mt-8">
            <Skeleton className="h-12 w-48 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Optional: Fake arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <Skeleton className="w-12 h-12 rounded-full bg-white/20" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <Skeleton className="w-12 h-12 rounded-full bg-white/20" />
      </div>

      {/* Optional: Fake indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-full bg-white/30" />
        ))}
      </div>
    </div>
  )
}
