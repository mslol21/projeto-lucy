import React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { EvidenceLevel, EVIDENCE_LEVELS_INFO } from "@/data/knowledge-data";

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  customLabel?: string;
  showDescription?: boolean;
}

export function EvidenceBadge({ level, customLabel, showDescription = false }: EvidenceBadgeProps) {
  const info = EVIDENCE_LEVELS_INFO[level];

  return (
    <div className="inline-flex flex-col gap-1.5">
      <div className="inline-flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${info.badgeBg} shadow-2xs`}
        >
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{customLabel || info.title}</span>
        </span>
      </div>

      {showDescription && (
        <div className={`text-xs p-3 rounded-xl border flex items-start gap-2 ${info.textBg}`}>
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" aria-hidden="true" />
          <p className="leading-relaxed">{info.description}</p>
        </div>
      )}
    </div>
  );
}
