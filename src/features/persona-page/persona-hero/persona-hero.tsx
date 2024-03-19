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
[Describe the personality e.g. the tone of voice, the way they speak, the way they act, etc.]

Expertise:
[Describe the expertise of the personality e.g. Customer service, Marketing copywriter, etc.]

Example:
[Describe an example of the personality e.g. a Marketing copywriter who can write catchy headlines.]`,
            description: "",
          })
        }
      />
    </Hero>
  );
};
