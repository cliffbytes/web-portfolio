"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FaqsCard = ({ faqsList, idx }: { faqsList: FaqItem; idx: number }) => {
  const [state, setState] = useState(true);

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={() => setState(!state)}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-foreground font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-muted-foreground ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-muted-foreground ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        className={`transition-all duration-300 overflow-hidden ${state ? "max-h-96" : "max-h-0"}`}
      >
        <div>
          <p className="text-muted-foreground pb-5">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const faqsList: FaqItem[] = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
];

export default function FAQPage() {
  return (
    <section className="leading-relaxed max-w-7xl pt-32 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-foreground font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Common questions about my work, experience, and how I approach
          building software.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
