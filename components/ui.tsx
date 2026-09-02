import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", outline: "border bg-transparent hover:bg-muted", ghost: "hover:bg-muted" }, size: { default: "h-10 px-4 py-2", sm: "h-9 px-3", icon: "h-9 w-9" } },
  defaultVariants: { variant: "default", size: "default" },
});
export function Button({ className, variant, size, asChild = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-lg border bg-card text-card-foreground", className)} {...props} />; }
export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", className)} {...props}>{children}</div>; }
export function Progress({ value, className }: { value: number; className?: string }) { return <div className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}><div className="h-full bg-primary transition-all" style={{ width: `${value}%` }} /></div>; }
