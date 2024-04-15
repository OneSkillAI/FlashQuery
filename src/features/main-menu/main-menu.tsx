import { MenuTrayToggle } from "@/features/main-menu/menu-tray-toggle";
import {
  Menu,
  MenuBar,
  MenuItem,
  MenuItemContainer,
  menuIconProps,
} from "@/ui/menu";
import {
  Vault,
  Home,
  MessageCirclePlus,
  Database,
  History,
  Drama,
} from "lucide-react";
import { getCurrentUser } from "../auth-page/helpers";
import { MenuLink } from "./menu-link";
import { UserProfile } from "./user-profile";

export const MainMenu = async () => {
  const user = await getCurrentUser();

  return (
    <Menu>
      <MenuBar>
        <MenuItemContainer>
          <MenuItem tooltip="Home" asChild>
            <MenuLink href="/chat" ariaLabel="Go to the Home page">
              <Home {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuTrayToggle />
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Chat">
            <MenuLink href="/chat" ariaLabel="Go to the Chat page">
              <MessageCirclePlus {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          {user.isAdmin && (
            <MenuItem tooltip="Assistants">
              <MenuLink href="/persona" ariaLabel="Go to the Persona configuration page">
                <Drama {...menuIconProps} />
              </MenuLink>
            </MenuItem>
          )}
          {user.isAdmin && (
            <MenuItem tooltip="Databases">
              <MenuLink href="/extensions" ariaLabel="Go to the Databases configuration page">
                <Database {...menuIconProps} />
              </MenuLink>
            </MenuItem>
          )}
          {user.isAdmin && (
            <MenuItem tooltip="Vault">
              <MenuLink href="/prompt" ariaLabel="Go to the Prompt Vault configuration page">
                <Vault {...menuIconProps} />
              </MenuLink>
            </MenuItem>
          )}
          {user.isAdmin && (
            <>
              <MenuItem tooltip="Reporting">
                <MenuLink href="/reporting" ariaLabel="Go to the Admin reports" >
                  <History {...menuIconProps} />
                </MenuLink>
              </MenuItem>
            </>
          )}
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Profile">
            <UserProfile />
          </MenuItem>
        </MenuItemContainer>
      </MenuBar>
    </Menu>
  );
};
