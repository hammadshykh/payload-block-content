import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, SlidersHorizontal } from 'lucide-react'

interface PropertyFiltersProps {
  onSearchChange: (search: string) => void
  onTypeChange: (type: string) => void
  onPriceRangeChange: (range: string) => void
  onLocationChange: (location: string) => void
}

export const PropertyFilters = ({
  onSearchChange,
  onTypeChange,
  onPriceRangeChange,
  onLocationChange,
}: PropertyFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange(value)
  }

  return (
    <div className="rounded-lg shadow-card bg-gray-100 p-6 mb-8 w-full">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-primary-green-light" />
        <h2 className="text-lg font-semibold text-primary-green">Filter Properties</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-green-light w-4 h-4" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 border-gray-200 focus:border-primary-green focus:ring-primary-green w-full"
          />
        </div>

        {/* Property Type Filter */}
        <Select onValueChange={onTypeChange}>
          <SelectTrigger className="border-gray-200 focus:border-primary-green focus:ring-primary-green w-full">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range Filter */}
        <Select onValueChange={onPriceRangeChange}>
          <SelectTrigger className="border-gray-200 focus:border-primary-green focus:ring-primary-green w-full">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-500000">$0 - $500K</SelectItem>
            <SelectItem value="500000-1000000">$500K - $1M</SelectItem>
            <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
            <SelectItem value="2000000+">$2M+</SelectItem>
          </SelectContent>
        </Select>

        {/* Location Filter */}
        <Select onValueChange={onLocationChange}>
          <SelectTrigger className="border-gray-200 focus:border-primary-green focus:ring-primary-green w-full">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="manhattan">Manhattan, NY</SelectItem>
            <SelectItem value="beverly-hills">Beverly Hills, CA</SelectItem>
            <SelectItem value="miami">Miami, FL</SelectItem>
            <SelectItem value="chicago">Chicago, IL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between items-center mt-4 w-full">
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm('')
            onSearchChange('')
            onTypeChange('all')
            onPriceRangeChange('all')
            onLocationChange('all')
          }}
          className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-colors"
        >
          Clear All
        </Button>
        <Button className="bg-primary-green hover:bg-primary-green-light text-white">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
