import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { CrishanLogo } from "components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavItem } from "./Navigations/NavItem";
import ToggleTheme from "./ToggleTheme";

const NAV__LINKS = [
   {
      display: "Home",
      url: "/home",
   },
   {
      display: "Market",
      url: "/market",
   },
   {
      display: "Create",
      url: "/create",
   },
   {
      display: "Contact",
      url: "/contact",
   },
];

const bsc = "blue.500";

const Header = () => {
   const [border, setBorder] = useState(false);

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
            setBorder(window.pageYOffset > 80)
         );
      }
   }, []);

   return (
      <Box
         as="header"
         width="100%"
         height="70px"
         position="fixed"
         top="0"
         zIndex="100"
         layerStyle="bgBlur"
         bgColor="alphaBackground"
         transition="0.3s ease-in-out"
         borderBottom={`${border ? "2px solid #3182ce" : "2px solid transparent"}`}
      >
         <Flex
            height="100%"
            layerStyle="mainLayout"
            justifyContent="space-between"
            alignItems="center"
         >
            <Link href="/" >
               <CrishanLogo height="2em" />
            </Link>
            <Spacer />
            <Flex gap={3}>
               <Flex gap={2}>
                  <NavItem />
               </Flex>
               <Divider height="2em" orientation="vertical" />
               <Flex gap={2} >
                  <ToggleTheme />
               </Flex>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Header;