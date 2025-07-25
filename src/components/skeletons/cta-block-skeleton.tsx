import { Skeleton } from '@/components/ui/skeleton'

export function CTABlockSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
      </div>
    </section>
  )
}
