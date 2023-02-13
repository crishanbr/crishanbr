import { IconButton, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemProps } from "./types";
import { navs } from "./constants";

export const Navigation = ({ href, label, icon }: NavItemProps) => {
   const router = useRouter()
   const active = router.asPath === href ? true : false;

   const handleClick = (e: any) => {
      e.preventDefault()
      router.push(href)
   }

   return (
      <Tooltip label={label}>
         <IconButton
            as={Link}
            href={href}
            aria-label={label}
            variant="outline"
            size="sm"
            fontSize="md"
            onClick={handleClick}
            isActive={active}
         >
            {icon({ style: { cursor: "pointer" } })}
         </IconButton>
      </Tooltip>
   );
};

export const NavItem = () => {
   return (
      <>
         {navs.map((nav) => (
            <Navigation key={nav.label} {...nav} />
         ))}
      </>
   );
};