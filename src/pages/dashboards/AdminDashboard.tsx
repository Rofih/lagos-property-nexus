import { Helmet } from 'react-helmet-async'

const AdminDashboard = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Admin Dashboard | Lagos Real Estate</title>
        <meta name="description" content="Manage users, properties and transactions." />
        <link rel="canonical" href="/dashboard/admin" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6">Users management</div>
          <div className="rounded-lg border border-border p-6">Properties management</div>
          <div className="rounded-lg border border-border p-6">Transactions overview</div>
          <div className="rounded-lg border border-border p-6">Reports</div>
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
