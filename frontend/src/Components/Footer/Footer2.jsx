import {
  Box,
  Center,
  Text,
  Flex,
  Input,
  Show,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const Footer2 = () => {
  return (
    <Box borderY="1px solid #bfbfbf" mt="30px">
      <Box>
        <Center py="20px">
          <Box
            fontFamily='"Space Mono", "Clear Sans", "Helvetica Neue"'
            fontSize={{ base: "12px", sm: "16px", md: "20px", lg: "24px" }}
            color="#1A1A1A"
          >
            <Heading size={"lg"} fontWeight={"medium"} textAlign={'center'} >
              INDIA’S LARGEST HEALTHCARE PLATFORM
            </Heading>
          </Box>
        </Center>
      </Box>

      <Box mb="5">
        <Flex textAlign="center" justifyContent="space-evenly">
          <Box>
            <Text
              as="b"
              fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
            >
              260m+
            </Text>
            <Text>Visitors</Text>
          </Box>
          <Box>
            <Text
              as="b"
              fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
            >
              31m+
            </Text>
            <Text>Orders Delivered</Text>
          </Box>
          <Box>
            <Text
              as="b"
              fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
            >
              1800+
            </Text>
            <Text>Cities</Text>
          </Box>
        </Flex>
      </Box>

      <Show above="sm">
      <Divider  w={"85%"} m={"auto"} color={"#bfbfbf"} />

        <Box my="3">
          <Flex alignItems="center" justifyContent="center">
            <Text
              mt={"4px"}
              color="#212121"
              fontSize={{ md: "20px", lg: "24px" }}
            >
              Get the link to download App
            </Text>

            <Box mx="2" w={{ md: "30%", lg: "25%" }} borderRadius="2">
              <Input
                type="tel"
                variant="unstyled"
                py="2"
                px="4"
                bg="#ddd"
                placeholder="Enter Phone Number"
              />
            </Box>
            <Box>
              <Button
                w="max-content"
                bg="tomato"
                py="2"
                px="4"
                color="white"
                borderRadius="6"
                _hover={{ cursor: "pointer" }}
                onClick={() => console.log("yes")}
              >
                Send Link
              </Button>
            </Box>
          </Flex>
          
        </Box>
      </Show>
      
    </Box>
  );
};

export default Footer2;
