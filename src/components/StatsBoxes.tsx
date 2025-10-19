import React from "react";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

type Props = { className?: string };

export default function StatsBoxes({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center bg-card/80 border border-border rounded-xl p-4 sm:p-6 text-center shadow-sm"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
            {s.value}
          </div>
          <div className="mt-1 text-sm sm:text-base text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}