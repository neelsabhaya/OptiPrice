export const metadata = {
  title: "Contact | OptiPrice",
  description: "Reach the OptiPrice team for support and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Contact</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Talk with the team</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Questions, support, or partnerships—send us a note and we will reply within one business day.
        </p>
      </header>

      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
          <p className="text-gray-600 dark:text-gray-300">contact@optiprice.com</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Support hours</p>
          <p className="text-gray-600 dark:text-gray-300">Monday - Friday, 9am to 6pm (EST)</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Response time</p>
          <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
        </div>
      </div>
    </main>
  );
}
