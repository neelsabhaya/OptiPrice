export const metadata = {
  title: "How it Works | OptiPrice",
  description: "Learn how OptiPrice tracks and alerts you on price changes.",
};

const steps = [
  {
    title: "Add a product",
    detail: "Paste any product URL from Amazon, Walmart, or other supported stores.",
  },
  {
    title: "Set your target",
    detail: "Tell us the price you want. We monitor around the clock for drops.",
  },
  {
    title: "Get alerts",
    detail: "We notify you instantly by email and in-app when the price meets your target.",
  },
  {
    title: "Decide with data",
    detail: "View historical charts to understand trends before you buy.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-10">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Guide</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">How OptiPrice Works</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From link to alert in under a minute. Here is what happens after you add a product.
        </p>
      </header>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex gap-4 items-start rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5"
          >
            <div className="h-10 w-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
              {index + 1}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
