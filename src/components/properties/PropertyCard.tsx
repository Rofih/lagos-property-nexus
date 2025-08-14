
import { Property } from '@/features/properties/sampleData'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShieldCheck, MapPin, Calendar, Eye } from 'lucide-react'
import { useFavorites } from '@/features/favorites/store'
import { Link } from 'react-router-dom'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { ids, toggle } = useFavorites()
  const isFav = ids.includes(property.id)

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-[var(--shadow-elevated-strong)] hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={`${property.title} in ${property.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          {property.verified && (
            <Badge variant="default" className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
              <ShieldCheck className="mr-1 h-3 w-3" />
              Verified
            </Badge>
          )}
          <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm capitalize">
            {property.type}
          </Badge>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggle(property.id)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-background hover:scale-110"
          aria-pressed={isFav}
          aria-label="Save to favorites"
        >
          <Heart className={`h-4 w-4 ${isFav ? 'fill-current text-red-500' : ''}`} />
        </button>

        {/* Quick View Button */}
        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button variant="secondary" size="sm" className="h-8 px-3 text-xs backdrop-blur-sm" asChild>
            <Link to={`/property/${property.id}`}>
              <Eye className="mr-1 h-3 w-3" />
              Quick View
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="line-clamp-1 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {property.title}
          </h3>
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" />
            {property.location}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-primary">
            ₦{property.price.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            per {property.type === 'office' ? 'month' : 'year'}
          </div>
        </div>

        {/* Property Features */}
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            Available Now
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 font-medium" 
            asChild
          >
            <Link to={`/property/${property.id}`}>
              View Details
            </Link>
          </Button>
          <Button
            variant={isFav ? 'default' : 'outline'}
            size="sm"
            onClick={() => toggle(property.id)}
            className="px-3"
            aria-pressed={isFav}
            aria-label="Save to favorites"
          >
            <Heart className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard
