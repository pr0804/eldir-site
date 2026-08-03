import { ReactNode } from "react";

type CardProps = {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
};

export default function Card({ icon, title, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 md:p-8 hover:border-eldir-blue transition-colors">
      {icon && (
        <div className="mb-4 text-eldir-blue" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="mb-3">{title}</h3>
      {children && (
        <div className="font-sans text-sm text-gray-600 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}