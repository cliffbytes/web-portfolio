"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [];

export default function Header() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="px-10">
      <nav
        data-state={menuState ? "active" : "inactive"}
        className={cn(
          "fixed z-20 w-full transition-all duration-300",
          isScrolled && "bg-background/80 backdrop-blur border-b border-border",
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center gap-2">
              {/* <LogoIcon /> */}
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item, index) => (
                <Button key={index} asChild variant="ghost" size="sm">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMenuState(!menuState)}
              >
                {menuState ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </Button>
            </div>
          </div>

          {menuState && (
            <div className="lg:hidden pb-6">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
