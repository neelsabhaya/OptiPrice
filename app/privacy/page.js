export const metadata = {
  title: "Privacy Policy | OptiPrice",
  description: "How OptiPrice collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Legal</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          We only collect what we need to run OptiPrice, and we never sell your data.
        </p>
      </header>

      <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          We store your account info, tracked product links, and alert preferences to provide the service.
          Pricing history is kept to generate charts. Email addresses are used solely for authentication and alerts.
        </p>
        <p>
          We use industry-standard encryption in transit and at rest. You can request deletion of your data at any time
          by contacting support.
        </p>
        <p>
          Third-party analytics are limited to anonymous usage metrics to improve reliability. No personal data is
          shared with advertisers.
        </p>
      </section>
    </main>
  );
}
