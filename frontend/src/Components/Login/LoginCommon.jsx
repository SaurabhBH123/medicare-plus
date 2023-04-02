import React from "react";


import Login from "./Signin";

import Signup from "./Signup";
import { Modal, ModalOverlay, ModalContent,  Flex } from "@chakra-ui/react";


export default function LoginCommon({
  isOpen,
  onClose,
  lOS,
  setLOS,
}) {

  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent ml={['0%','0%','0%']}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"max"}
          border={"3px solid white"}
          gap={0}
        >
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
