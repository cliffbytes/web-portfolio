import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl pt-32 mx-auto px-4 sm:px-7">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-foreground font-semibold">Blog</h1>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          A collection of writing on software development, design, and
          everything in between.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="grid grid-rows-[auto_1fr_auto] overflow-hidden h-full transition-opacity hover:opacity-70">
                <CardHeader className="pb-2">
                  <h3 className="text-base">{post.title}</h3>
                  <p className="text-xs font-semibold text-foreground/80">
                    {post.date}
                  </p>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="flex items-center text-sm text-muted-foreground">
                    Read more
                    <ArrowRight className="ml-1 size-3" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
    </section>
  );
}
