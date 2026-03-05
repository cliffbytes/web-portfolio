"use client";

import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/section-wrapper";

type EducationItem = {
  date: string;
  title: string;
  subtitle: string;
};

export default function Education() {
  const [educationData, setEducationData] = useState<EducationItem[] | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Error fetching education:", error);
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
              Education
            </p>

            <div className="relative">
              <div className="hidden sm:block absolute left-[15.9rem] top-0 bottom-0 w-px bg-border" />

              {educationData?.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row gap-4 ${
                    index !== educationData.length - 1 ? "mb-10 sm:mb-16" : ""
                  }`}
                >
                  <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                    <p className="text-base text-muted-foreground">
                      {item.date}
                    </p>

                    <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-1 z-10 rounded-full border border-border bg-background p-1.5">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 flex-1 sm:pl-16">
                    <h5 className="font-semibold text-foreground">
                      {item.title}
                    </h5>
                    <p className="text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
