export const metadata = {
  title: "Cookie Policy | OptiPrice",
  description: "Details on cookies and similar technologies used by OptiPrice.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Legal</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          We keep cookies minimal and focused on account security and performance.
        </p>
      </header>

      <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Essential cookies handle authentication and session management so you stay signed in securely.
        </p>
        <p>
          Performance cookies capture anonymous usage to help improve uptime and speed. You can block non-essential
          cookies in your browser; the app will continue to work with essential cookies only.
        </p>
      </section>
    </main>
  );
}
