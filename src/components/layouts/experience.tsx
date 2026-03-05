"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/section-wrapper";

type ExperienceItem = {
  icon: string;
  role: string;
  startYear: string;
  endYear: string;
  location: string;
  bulletPoints: string[];
};

export default function Experience() {
  const [experienceData, setExperienceData] = useState<ExperienceItem[] | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExperienceData(data?.experienceData);
      } catch (error) {
        console.error("Error fetching experience:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <SectionWrapper>
          <div className="space-y-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Experience
            </p>

            <div className="space-y-10">
              {experienceData?.map((value) => (
                <div key={value.role} className="flex flex-col gap-5 pb-10">
                  <Image src={value.icon} alt="icon" width={32} height={20} />

                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <h5 className="font-semibold">{value.role}</h5>

                    <div className="flex items-center gap-2 rounded-lg px-3 py-1.5">
                      <div
                        className={`h-2 w-4 rounded-sm ${
                          value.endYear === "Present"
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                      <p className="text-sm text-muted-foreground">
                        {value.startYear} – {value.endYear} · {value.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {value.bulletPoints?.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
