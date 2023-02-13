import { Box, Spacer, Stack, Image, Text, Icon, Flex } from "@chakra-ui/react";
import { CrishanLogo, EcuadorFlag } from "components/icons";
import Link from "next/link";

const Footer = () => {
   return (
      <Box
         as="footer"
         width="full"
         position="absolute"
         bottom={0}
         paddingBottom={[12, 2]}
      >
         <Stack
            align="center"
            layerStyle="mainLayout"
            direction="column"
         >
            <Flex
               width="full"
               align="center"
               _before={{
                  content: '""',
                  borderBottom: '2px solid',
                  borderColor: "borderColor",
                  flexGrow: 1,
                  mr: 8,
               }}
               _after={{
                  content: '""',
                  borderBottom: '2px solid',
                  borderColor: "borderColor",
                  flexGrow: 1,
                  ml: 8,
               }}>
               <CrishanLogo height="2.5rem" width="auto" color="primary.400" />
            </Flex>
            <Spacer />
            <Text>
               &copy;{new Date().getFullYear()} -
               Made with ❤ by {' '}
               <Link href="https://www.crishanbr.me">
                  crishanbr
               </Link> in <EcuadorFlag height="0.8em" display="inline" />
            </Text>
         </Stack>
      </Box>
   );
};

export default Footer;