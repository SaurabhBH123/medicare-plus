import React from "react";
import { useState } from "react";

import Login from "./Signin";

import Signup from "./Signup";
import { Modal, ModalOverlay, ModalContent, Box, Flex } from "@chakra-ui/react";
import LoginCarousels from "../Carousels/LoginCarousel";
import { loginCarouselData } from "../../utils/loginCarousel.data";
const InitState = {
  email: "",
  password: "",
  username: "",
};
export default function LoginCommon({
  isOpen,
  onClose,
  details,
  isLogin,
  SetIsLogin,
}) {
  const [values, setValues] = useState(InitState);
  const [isUserAuthenticated, SetIsUserAuthenticated] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent ml={"-50%"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"max"}
          border={"3px solid white"}
          gap={0}
        >
          <Box border={"0px solid red"}>
            <LoginCarousels allData={loginCarouselData} />
          </Box>

          {!isUserAuthenticated && !isLogin ? (
            <Signup onClose={onClose} SetIsLogin={SetIsLogin} />
          ) : (
            <Login
              onClose={onClose}
              SetIsLogin={SetIsLogin}
              SetIsUserAuthenticated={SetIsUserAuthenticated}
            />
          )}
        </Flex>
      </ModalContent>
    </Modal>
  );
}
