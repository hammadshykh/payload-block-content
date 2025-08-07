import { Card, CardContent } from '@/components/ui/card'
import { Home, Search, DollarSign, Users, FileText, Key } from 'lucide-react'

interface ServiceListProps {
  block: any
}

const iconMap = {
  home: Home,
  search: Search,
  dollar: DollarSign,
  users: Users,
  file: FileText,
  key: Key,
}

export default function ServiceList({ block }: ServiceListProps) {
  const { title, services } = block

  if (!services || services.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const IconComponent =
              service.icon && iconMap[service.icon as keyof typeof iconMap]
                ? iconMap[service.icon as keyof typeof iconMap]
                : Home

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-green-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ccf081] transition-colors">
                    <IconComponent className="w-8 h-8 text-primary-green  transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>

                  {service.description && (
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
