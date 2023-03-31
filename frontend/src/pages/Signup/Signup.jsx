import { SmallCloseIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Button, Center, Flex, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [profile_url, setUserProfile] = useState("")
    const [mobile_no, setMobile] = useState(0)
    const toast = useToast()

    const handleRegister = async () => {
        try {
            const payload = { name, email, password, profile_url, mobile_no };
            const user = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, payload);
            console.log(user.data.response.data);
        } catch (error) {
            console.log(error.response.data);

            toast({
                title: `${error?.response?.data === "User already exist, please login" ? "User already exist, please login" : "some error"}`,
                status: "error",
                isClosable: true,
                position: "top"
            })
            setName("");
            setEmail("");
            setPass("");
            setUserProfile("");
            setMobile(0);
        }
    }

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

    console.log(name, email, password, profile_url, mobile_no);
    return (
        <>
            <Button
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                Signup
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            // minH={'100vh'}
                            align={'center'}
                            justify={'center'}
                            bg={"white"}
                        >
                            <Stack
                                //   spacing={4}
                                w={'full'}
                                maxW={'md'}
                                h={"full"}
                                bg={useColorModeValue('white', 'gray.700')}
                                //   rounded={'xl'}
                                //   boxShadow={'lg'}
                                p={6}
                                my={12}>
                                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                                    Register yourself here
                                </Heading>

                                <FormControl id="userName" isRequired>
                                    <FormLabel>User name</FormLabel>
                                    <Input
                                        placeholder="UserName"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        placeholder="your-email@example.com"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        placeholder="password"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="profile_url" isRequired>
                                    <FormLabel>Profile</FormLabel>
                                    <Input
                                        placeholder="Profile URL"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        value={profile_url}
                                        onChange={(e) => setUserProfile(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="mobile_no" isRequired>
                                    <FormLabel>Mobile No</FormLabel>
                                    <Input
                                        placeholder="Mobile No"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="number"
                                        value={mobile_no}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </FormControl>
                                <Stack spacing={6} direction={['column', 'row']}>
                                    <Button
                                        bg={'red.400'}
                                        onClick={onClose}
                                        color={'white'}
                                        w="full"
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Cancel
                                    </Button>
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        onClick={() => handleRegister()}
                                        w="full"
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default SignUp;


