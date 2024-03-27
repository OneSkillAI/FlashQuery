"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Book, Vault, NotebookPen } from "lucide-react";
import { promptStore } from "../prompt-store";

export const PromptHero = () => {
  return (
    <Hero
      title={
        <>
          <Vault size={36} strokeWidth={1.5} /> Prompt Vault
        </>
      }
      description={
        "Prompt templates are statements or questions meant to help users get creative without having to come up with ideas from scratch."
      }
    >
      <HeroButton
        title="Add New Prompt"
        description="Build your own prompt template"
        icon={<Book />}
        onClick={() => promptStore.newPrompt()}
      />      
    </Hero>
  );
};
