"use client";

import { useSession } from "next-auth/react";
import { DropdownMenuItemWithIcon } from "@/features/chat-page/chat-menu/chat-menu-item";
import { RevalidateCache } from "@/features/common/navigation-helpers";
import { LoadingIndicator } from "@/features/ui/loading";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { PersonaModel } from "../persona-services/models";
import { DeletePersona } from "../persona-services/persona-service";
import { personaStore } from "../persona-store";

interface Props {
  persona: PersonaModel;
}

type DropdownAction = "edit" | "delete";

export const PersonaCardContextMenu: FC<Props> = (props) => {
  const { data } = useSession();
  const isAdmin = data?.user?.isAdmin || false;
  const isFlashQuery = props.persona.name === "FlashQuery";
  const { isLoading, handleAction } = useDropdownAction({
    persona: props.persona,
  });

  if (!isAdmin || !isFlashQuery) {
    return null;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {isLoading ? (
            <LoadingIndicator isLoading={isLoading} />
          ) : (
            <MoreVertical size={18} />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItemWithIcon
            onClick={() => personaStore.updatePersona(props.persona)}
          >
            <Pencil size={18} />
            <span>Edit</span>
          </DropdownMenuItemWithIcon>
          <DropdownMenuItemWithIcon
            onClick={async () => await handleAction("delete")}
          >
            <Trash size={18} />
            <span>Delete</span>
          </DropdownMenuItemWithIcon>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const useDropdownAction = (props: { persona: PersonaModel }) => {
  const { persona } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async (action: DropdownAction) => {
    setIsLoading(true);
    switch (action) {
      case "delete":
        if (
          window.confirm(`Are you sure you want to delete ${persona.name}?`)
        ) {
          await DeletePersona(persona.id);
          RevalidateCache({
            page: "persona",
          });
        }

        break;
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    handleAction,
  };
};
