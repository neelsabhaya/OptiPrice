export const metadata = {
  title: "Features | OptiPrice",
  description: "See what OptiPrice can do for you.",
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Multi-site tracking",
      detail: "Monitor prices across major e-commerce stores with one dashboard.",
    },
    {
      title: "Instant alerts",
      detail: "Email and in-app notifications the moment a price drops below your target.",
    },
    {
      title: "Historical trends",
      detail: "Charts that show how prices move over time so you buy at the right moment.",
    },
    {
      title: "Smart deduping",
      detail: "We clean messy product titles and variations to keep your list tidy.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Product</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Features</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          OptiPrice keeps you ahead of price changes with accurate tracking, smart alerts,
          and clear insights you can act on.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ title, detail }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
