import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { EcuadorFlag } from "components/icons";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const email = "crisbaque_200@hotmail.es";

const InfoBanner = () => {
   return (
      <Flex
         as="section"
         borderWidth={2}
         rounded="lg"
         mb={4}
         direction="column"
         background="bg1"
      >
         <Box
            style={{
               backgroundImage:
                  "url(https://wallpaperaccess.com/full/656670.jpg)",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={[8, 16]}
            display="flex"
            justifyContent="center"
         >
            <Image
               src="assets/crishanbr.jpg"
               alt="Profile Picture"
               borderRadius="full"
               boxSize={["100px", "150px"]}
               shadow="lg"
               border="5px solid"
               mb={[-20, -32]}
               borderColor="bg1"
               userSelect="none"
               draggable={false}
            />
         </Box>
         <Box
            gridColumn="span 8"
            p={8}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="center"
            mt={10}
         >
            <Text
               fontSize={["2xl", "3xl"]}
               fontWeight="bold"
            >
               Cristhofer Baque R.
            </Text>
            <Text
               fontSize="lg"
               mb={4}
               color="description"
            >
               Estudiante
            </Text>
            <HStack
               spacing={3}
               justifyContent="center"
            >
               <IoLocationSharp size={20} />
               <Text>
                  Ecuador{" "}
                  <EcuadorFlag height="0.8em" display="inline" />
               </Text>
            </HStack>
            <HStack
               spacing={3}
               justifyContent="center"
            >
               <FaEnvelope />
               <Text>
                  <Link href={`mailto:${email}`} >{email}</Link>
               </Text>
            </HStack>
         </Box>
      </Flex>
   );
};

export default InfoBanner;