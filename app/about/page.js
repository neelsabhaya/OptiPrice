export const metadata = {
  title: "About | OptiPrice",
  description: "Learn about the team and mission behind OptiPrice.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Company</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About OptiPrice</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          We built OptiPrice to take the guesswork out of buying. With accurate tracking and
          thoughtful alerts, you know exactly when to purchase.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our mission</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Make price intelligence accessible to everyone, from individual shoppers to teams.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What we value</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Speed, reliability, and clarity. We prioritize accurate data and respectful alerts.
          </p>
        </div>
      </section>
    </main>
  );
}
