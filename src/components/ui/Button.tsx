import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "sm" | "auto";

const variants: Record<ButtonVariant, string> = {
  // base design asli
  primary:
    "bg-slate-900 text-gray-100 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline:
    "border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-100",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
};

const sizes: Record<ButtonSize, string> = {
  md: "w-[8rem] md:w-[10rem] py-2 text-base md:text-lg",
  sm: "w-auto px-4 py-1.5 text-sm",
  auto: "w-auto px-5 py-2 text-base md:text-lg",
};

const baseStyles = cn(
  "inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-lg transition active:scale-95",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
  // untuk elemen non-button (Link/a) yang diberi aria-disabled
  "aria-disabled:pointer-events-none aria-disabled:opacity-50",
);

interface ButtonVariantsOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariantsOptions = {}) {
  return cn(baseStyles, sizes[size], variants[variant], className);
}

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantsOptions, "className"> {
  icon?: React.ReactNode;
}

export default function Button({
  variant,
  size,
  icon,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
