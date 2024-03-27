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
        "Store your most useful prompts and share them with your team."
      }
    >
      <HeroButton
        title="Add New Prompt"
        description="Build your own prompt template."
        icon={<Book />}
        onClick={() => promptStore.newPrompt()}
      />      
    </Hero>
  );
};
