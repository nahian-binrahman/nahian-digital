import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 !text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] border border-blue-400/30",
        secondary:
          "bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-300 dark:border-white/10 shadow-xs",
        outline:
          "bg-white/70 text-slate-800 dark:bg-transparent dark:text-stone-200 hover:bg-white dark:hover:bg-white/5 border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/40 shadow-xs",
        ghost:
          "bg-transparent text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
        accent:
          "bg-blue-600 !text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)]",
      },
      size: {
        sm: "h-9 px-3.5 text-xs tracking-wide",
        md: "h-11 px-5 text-sm tracking-tight",
        lg: "h-12 px-7 text-base tracking-tight font-semibold",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, target, rel, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {props.children}
        </a>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
