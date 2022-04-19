import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavSectionLink } from "./NavSectionLink";

export function SidebarNav() {
  return (
    <>
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavSectionLink title="Dashboard" icon={RiDashboardLine} />
          <NavSectionLink title="Usuários" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavSectionLink title="Formulários" icon={RiInputMethodLine} />
          <NavSectionLink title="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </>
  );
}
