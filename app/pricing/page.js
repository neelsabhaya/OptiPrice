export const metadata = {
  title: "Pricing | OptiPrice",
  description: "Choose a plan that fits your tracking needs.",
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: ["Track 5 products", "Daily price checks", "Email alerts"],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    features: ["Track 50 products", "Hourly price checks", "Alert filters", "CSV export"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "contact us",
    features: ["Unlimited products", "API access", "Priority support", "SLA available"],
  },
];

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">Pricing</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Fair plans for every team</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Start free, grow with Pro, or talk with us for scale. No setup fees, cancel anytime.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 flex flex-col gap-4 shadow-sm bg-white dark:bg-slate-900/60 border-gray-200 dark:border-slate-800 ${
              plan.highlight ? "ring-2 ring-orange-500" : ""
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-orange-500">{plan.name}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {plan.features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto inline-flex justify-center rounded-md bg-orange-500 px-4 py-2 text-white font-semibold hover:bg-orange-600 transition-colors">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
