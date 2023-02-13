import { Button, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemProps } from "./types";
import { navs } from "./constants";

const Navigation = ({ label, href, icon }: NavItemProps) => {
   const router = useRouter()
   const active = router.asPath === href ? true : false;

   const handleClick = (e: any) => {
      e.preventDefault()
      router.push(href)
   }

   return (
      <Button
         as={Link}
         gap={2}
         href={href}
         isActive={active}
         variant="outline"
         width="4.5rem"
         height="4.5rem"
         flexDirection="column"
         onClick={handleClick}>
         <Icon
            as={icon}
            fontSize="xl"
         />
         <Text
            fontSize="xs" fontWeight="normal">
            {label}
         </Text>
      </Button>
   );
};

export const TabItem = () => {
   return (
      <>
         {navs.map((nav) => (
            <Navigation key={nav.label} {...nav} />
         ))}
      </>
   );
};

export default TabItem;