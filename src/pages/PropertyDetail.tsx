import { useParams } from 'react-router-dom'
import { sampleProperties } from '@/features/properties/sampleData'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { useFavorites } from '@/features/favorites/store'

const PropertyDetail = () => {
  const { id } = useParams()
  const property = sampleProperties.find((p) => p.id === id)
  const { ids, toggle } = useFavorites()

  if (!property) return <div className="p-6">Property not found.</div>

  const isFav = ids.includes(property.id)

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{property.title} | Lagos Real Estate</title>
        <meta name="description" content={`View details for ${property.title} in ${property.location}.`} />
        <link rel="canonical" href={`/property/${property.id}`} />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">{property.title}</h1>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {property.images.map((src, i) => (
              <img key={i} src={src} alt={`${property.title} photo ${i+1}`} className="w-full rounded-md border border-border" loading="lazy" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="text-muted-foreground">Location</div>
              <div>{property.location}</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-muted-foreground">Price</div>
              <div className="text-xl font-semibold">₦{property.price.toLocaleString()}</div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="hero">Contact Owner/Firm</Button>
              <Button variant={isFav ? 'default' : 'outline'} onClick={() => toggle(property.id)}>
                {isFav ? 'Saved' : 'Save to Favorites'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PropertyDetail
