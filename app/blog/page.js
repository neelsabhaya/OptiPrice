export const metadata = {
  title: "Blog | OptiPrice",
  description: "Updates, guides, and product news from OptiPrice.",
};

const posts = [
  {
    title: "How to time your purchase with price history",
    summary: "A simple framework for using charts to decide when to buy.",
  },
  {
    title: "What makes alerts reliable",
    summary: "How we avoid false positives and keep your inbox clean.",
  },
  {
    title: "Behind the scenes of our tracker",
    summary: "A peek at the crawling and deduping engine that powers OptiPrice.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Blog</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Insights and updates</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Practical tips on saving money, product updates, and lessons from building OptiPrice.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{post.summary}</p>
            <span className="text-orange-500 font-semibold text-sm">Coming soon</span>
          </article>
        ))}
      </div>
    </main>
  );
}
