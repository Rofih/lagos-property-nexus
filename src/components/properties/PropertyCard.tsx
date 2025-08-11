import { Property } from '@/features/properties/sampleData'
import { Button } from '@/components/ui/button'
import { Heart, ShieldCheck } from 'lucide-react'
import { useFavorites } from '@/features/favorites/store'
import { Link } from 'react-router-dom'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { ids, toggle } = useFavorites()
  const isFav = ids.includes(property.id)

  return (
    <article className="rounded-lg border border-border p-3 shadow-sm hover:shadow-[var(--shadow-elevated)] transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
        <img
          src={property.images[0]}
          alt={`${property.title} in ${property.location}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold leading-tight">{property.title}</h3>
          {property.verified && (
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <ShieldCheck className="h-4 w-4" /> Verified
            </span>
          )}
        </div>
        <div className="text-sm text-muted-foreground">{property.location}</div>
        <div className="text-sm">₦{property.price.toLocaleString()}</div>
        <div className="mt-2 flex items-center gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link to={`/property/${property.id}`}>View</Link>
          </Button>
          <Button
            variant={isFav ? 'default' : 'outline'}
            size="sm"
            onClick={() => toggle(property.id)}
            aria-pressed={isFav}
            aria-label="Save to favorites"
          >
            <Heart className={isFav ? 'fill-current' : ''} />
            {isFav ? 'Saved' : 'Save'}
          </Button>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard
