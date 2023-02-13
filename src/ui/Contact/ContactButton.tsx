import { border, Button, Card, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { ContactProps } from "./types";

const ContactButton = ({ title, href, icon, ...props }: ContactProps) => {
   return (
      <Card
         as={Link}
         href={href}
         target="_blank"
         display="flex"
         gap={2}
         position="relative"
         flexDirection="column"
         alignItems="center"
         justifyContent="center"
         width={["5rem", "7rem"]}
         height={["5rem", "7rem"]}
         backgroundColor="bg1"
         borderWidth={2}
         overflow="hidden"
         _hover={{
            borderColor: "blue.500",
         }}
         transition="0.15s ease"
         {...props}
      >
         <Icon 
            as={icon} 
            w={["2rem", "3rem"]}
            h={["2rem", "3rem"]}
         />
         <Text textAlign="center" fontSize={["xs", "md"]}>
            {title}
         </Text>
      </Card>
   );
};

export default ContactButton;