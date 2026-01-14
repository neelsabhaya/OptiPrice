export const metadata = {
  title: "Terms of Service | OptiPrice",
  description: "Terms that govern your use of OptiPrice.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Legal</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Please review these terms before using OptiPrice.
        </p>
      </header>

      <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          OptiPrice is provided on a best-effort basis. While we work to keep prices accurate, we cannot guarantee
          completeness and you should verify prices on the retailer site before purchasing.
        </p>
        <p>
          You are responsible for how you use the service. Do not misuse OptiPrice for scraping beyond provided
          functionality or for unlawful purposes.
        </p>
        <p>
          We may update these terms and will notify users of material changes. Continued use after changes constitutes
          acceptance.
        </p>
      </section>
    </main>
  );
}
