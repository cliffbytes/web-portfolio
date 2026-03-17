import Link from "next/link";
import { SectionWrapper } from "../section-wrapper";
import { Card } from "../ui/card";

type Project = {
  imageUrl?: string;
  title: string;
  description: string;
  repositoryUrl?: string;
  websiteUrl?: string;
  stack?: string[];
};

export default async function Projects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/page-data`,
    { cache: "no-store" },
  );
  const {
    recentProjects,
    olderProjects,
  }: { recentProjects: Project[]; olderProjects: Project[] } = await res.json();

  return (
    <section>
      <div className="container">
        <SectionWrapper className="space-y-10">
          <div className="space-y-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Recent Projects
            </p>

            <div className="grid grid-cols-1 gap-10">
              {recentProjects?.map((project, idx) => (
                <Card key={idx} className="flex flex-col gap-5 p-5 bg-black">
                  <h5 className="font-semibold">{project.title}</h5>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex gap-4">
                    {project.repositoryUrl && (
                      <Link
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.websiteUrl && (
                      <Link
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Website
                      </Link>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Older Projects
            </p>

            <div className="grid grid-cols-1 gap-10">
              {olderProjects?.map((project, idx) => (
                <Card key={idx} className="flex flex-col gap-5 p-5">
                  <h5 className="font-semibold">{project.title}</h5>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex gap-4">
                    {project.repositoryUrl && (
                      <Link
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.websiteUrl && (
                      <Link
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Website
                      </Link>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
