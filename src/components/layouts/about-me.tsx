import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/section-wrapper";

export default function AboutMe() {
  const services: string[] = [];

  return (
    <section>
      <div className="container">
        <SectionWrapper>
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                About me
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Hey there. Software developer based in Brussels, currently vibe
                coding complex applications and occasionally losing my mind
                refactoring them.
              </h2>

              <p className="text-muted-foreground"></p>
            </div>

            {/* <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Services
              </p>

              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Badge key={service} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
