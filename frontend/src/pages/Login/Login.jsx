import { SmallCloseIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Button, Center, Checkbox, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../redux/AuthReducer/auth.action";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const data = useSelector((res) => res.AuthReducer);
    const dispatch = useDispatch();

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)

    const handleLogin = () => {
        const payload = {
            email,
            password
        }
        // console.log(payload);
         dispatch(getUserToken(payload))
    }

    console.log(data);

    return (
        <>
            <Button
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
               Login
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent borderRadius={"50px"}>
                    <ModalCloseButton />
                    <ModalBody bgColor={"white"} borderRadius={"10px"} >
                        <Flex
                            // minH={'100vh'}
                            align={'center'}
                            justify={'center'}
                            bg={"white"}
                            borderRadius={"5px"}
                        >
                            <Stack spacing={4} padding={"10px"} bgColor={"white"}>
                               <Heading>Login</Heading>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" value={password} onChange={(e) => setPass(e.target.value)} />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={'blue.400'}>Forgot password?</Link>
                                    </Stack>
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        onClick={() => handleLogin()}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}