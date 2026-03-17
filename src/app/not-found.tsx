import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-muted-foreground font-semibold">404 Error</h3>
          <p className="text-foreground text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-muted-foreground">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/" className={buttonVariants({ variant: "default" })}>
              Go home
            </Link>
            <Link
              href="mailto:"
              className={buttonVariants({ variant: "outline" })}
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
