import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-sans font-medium text-sm md:text-base transition-colors";

  const variantStyles = {
    primary: "bg-eldir-blue text-white hover:bg-blue-600",
    secondary:
      "border border-eldir-black text-eldir-black hover:border-eldir-blue hover:text-eldir-blue",
  };

  const classes = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}