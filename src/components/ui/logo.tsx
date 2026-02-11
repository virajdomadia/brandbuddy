import { cn } from "@/lib/utils";

export function Logo({ className, size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
    const sizeClasses = {
        small: "text-3xl",
        default: "text-6xl",
        large: "text-7xl md:text-9xl",
    };

    return (
        <div className={cn("font-display font-bold tracking-tighter leading-[0.85] select-none flex flex-col", sizeClasses[size], className)}>
            <span>BRANDS</span>
            <span>BUDDY</span>
            <div className="w-3 h-3 bg-accent rounded-full mt-1 ml-1 inline-block" />
        </div>
    );
}
