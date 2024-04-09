import React from "react";
import { Box, Button, Image, VStack } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";

const Resume = () => {

   const DownloadPDF = () => {
      return (
         <Button 
            as='a' download
            href='docs/CrishanCV-2024.pdf'
            leftIcon={<FaDownload />}
            variant='outline'
            w='100%'
            rounded="md"
         >
            Descargar Curriculum
         </Button>
      );
   }

   return (
      <VStack
            margin='auto'
            w={{ base: '100%', lg: '75%' }}
            spacing='2rem'>
            <DownloadPDF />
            <Box
               width="100%"
               paddingBottom="calc(100% + 10rem)"
               position="relative"
               rounded="md"
               overflow="hidden"
            >
               <Box 
                  as="iframe" 
                  src="https://drive.google.com/file/d/1E3ICJp9O61n06-fg61Z_B2GBITB471xx/preview"
                  position="absolute"
                  width="100%" 
                  height="100%" 
               />
            </Box>
            <DownloadPDF />
         </VStack>
   );
};

export default Resume;
