import { Helmet } from 'react-helmet-async'

const FirmDashboard = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Real Estate Firm Dashboard | Lagos Real Estate</title>
        <meta name="description" content="Manage agents, properties and leads." />
        <link rel="canonical" href="/dashboard/firm" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Real Estate Firm</h1>
        <div className="mt-6 rounded-lg border border-border p-6 text-muted-foreground">
          Agent management, company profile, and lead tracking coming soon.
        </div>
      </section>
    </main>
  )
}

export default FirmDashboard
