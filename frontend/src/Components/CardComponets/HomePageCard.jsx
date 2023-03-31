import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const TopSellers = ({ elem }) => {
  return (
    <>
      <VStack
        style={{ cursor: "pointer" }}
        position={"relative"}
        border={"0px solid red"}
        padding={3}
        spacing={0}
        justifyContent={"center"}
        alignItems={"flex-start"}
        _hover={{ boxShadow: "xl", borderRadius: "xl" }}
      >
        {elem.final_price > 1700 ? (
          <Box
            position={"absolute"}
            top={1}
            left={1}
            bg="#19AB2A"
            color="white"
            w="max-content"
            borderRadius="4px"
            fontSize={"12px"}
            padding={[0, 1, 1]}
          >
            SALE
          </Box>
        ) : null}
        <Image
          h={["90px", "120px", "150px"]}
          style={{ display: "flex", margin: "2px auto" }}
          src={elem.image_url}
        />
        {/* <Flex ml="2">
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
        </Flex> */}
        <Text
          textAlign="left"
          py="1"
          noOfLines={[1, 1, 2]}
          fontSize={"14px"}
          fontWeight={"semibold"}
        >
          {elem.product_title}
        </Text>
        <Text ml="2" fontSize="xs">
          {elem.pack_size}
        </Text>
        <VStack ml={[0, 1, 2]}>
          <Flex>
            <Flex>
              <Text fontSize={"14px"}>MRP ₹ </Text>
              <Text fontSize={"14px"} ml="1" textDecoration={"line-through"}>
                {elem.MRP}
              </Text>
            </Flex>
            <Text ml={[0, 1, 2]} color={"green"}>
              {elem.discount}
            </Text>
          </Flex>
        </VStack>
        <Text ml="2" as="b">
          ₹ {elem.final_price}
        </Text>
      </VStack>
    </>
  );
};

export default TopSellers;
