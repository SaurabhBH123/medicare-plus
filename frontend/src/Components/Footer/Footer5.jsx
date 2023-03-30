import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";

const Footer5 = () => {
  return (
    <>
      <Box bg="#fffcf8" h="max-content" my="1">
        <Box pt="2" textAlign="center" w="90%" m="auto">
          <Text
            as="b"
            fontSize={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            color="1A1A1A"
          >
            India's only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </Text>
        </Box>
        <Flex justifyContent="center" my="8">
          <Box>
            <Image
              w="100px"
              px="2"
              src="https://static.legitscript.com/seals/729605.png"
              alt="iso_logo1"
              _hover={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Image
              w="100px"
              px="2"
              src="https://onemg.gumlet.io/URS_ebgmxc.png"
              alt="iso_logo2"
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Flex>
        <Box w="90%" m="auto">
          <hr />
        </Box>
       
        <Box pt="2" textAlign="center" w="90%" m="auto">
          <Text
            fontSize={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
            color="rgb(156,168,170)"
          >
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer5;
