
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Text, Image, Flex } from "@chakra-ui/react";




const TopSellers = (elem) => {
  return (
    <>
      <Box style={{ cursor: "pointer" }}>
        <Box
          ml="4"
          bg="#19AB2A"
          color="white"
          w="max-content"
          py="0.5"
          px="2"
          borderRadius="4px"
        >
          SALE
        </Box>
        <Image
          h="165px"
          mt="0px"
          w="70px"
          style={{ display: "flex", margin: "2px auto" }}
          src={elem.img}
        />
        <Flex ml="2">
          <Box mr="2">
            <img
              src="https://img.1mg.com/images/watch_icon.svg"
              alt="1mg-recommended"
            />
          </Box>
          <Text mr="1">Ends in</Text>
          <Text fontSize="md" color="#19AB2A" mr="1">
            2 days 5 hrs
          </Text>
        </Flex>
        <Text textAlign="left" py="1" px="2">
          {elem.name}
        </Text>
        <Text ml="2" fontSize="xs">
          {elem.desc}
        </Text>
        <Flex ml="2">
          <Text mr="1">{elem.striked.s1}</Text>
          <Text as="s" mr="1">
            {elem.striked.s2}
          </Text>
          <Text color="#19AB2A" mr="1">
            {elem.striked.s3}
          </Text>
        </Flex>
        <Text ml="2" as="b">
          {elem.price}
        </Text>
      </Box>
    </>
  );
};

export default TopSellers;
