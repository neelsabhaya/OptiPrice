"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getPriceHistory } from "@/app/actions";
import { Loader2 } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function PriceChart({ productId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    async function loadData() {
      const history = await getPriceHistory(productId);

      const chartData = history.map((item) => {
        const date = new Date(item.checked_at);
        return {
          // Format for Canada Timezone (Eastern Time)
          displayDate: date.toLocaleString("en-CA", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "America/Toronto", // Standard Canadian Eastern Time
          }),
          price: parseFloat(item.price),
          fullDate: date.toLocaleString("en-CA", {
            timeZone: "America/Toronto",
            dateStyle: "medium",
            timeStyle: "short",
          }),
        };
      });

      setData(chartData);
      setLoading(false);
    }

    loadData();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 text-gray-500 dark:text-gray-400 w-full">
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
        Loading chart...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400 w-full">
        No price history yet. Check back after the first daily update!
      </div>
    );
  }

  return (
    <div className="w-full">
      <h4 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Price History
      </h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme === "dark" ? "#475569" : "#e5e7eb"}
          />
          <XAxis 
            dataKey="displayDate" 
            tick={{ fontSize: 10, fill: theme === "dark" ? "#9ca3af" : "#6b7280" }} 
            stroke={theme === "dark" ? "#475569" : "#e5e7eb"}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: theme === "dark" ? "#9ca3af" : "#6b7280" }} 
            stroke={theme === "dark" ? "#475569" : "#e5e7eb"}
          />
          <Tooltip
            labelKey="fullDate"
            contentStyle={{
              backgroundColor: theme === "dark" ? "#1e293b" : "white",
              border: `1px solid ${theme === "dark" ? "#475569" : "#e5e7eb"}`,
              borderRadius: "6px",
              color: theme === "dark" ? "#f1f5f9" : "#000",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FA5D19"
            strokeWidth={2}
            dot={{ fill: "#FA5D19", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
