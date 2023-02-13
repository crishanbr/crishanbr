import * as React from 'react';
import { Flex, Image, Box, Container, Heading, keyframes } from '@chakra-ui/react';

const ANIMATION_DURATION = 0.5;

const Home = () => {
   const color = 'blue.400';

   return (
      <Container maxW="5xl" pt={["3rem", "7rem"]}>
         <Flex direction="column">
            <Box
               m="auto"
               mb={16}
            >
               <Image
                  boxSize="200px"
                  src="assets/Cabo-unscreen.gif"
               />
            </Box>
            <Flex
               position="relative"
               alignItems="center"
               textAlign="center"
               direction="column"
            >
               <Box position="relative">
                  <Box width="max-content">
                     <Heading 
                        mt={0} 
                        width="max-content"
                        bgGradient={`linear(to-r, hsl(50, 100%, 70%), hsl(320, 100%, 50%))`}
                        bgClip="text"
                        animation={`${hue} 10s linear infinite`}
                        fontWeight="extrabold"
                     >
                        Hola, Soy Cristhofer
                     </Heading>
                  </Box>
               </Box>
               <Box as="h2" mt={5}>
                  Software Enggineering student at University of Guayaquil
               </Box>
            </Flex>
         </Flex>
      </Container>
   );
};

const hue = keyframes`
   from {
      filter: hue-rotate(0deg);
   }
   to {
      filter: hue-rotate(360deg);
   }
`;


export default Home;