import {
  Input,
  Heading,
  Text,
  Button,
  Link,
  Box,
  useToast,
  VStack,
  Spacer,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const InitState = {
  name: "",
  email: "",
  password: "",
};

const Signup = ({ onClose, SetIsLogin }) => {
  const [values, setValues] = useState(InitState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleclick = async (e) => {
    e.preventDefault();
    let res1 = await fetch("https://");
    let res2 = await res1.json();
    let flag = false;
    res2.map((elem) =>
      elem.email === values.email && elem.password === values.password
        ? (flag = true)
        : (flag = false)
    );
    if (flag) {
      toast({
        title: "User already exists !",
        description: "Try another user details.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      fetch("https://json-server-1mg.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      toast({
        title: "User created",
        description: "Place your first Order.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <VStack bg={"white"} w={"lg"}>
        <Box className="crossBox" w="100%">
          <Flex>
            <Spacer />
            <Box
              onClick={() => {
                onClose();
              }}
            >
              <Image
                src="https://www.1mg.com/images/cross_icon_18.svg"
                alt="close icon"
                width="20px"
                height="20px"
              />
            </Box>
          </Flex>
        </Box>
        <Flex textAlign={"center"} flexDirection={"column"}>
          <Heading mb={4} ml="0px">
            Sign Up
          </Heading>
          <Text fontSize="10px" color="grey">
            Get access to your orders, lab tests & doctor consultations
          </Text>
          <Box w={"50%"} m={"auto"} border={"0px solid red"}>
            <form onSubmit={handleclick}>
              <Input
                size={"md"}
                label="Name"
                value={values.name}
                name="name"
                type="text"
                onChange={handleChange}
                required
                placeholder="Enter Full Name"
              />
              <Input
                size={"md"}
                mt="30px"
                label="Email"
                value={values.email}
                name="email"
                type="email"
                onChange={handleChange}
                required
                placeholder="Enter Email ID"
              />
              <Input
                size={"md"}
                mt="30px"
                label="Password"
                id="typePassword"
                name="password"
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                maxLength="8"
              />
              <br />

              <Button mt="10px" size={"md"} colorScheme="red" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
          <Text fontSize="14px" mt="20px" color="grey">
            Already have an account ?{" "}
            <Link
              color="rgb(255, 111, 97)"
              onClick={() => {
                SetIsLogin(true);
              }}
            >
              Log in
            </Link>
          </Text>

          <Text fontSize="10px" color="grey">
            By Sign up, you agree to our
          </Text>
          <Text fontSize="10px" color="grey">
            <Link href="https://www.1mg.com/tnc">Terms and Conditions</Link> &{" "}
            <Link href="https://www.1mg.com/privacypolicy">Privacy Policy</Link>
          </Text>
        </Flex>
      </VStack>
    </>
  );
};

export default Signup;
