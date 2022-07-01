import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: IconType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
