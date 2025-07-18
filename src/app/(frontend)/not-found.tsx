import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Home className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>

        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/contact-us">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
