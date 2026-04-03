import Link from "next/link";
import { Metadata } from "next";
import { Image } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Type definition for an affiliate link
type AffiliateLink = {
  name: string;
  description: string;
  url: string;
  category: string;
  logo?: string;
};

// Sample affiliate data – replace with your own links and descriptions
const AFFILIATES: AffiliateLink[] = [
  {
    name: "Dynadot",
    description: "Domain registrar with great tools.",
    url: "http://www.dynadot.com?sq7d9Ir8V7j6pD",
    category: "Domains",
    logo: "",
  },
];

// Group affiliates by category
const groupedAffiliates = AFFILIATES.reduce(
  (acc, link) => {
    if (!acc[link.category]) acc[link.category] = [];
    acc[link.category].push(link);
    return acc;
  },
  {} as Record<string, AffiliateLink[]>,
);

// Optional: metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Support Me – Affiliate Links",
  description:
    "Use my affiliate links to support my work at no extra cost to you. Thank you!",
};

export default function AffiliatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto pt-32 px-4 sm:px-7 mb-16">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold text-foreground">
            Support My Work
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            If you like my work, support it by using these affiliate links. Same
            price for you, small commission for me.
          </p>
        </div>
      </section>

      {/* Affiliate Cards grouped by category */}
      <section className="max-w-3xl mx-auto px-4 pb-20 sm:px-7">
        {Object.entries(groupedAffiliates).map(([category, links]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 border-l-4 border-primary pl-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((affiliate, idx) => (
                <Link
                  key={idx}
                  href={affiliate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="transition hover:shadow-xl">
                    <CardHeader className="p-4 flex-row items-center gap-3">
                      {affiliate.logo ? (
                        <img
                          src={affiliate.logo}
                          alt={`${affiliate.name} logo`}
                          className="h-8 w-8 rounded-md object-contain"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
                          <Image className="h-4 w-4" />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-lg">
                          {affiliate.name}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {affiliate.category}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 text-sm leading-snug">
                      {affiliate.description}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Fallback if no affiliates are shown */}
        {AFFILIATES.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No affiliate links available yet. Check back soon!
          </div>
        )}
      </section>

      {/* Footer note */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>
          Thank you for considering supporting me! Every click and purchase
          through these links helps me keep creating free content.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} – All affiliate links are independently
          chosen.
        </p>
      </footer>
    </div>
  );
}
