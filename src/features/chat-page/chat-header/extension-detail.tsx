import { FC, useState } from "react";
import { ExtensionModel } from "@/features/extensions-page/extension-services/models";
import { Button } from "@/features/ui/button";
import { ScrollArea } from "@/features/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/features/ui/sheet";
import { Switch } from "@/features/ui/switch";
import { Database } from "lucide-react";
import { chatStore } from "../chat-store";

interface Props {
  extensions: Array<ExtensionModel>;
  chatThreadId: string;
  disabled: boolean;
}

export const ExtensionDetail: FC<Props> = (props) => {
  const [selectedExtensionId, setSelectedExtensionId] = useState<string | null>(null);

  const toggleInstall = async (isChecked: boolean, extensionId: string) => {
    if (isChecked) {
      setSelectedExtensionId(extensionId); // Select the new extension
      await chatStore.AddExtensionToChatThread(extensionId);
      // Ensure only the selected extension is installed
      props.extensions.forEach(async (ext) => {
        if (ext.id !== extensionId) {
          await chatStore.RemoveExtensionFromChatThread(ext.id);
        }
      });
    } else {
      setSelectedExtensionId(null); // Deselect the extension
      await chatStore.RemoveExtensionFromChatThread(extensionId);
    }
  };

  const isInstalled = (extensionId: string) => selectedExtensionId === extensionId;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="gap-2" disabled={props.disabled} aria-label="Current Chat Extensions Menu">
          <Database size={16} /> {selectedExtensionId ? 1 : 0} ({props.extensions.length})
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[480px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Databases</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 -mx-6 flex" type="always">
          <div className="pb-6 px-6 flex gap-4 flex-col flex-1">
            {props.extensions.map((extension) => (
              <div
                className="flex gap-2 p-4 items-center justify-between border rounded-md"
                key={extension.id}
              >
                <div className="flex flex-col gap-2 flex-1">
                  <div>{extension.name}</div>
                  <div className="text-muted-foreground">
                    {extension.description}
                  </div>
                </div>
                <div>
                  <Switch
                    checked={isInstalled(extension.id)}
                    onCheckedChange={(e) => toggleInstall(e, extension.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
