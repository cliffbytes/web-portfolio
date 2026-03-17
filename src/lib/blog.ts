import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      ...(data as {
        title: string;
        date: string;
        description: string;
      }),
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    ...(data as {
      title: string;
      date: string;
      description: string;
    }),
  };
}
