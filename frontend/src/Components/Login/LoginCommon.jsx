import React from "react";
import { useState } from "react";

import Login from "./Signin";

import Signup from "./Signup";
import { Modal, ModalOverlay, ModalContent, Box, Flex } from "@chakra-ui/react";
import LoginCarousels from "../Carousels/LoginCarousel";
import { loginCarouselData } from "../../utils/loginCarousel.data";

export default function LoginCommon({
  isOpen,
  onClose,
  lOS,
  setLOS,
}) {

  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent ml={['0%','0%','-15%','-40%','-35%']}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"max"}
          border={"3px solid white"}
          gap={0}
        >
          <Box border={"0px solid red"} display={['none','none','none','inline-block','inline-block']}>
            <LoginCarousels allData={loginCarouselData} />
          </Box>
          {lOS==="signup"? (
            <Signup onClose={onClose}  setLOS={setLOS}/>
          ) : (
            <Login
              onClose={onClose}
              setLOS={setLOS}
            />
          )}

          
        </Flex>
      </ModalContent>
    </Modal>
  );
}
