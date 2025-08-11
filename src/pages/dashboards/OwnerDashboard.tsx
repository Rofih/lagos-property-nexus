import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import PropertyCard from '@/components/properties/PropertyCard'
import { sampleProperties } from '@/features/properties/sampleData'

const OwnerDashboard = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Owner Dashboard | Lagos Real Estate</title>
        <meta name="description" content="Manage your property listings, leads, and payments." />
        <link rel="canonical" href="/dashboard/owner" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Property Owner</h1>
        <div className="mt-4 flex items-center gap-2">
          <Button variant="hero">Add New Property</Button>
          <Button variant="secondary">Bulk Upload</Button>
        </div>
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-medium">My Listings</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default OwnerDashboard
