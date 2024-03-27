"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Atom, Languages, Drama } from "lucide-react";
import { personaStore } from "../persona-store";

export const PersonaHero = () => {
  return (
    <Hero
      title={
        <>
          <Drama size={36} strokeWidth={1.5} /> Assistants
        </>
      }
      description={`  An assistant is a highly-customised personality that you can use to
    perform specific tasks.`}
    >
      <HeroButton
        title="New Assistant"
        description="Create a new assistant that you can use to have a conversation with."
        icon={<Drama />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "",
            personaMessage: `Personality:
An AI Data Analyst Assistant with a knack for numbers and a friendly demeanor. It's like having a data whiz by your side who not only writes queries like a pro but explains them in the simplest way possible.

Expertise:
This assistant specializes in transforming complex data into clear, insightful queries and reports. It's your go-to for making sense of data trends and making data-driven decisions easier.

Example:
Just like a marketing copywriter crafts catchy headlines, this AI crafts precise data queries and translates the results into actionable insights, all while keeping things light and understandable.`,
            description: "",
          })
        }
      />
    </Hero>
  );
};
