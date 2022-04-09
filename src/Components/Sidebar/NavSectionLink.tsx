import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavSectionLinkProps extends LinkProps {
  title: string;
  // Tipo recomendado para quando eu for passar a referência de um componente
  //<Icon as={RerefebciaDoComponente} fontSize="20" />
  icon: ElementType;
}

export function NavSectionLink({ title, icon, ...rest }: NavSectionLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="midium">
        {title}
      </Text>
    </Link>
  );
}
