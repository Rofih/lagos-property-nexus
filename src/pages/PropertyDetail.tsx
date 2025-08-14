import { useParams } from 'react-router-dom'
import { sampleProperties } from '@/features/properties/sampleData'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { useFavorites } from '@/features/favorites/store'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

const PropertyDetail = () => {
  const { id } = useParams()
  const property = sampleProperties.find((p) => p.id === id)
  const { ids, toggle } = useFavorites()

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  if (!property) return <div className="p-6">Property not found.</div>

  const isFav = ids.includes(property.id)

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: property.latitude || 6.5244,
    lng: property.longitude || 3.3792,
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

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
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Property Location on Map</h2>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      </section>
    </main>
  )
}

export default PropertyDetail
