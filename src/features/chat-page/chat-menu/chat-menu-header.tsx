import { CreateChatAndRedirect } from "../chat-services/chat-thread-service";
import { ChatContextMenu } from "./chat-context-menu";


export const ChatMenuHeader = () => {
  return (
    <div className="flex p-2 px-3 justify-end">
      <form action={CreateChatAndRedirect} className="flex gap-2 pr-3">
        {}
        <span className="self-center text-sm font-medium">Clear Chat History</span>
        <ChatContextMenu />
      </form>
    </div>
  );
};
