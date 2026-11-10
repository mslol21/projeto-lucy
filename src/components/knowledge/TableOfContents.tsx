"use client";

import React, { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import { TableOfContentItem } from "@/data/knowledge-data";

interface TableOfContentsProps {
  items: TableOfContentItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -60% 0%" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Sumário da página"
      className="p-5 bg-white/90 rounded-2xl rounded-tr-[36px] border border-stone-200/90 shadow-2xs backdrop-blur-xs sticky top-24"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-stone-100 text-[#17385B]">
        <ListFilter className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
        <h2 className="text-xs font-semibold tracking-wider uppercase">Neste Artigo</h2>
      </div>

      <ul className="space-y-2 text-xs sm:text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 px-2.5 rounded-lg transition-colors leading-snug ${
                  isActive
                    ? "bg-[#17385B] text-white font-medium"
                    : "text-[#415A77] hover:text-[#17385B] hover:bg-stone-100"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
