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

export default function Projects() {
  const recentProjects: Project[] = [
    {
      title: "Cairos EU - Website",
      description: "Website redesign for a software development company.",
      websiteUrl: "https://cairos-eu-com.vercel.app/",
    },
    {
      title: "Siege Social BE - Website",
      description: "Website redesign for a business domiciliation company.",
      websiteUrl: "https://siegesocial-be.vercel.app/",
    },
  ];

  const olderProjects: Project[] = [
    {
      imageUrl: "",
      title: "Counter-Strike:Source - Server",
      description:
        "Setting up a complete counter-strike:source dedicated server using steamcmd, hosting and community website.",
      websiteUrl: "https://cstrike.42web.io/",
    },
    {
      imageUrl: "",
      title: "World Of Warcraft - Server",
      description:
        "Setting up a complete world of warcraft private server using azerothcore-wotlk, hosting and community website.",
      websiteUrl: "https://warlegend.gamer.gd/",
    },
  ];
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
