import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Loader1 = () => {
  return (
    <Box padding="6" boxShadow={['md','md','lg','xl','2xl']} bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="6" />
    </Box>
  );
};

export { Loader1 };
