import { cn } from "@/utils/cn";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";
type BadgeSize = "md" | "sm";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  // base design asli, tidak diubah
  default: "bg-white border-slate-200 text-slate-700",
  primary: "bg-blue-50 border-blue-200 text-blue-700",
  success: "bg-emerald-50 border-emerald-200 text-emerald-700",
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  danger: "bg-red-50 border-red-200 text-red-700",
};

const sizes: Record<BadgeSize, string> = {
  // md = ukuran asli
  md: "px-3.5 py-1.5 text-xs md:text-sm",
  sm: "px-2.5 py-1 text-[11px] md:text-xs",
};

export default function Badge({
  variant = "default",
  size = "md",
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-x-1.5 rounded-full border font-semibold",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
