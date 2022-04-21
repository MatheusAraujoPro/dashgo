import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavSectionLinkProps extends LinkProps {
  title: string;
  // Tipo recomendado para quando eu for passar a referência de um componente
  //<Icon as={RerefebciaDoComponente} fontSize="20" />
  icon: ElementType;
  href: string;
}

export function NavSectionLink({
  title,
  icon,
  href,
  ...rest
}: NavSectionLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="midium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
