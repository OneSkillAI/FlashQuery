import { HeroButton } from "@/features/ui/hero";
import { Database } from "lucide-react";
import { extensionStore } from "../extension-store";

export const NewExtension = () => {
  return (
    <HeroButton
      title="New Database"
      description="Create a new database schema connection"
      icon={<Database />}
      onClick={() => extensionStore.newAndOpenSlider()}
    />
  );
};
