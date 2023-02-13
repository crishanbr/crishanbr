import {
   Box,
   Drawer,
   DrawerBody,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   Flex,
   Grid,
   Spacer,
   useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"
import TabItem from "./Navigations/TabItem"
import { AiOutlineAppstore } from "react-icons/ai"
import { TbArrowBack } from "react-icons/tb"
import ToggleTheme from "./ToggleTheme"
import { BiHomeAlt } from "react-icons/bi"

const TabBar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <Box position="fixed" bottom={0} zIndex={10} width="full" layerStyle="bgBlur" background="alphaBackground">
         <Box
            display={["flex", "none"]}
            height="auto"
            alignItems="center"
         >
            <Flex layerStyle="mainLayout" fontSize="1.5rem" paddingY={3} >
               <Link href="/">
                  <BiHomeAlt />
               </Link>
               <Spacer />
               <AiOutlineAppstore onClick={onOpen} />
            </Flex>
         </Box>
         <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
               roundedTop="xl"
               layerStyle="bgBlur"
               background="alphaBackground">
               <DrawerHeader display="flex" flexDir="row">
                  <Spacer />
                  <ToggleTheme />
               </DrawerHeader>
               <DrawerBody
                  paddingX={8}
               >
                  <Grid
                     templateColumns="repeat(4, 1fr)"
                     gap={4}
                     justifyItems="center"
                  >
                     <TabItem />
                  </Grid>
               </DrawerBody>
               <DrawerFooter
                  opacity={isOpen ? 1 : 0}
                  transition="4s ease-out"
               >
                  <TbArrowBack
                     fontSize="1.5rem"
                     onClick={onClose}
                  />
               </DrawerFooter>
            </DrawerContent>
         </Drawer>
      </Box >
   )
}

export default TabBar