import { useSession } from "next-auth/react";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { PersonaModel } from "../persona-services/models";
import { PersonaCardContextMenu } from "./persona-card-context-menu";
import { ViewPersona } from "./persona-view";
import { StartNewPersonaChat } from "./start-new-persona-chat";

interface Props {
  persona: PersonaModel;
  showContextMenu: boolean;
}

export const PersonaCard: FC<Props> = (props) => {
  const { data: sessionData } = useSession(); // Correctly destructured session data
  const isAdmin = sessionData?.user?.isAdmin || false; // Safely access 'isAdmin'
  const isFlashQuery = props.persona.name === "FlashQuery";

  return (
    <Card key={props.persona.id} className="flex flex-col">
      <CardHeader className="flex flex-row">
        <CardTitle className="flex-1">{props.persona.name}</CardTitle>
        {props.showContextMenu && (
          <div>
            <PersonaCardContextMenu persona={props.persona} />
          </div>
        )}
      </CardHeader>
      <CardContent className="text-muted-foreground flex-1">
        {props.persona.description}
      </CardContent>
      <CardFooter className="gap-1 content-stretch">
        {(!isFlashQuery || isAdmin) && props.showContextMenu && (
          <ViewPersona persona={props.persona} />
        )}
        <StartNewPersonaChat persona={props.persona} />
      </CardFooter>
    </Card>
  );
};
