import { Helmet } from 'react-helmet-async'
import { sampleProperties } from '@/features/properties/sampleData'

const GovernmentDashboard = () => {
  const pending = sampleProperties.filter((p) => !p.verified)

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Government Dashboard | Lagos Real Estate</title>
        <meta name="description" content="Verify properties and view compliance reports." />
        <link rel="canonical" href="/dashboard/government" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Verification Requests</h1>
        <div className="mt-6 space-y-3">
          {pending.length === 0 ? (
            <div className="rounded-lg border border-border p-6 text-muted-foreground">No pending verifications.</div>
          ) : (
            pending.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.location}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary">Reject</button>
                  <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90">Approve</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default GovernmentDashboard
