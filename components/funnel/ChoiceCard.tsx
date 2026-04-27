"use client";

import { Check, type LucideIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
};

export default function ChoiceCard({
  icon: Icon,
  label,
  description,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-5 md:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 ${
        selected
          ? "border-[#0e3a5f] bg-[#eaf1f7]"
          : "border-[#e3dfd8] bg-white hover:border-[#0e3a5f]/40 hover:bg-[#f7f5f2]"
      }`}
    >
      {Icon && (
        <div
          className={`shrink-0 w-12 h-12 rounded-xl grid place-items-center transition-colors ${
            selected
              ? "bg-[#0e3a5f] text-white"
              : "bg-[#f7f5f2] text-[#0e3a5f]"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-[#1f2428] text-base md:text-lg leading-tight">
          {label}
        </div>
        {description && (
          <div className="text-sm text-[#5c6470] mt-1 leading-relaxed">
            {description}
          </div>
        )}
      </div>
      <div
        className={`shrink-0 w-6 h-6 rounded-full grid place-items-center transition-all ${
          selected
            ? "bg-[#0e3a5f] text-white"
            : "border-2 border-[#e3dfd8]"
        }`}
      >
        {selected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
      </div>
    </button>
  );
}
