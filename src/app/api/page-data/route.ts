import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/tailwind-icon.svg",
    role: "Product Designer, Tailwind",
    location: "Remote",
    startYear: "2022",
    endYear: "Present",
    bulletPoints: [
      "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
      "Collaborated with engineers and product managers to ship features faster",
      "Designed components used in a system adopted by 4+ internal teams",
    ],
  },
  {
    icon: "/images/icon/asana-icon.svg",
    role: "UI/UX Designer - Asana",
    location: "New York, NY",
    startYear: "2019",
    endYear: "2022",
    bulletPoints: [
      "Created design systems for client projects across finance and healthcare",
      "Conducted user testing and research to validate designs",
      "Helped junior designers grow via mentorship",
    ],
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

const projectOverview = {
  caseStudies: [
    { name: "Wellnest", url: "#" },
    { name: "ScoutHire", url: "#" },
  ],
  sideProjects: [
    { name: "Formless", url: "#" },
    { name: "Gridsnap", comingSoon: true },
    { name: "OrbitPay Mobile App", comingSoon: true },
    { name: "Siteflow Page Builder", comingSoon: true },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    projectOverview,
  });
};
