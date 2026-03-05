import { cn } from "@/lib/utils";

export function SectionWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20", className)}
    >
      {children}
    </div>
  );
}
