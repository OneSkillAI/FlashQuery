"use client";

import { AI_NAME } from "@/features/theme/theme-config";
import { Hero } from "@/features/ui/hero";
import { Database } from "lucide-react";
import { AISearch } from "./ai-search-issues";
import { BingSearch } from "./bing-search";
import { NewExtension } from "./new-extension";

export const ExtensionHero = () => {
  return (
    <Hero
      title={
        <>
          <Database size={36} strokeWidth={1.5} /> Databases
        </>
      }
      description={`Create database schema connections to use with your assistants`}
    >
      <NewExtension />
     /* <BingSearch />
      <AISearch />*/
    </Hero>
  );
};
