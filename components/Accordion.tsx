"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  items: string[];
};

export default function Accordion({ data }: { data: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {data.map((entry, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={entry.title} className="border-b border-gray-100">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-poppins font-medium text-eldir-black">
                {entry.title}
              </span>
              <ChevronDown
                size={20}
                className={`text-eldir-blue transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <ul className="pb-4 space-y-2 pl-4">
                {entry.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}