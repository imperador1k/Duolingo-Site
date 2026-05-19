import React from "react";
import { AlertCircle, AlertTriangle, ShieldAlert } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "danger";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-l-[#58cc02]",
    bg: "bg-green-50",
    icon: AlertCircle,
    iconColor: "text-[#58cc02]",
    titleColor: "text-[#46a302]",
  },
  warning: {
    border: "border-l-[#ffc800]",
    bg: "bg-amber-50",
    icon: AlertTriangle,
    iconColor: "text-[#ffc800]",
    titleColor: "text-amber-700",
  },
  danger: {
    border: "border-l-[#ff4b4b]",
    bg: "bg-red-50",
    icon: ShieldAlert,
    iconColor: "text-[#ff4b4b]",
    titleColor: "text-red-700",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`border-l-4 ${style.border} ${style.bg} rounded-r-xl p-4 my-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.iconColor}`} />
        <div className="flex-1">
          {title && (
            <div className={`font-extrabold text-sm uppercase tracking-wide mb-1 ${style.titleColor}`}>
              {title}
            </div>
          )}
          <div className="text-[#4b4b4b] text-sm leading-relaxed [&>p]:mb-2 last:[&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
