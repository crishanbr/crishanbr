import { Box, Flex, Heading } from "@chakra-ui/react";
import ContactButton from "./ContactButton";
import { links } from "./constants";

const Contact = () => {
   return (
      <Box>
         <Heading size="2xl" textAlign="center" >
            Mis redes sociales
         </Heading>
         <Box as="h2" textAlign="center" mt={5} mb={10}>
            Puedes contactarme a través de mis redes sociales
         </Box>
         <Flex
            gap="2rem"
            flexWrap="wrap"
            margin="auto"
            w={["100%", "80%", "60%"]}
            alignItems="center"
            justifyContent="center"
         >
            {links.map((link) => (
               <ContactButton
                  {...link}
                  key={link.title}
               />
            ))}
         </Flex>
      </Box>
   );
};

export default Contact;