import { SectionWrapper } from "@/components/section-wrapper";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // get current year

  return (
    <footer className="bg-black py-4">
      <div className="container">
        <SectionWrapper>
          <div className="text-center text-sm text-muted-foreground">
            © {currentYear} CliffBytes. Made With Love. All rights reserved.
          </div>
        </SectionWrapper>
      </div>
    </footer>
  );
}
