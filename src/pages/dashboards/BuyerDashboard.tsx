import { Helmet } from 'react-helmet-async'
import PropertyCard from '@/components/properties/PropertyCard'
import { sampleProperties } from '@/features/properties/sampleData'
import { useFavorites } from '@/features/favorites/store'

const BuyerDashboard = () => {
  const { ids } = useFavorites()
  const favorites = sampleProperties.filter((p) => ids.includes(p.id))

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Buyer Dashboard | Lagos Real Estate</title>
        <meta name="description" content="View your saved properties and transactions." />
        <link rel="canonical" href="/dashboard/buyer" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Your Dashboard</h1>
        <div className="mt-6">
          <h2 className="mb-3 text-lg font-medium">Favorites</h2>
          {favorites.length === 0 ? (
            <div className="rounded-lg border border-border p-6 text-muted-foreground">No favorites yet.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-medium">Transaction History</h2>
          <div className="rounded-lg border border-border p-6 text-muted-foreground">No transactions yet.</div>
        </div>
      </section>
    </main>
  )
}

export default BuyerDashboard
