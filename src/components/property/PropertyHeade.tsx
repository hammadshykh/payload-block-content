import { Button } from '@/components/ui/button'
import { Grid, List, SortAsc } from 'lucide-react'

interface PropertiesHeaderProps {
  totalResults: number
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
  onSortChange: (sort: string) => void
}

export const PropertiesHeader = ({
  totalResults,
  viewMode,
  onViewModeChange,
  onSortChange,
}: PropertiesHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-luxe-dark mb-2">Properties</h1>
        <p className="text-luxe-gray">Showing {totalResults} properties available</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <SortAsc className="w-4 h-4 text-luxe-gray" />
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-luxe-green bg-white"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="size">Size</option>
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border border-gray-200 rounded-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewModeChange('grid')}
            className={`px-3 py-2 ${
              viewMode === 'grid'
                ? 'bg-luxe-green text-white hover:bg-luxe-green-light'
                : 'text-luxe-gray hover:text-luxe-green'
            }`}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewModeChange('list')}
            className={`px-3 py-2 ${
              viewMode === 'list'
                ? 'bg-luxe-green text-white hover:bg-luxe-green-light'
                : 'text-luxe-gray hover:text-luxe-green'
            }`}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
