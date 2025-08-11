import { Helmet } from 'react-helmet-async'
import SearchBar, { SearchValues } from '@/components/home/SearchBar'
import MapView from '@/components/map/MapView'
import PropertyCard from '@/components/properties/PropertyCard'
import { sampleProperties, Property } from '@/features/properties/sampleData'
import { useState } from 'react'

const Index = () => {
  const [results, setResults] = useState<Property[]>(sampleProperties)

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

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Lagos Real Estate Portal | Buy, Rent, Pay</title>
        <meta name="description" content="Search verified Lagos properties, explore on map, save favorites, and pay rent or utilities." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative border-b border-border bg-gradient-to-b from-background to-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
          <h1 className="text-balance bg-clip-text text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Find verified properties in Lagos
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Search by location, price, and amenities. Explore neighborhoods on the interactive map.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)]">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-4 text-xl font-semibold">Map View</h2>
        <MapView properties={results} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="mb-4 text-xl font-semibold">Featured Properties</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Index
