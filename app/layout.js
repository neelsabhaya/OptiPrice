import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Price Tracker - Never Miss a Price Drop",
  description:
    "Track product prices across e-commerce sites and get alerts on price drops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <ThemeProvider>
          {children}

          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
