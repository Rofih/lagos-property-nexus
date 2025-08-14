
import { Helmet } from 'react-helmet-async'
import SearchBar, { SearchValues } from '@/components/home/SearchBar'
import PropertyCard from '@/components/properties/PropertyCard'
import { sampleProperties, Property } from '@/features/properties/sampleData'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, TrendingUp, Users, MapPin } from 'lucide-react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import type { Libraries } from '@react-google-maps/api'

const libraries: Libraries = ["places"];

const Index = () => {
  const [results, setResults] = useState<Property[]>(sampleProperties)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const handleSearch = (values: SearchValues) => {
    const filtered = sampleProperties.filter((p) => {
      const matchLoc = values.location ? p.location.toLowerCase().includes(values.location.toLowerCase()) : true
      const matchType = values.type ? p.type === values.type : true
      const matchMin = values.minPrice ? p.price >= values.minPrice : true
      const matchMax = values.maxPrice ? p.price <= values.maxPrice : true
      return matchLoc && matchType && matchMin && matchMax
    })
    setResults(filtered)
  }

  const stats = [
    { icon: ShieldCheck, label: 'Verified Properties', value: '1,200+' },
    { icon: Users, label: 'Happy Clients', value: '5,000+' },
    { icon: TrendingUp, label: 'Successful Deals', value: '3,500+' },
    { icon: MapPin, label: 'Lagos Areas', value: '25+' },
  ]

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: 6.5244, // Default to Lagos, Nigeria
    lng: 3.3792,
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Lagos Real Estate Portal | Buy, Rent, Pay</title>
        <meta name="description" content="Search verified Lagos properties, explore on map, save favorites, and pay rent or utilities." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Trusted by 5,000+ Lagos residents
            </Badge>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
              Find your perfect
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"> home </span>
              in Lagos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Discover verified properties across Lagos with our advanced search tools, interactive maps, and secure payment systems. Your dream property awaits.
            </p>
          </div>

          {/* Enhanced Search Card */}
          <div className="mt-12 mx-auto max-w-5xl">
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-[var(--shadow-elevated-strong)]">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-card-foreground">Property Search</h2>
                <Badge variant="secondary" className="text-xs">
                  {results.length} properties found
                </Badge>
              </div>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Explore Properties on Map
            </h2>
            <p className="mt-2 text-muted-foreground">
              Interactive map view to discover properties in your preferred neighborhoods
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            >
              {results.map((property) => (
                property.latitude && property.longitude && (
                  <MarkerF
                    key={property.id}
                    position={{
                      lat: property.latitude,
                      lng: property.longitude,
                    }}
                    title={property.title}
                  />
                )
              ))}
            </GoogleMap>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Featured Properties
              </h2>
              <p className="mt-2 text-muted-foreground">
                Handpicked properties from trusted developers and verified owners
              </p>
            </div>
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
          
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">No properties found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to find your dream property?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied customers who found their perfect homes through our platform
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="px-8">
              Start Your Search
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index