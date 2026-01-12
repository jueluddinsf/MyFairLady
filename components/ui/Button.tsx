import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "secondary";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5":
                            variant === "default",
                        "bg-white text-gray-900 shadow-sm hover:bg-gray-50 border border-gray-100":
                            variant === "secondary",
                        "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground":
                            variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "h-9 px-4 text-xs": size === "sm",
                        "h-11 px-8 text-sm": size === "md",
                        "h-14 px-10 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
