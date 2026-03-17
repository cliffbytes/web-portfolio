import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/tailwind-icon.svg",
    role: "Title, Company",
    location: "Remote",
    startYear: "2022",
    endYear: "Present",
    bulletPoints: ["1", "2", "3"],
  },
];

const educationData = [
  {
    date: "Jan 2021 - Mar 2021",
    imageUrl: "/images/icon/42.jpg",
    title: "Software Developer Bootcamp",
    subtitle: "42Belgium — Brussels, BE",
  },
  {
    date: "Mar 2020 - Aug 2020",
    imageUrl: "/images/icon/ulb.jpg",
    title: "UX Research Specialization",
    subtitle: "U.L.B. - Brussels, BE",
  },
  {
    date: "Sep 2015 - May 2019",
    imageUrl: "/images/icon/skillsfactory.jpg",
    title: "Data-Driven Marketing & Innovation",
    subtitle: "Skillsfactory — Brussels, BE",
  },
];

const recentProjects = [
  {
    title: "Web Portfolio",
    description: "Build my very own first portfolio !",
    repositoryUrl: "https://github.com/cliffbytes/web-portfolio",
    websiteUrl: "https://web-portfolio-cb.vercel.app/",
  },
];

const olderProjects: never[] = [];

export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    recentProjects,
    olderProjects,
  });
};
