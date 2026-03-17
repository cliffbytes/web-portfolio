"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

type TechIcon = { src: string; alt: string; invert?: boolean };
type TechGroup = { label: string; icons: TechIcon[] };

const techGroups: TechGroup[] = [
  {
    label: "Languages",
    icons: [
      { src: "/images/icons/javascript-icon.svg", alt: "JavaScript" },
      { src: "/images/icons/typescript-icon.svg", alt: "TypeScript" },
      { src: "/images/icons/c-icon.svg", alt: "C" },
      { src: "/images/icons/cplusplus-icon.svg", alt: "C++" },
      { src: "/images/icons/rust-icon.svg", alt: "Rust", invert: true },
      { src: "/images/icons/go-icon.svg", alt: "Go" },
      { src: "/images/icons/python-icon.svg", alt: "Python" },
    ],
  },
  {
    label: "Frontend",
    icons: [
      { src: "/images/icons/react-icon.svg", alt: "React" },
      { src: "/images/icons/nextjs-icon.svg", alt: "Next.js" },
      { src: "/images/icons/vitejs-icon.svg", alt: "Vite" },
      { src: "/images/icons/tailwindcss-icon.svg", alt: "Tailwind CSS" },
      { src: "/images/icons/tauri-icon.svg", alt: "Tauri" },
      { src: "/images/icons/electron-icon.svg", alt: "Electron" },
    ],
  },
  {
    label: "Backend",
    icons: [
      { src: "/images/icons/nodejs-icon.svg", alt: "Node.js" },
      { src: "/images/icons/nestjs-icon.svg", alt: "NestJS" },
      { src: "/images/icons/mysql-icon.svg", alt: "MySQL" },
      { src: "/images/icons/postgresql-icon.svg", alt: "PostgreSQL" },
      { src: "/images/icons/prisma-icon.svg", alt: "Prisma", invert: true },
      { src: "/images/icons/zod-icon.svg", alt: "Zod" },
    ],
  },
  {
    label: "DevOps & Systems",
    icons: [
      { src: "/images/icons/git-icon.svg", alt: "Git" },
      { src: "/images/icons/debian-icon.svg", alt: "Debian" },
      { src: "/images/icons/archlinux-icon.svg", alt: "Arch Linux" },
      { src: "/images/icons/kali-icon.svg", alt: "Kali Linux" },
      { src: "/images/icons/docker-icon.svg", alt: "Docker" },
      { src: "/images/icons/aws-icon.svg", alt: "AWS" },
      { src: "/images/icons/apple-icon.svg", alt: "Apple" },
    ],
  },
  {
    label: "AI",
    icons: [
      { src: "/images/icons/claude-icon.svg", alt: "Claude" },
      { src: "/images/icons/openai-icon.svg", alt: "OpenAI", invert: true },
      { src: "/images/icons/perplexity-icon.svg", alt: "Perplexity" },
      { src: "/images/icons/mistral-icon.svg", alt: "Mistral" },
    ],
  },
  {
    label: "Package Managers",
    icons: [
      { src: "/images/icons/npm-icon.svg", alt: "npm" },
      { src: "/images/icons/pnpm-icon.svg", alt: "pnpm" },
      { src: "/images/icons/yarn-icon.svg", alt: "Yarn" },
      { src: "/images/icons/bun-icon.svg", alt: "Bun" },
      { src: "/images/icons/cargo-icon.svg", alt: "Cargo" },
    ],
  },
  {
    label: "Build Tools",
    icons: [
      { src: "/images/icons/turbopack-icon.svg", alt: "Turbopack" },
      { src: "/images/icons/turborepo-icon.svg", alt: "Turborepo" },
      { src: "/images/icons/vitejs-icon.svg", alt: "Vite" },
    ],
  },
];

export default function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techGroups.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = techGroups[currentIndex];

  return (
    <section className="bg-black py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${currentIndex}`}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {current.label}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-8 h-8">
            <AnimatePresence initial={false} mode="popLayout">
              {current.icons.map((icon, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 12, filter: "blur(6px)", scale: 0.5 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.2,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={36}
                    height={36}
                    className={`h-9 w-auto${icon.invert ? " invert" : ""}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
