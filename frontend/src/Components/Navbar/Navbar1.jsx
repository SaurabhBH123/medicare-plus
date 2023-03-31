import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Divider,
  Img,
  Center,
} from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import logo from "../../Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS, AUTH_ITEMS } from "../../utils/navbar.data.js";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import LoginCommon from "../Login/LoginCommon";

export default function Navbar1() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [isLogin, SetIsLogin] = useState(false);

  return (
    <Box>
      <Flex
        bgColor={"white"}
        color={useColorModeValue("gray.900")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify="center"
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", lg: "start" }}
        >
          <Box
            as={NavLink}
            to="/"
            cursor={"pointer"}
            border={"0px solid black"}
          >
            <Img
              src={logo}
              alt={"logo"}
              w={["60px", "90px", "100px"]}
              h={["30px", "30px", "30px"]}
            />
          </Box>

          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            alignItems={"center"}
            mx={"5px"}
            border={"0px solid black"}
          >
            <DesktopNav />
          </Flex>
        </Flex>

      
          <Text
            color={useColorModeValue("gray.900")}
            fontSize={"sm"}
            fontWeight={400}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
            borderRadius="none"
            pr={"10px"}
            onClick={onOpen}
          >
            Login | Sign up
          </Text>

        
        <LoginCommon
          isOpen={isOpen}
          onClose={onClose}
          isLogin={isLogin}
          SetIsLogin={SetIsLogin}
          details={{
            Title: "Login",
            desc: "Get access to your orders, lab tests & doctor consultations",
            inputLabel: "Email",
            inputWarning: "Please enter a valid Email ID",
            buttonTitle: "LOGIN",
            one: "New on 1mg? Sign Up",
            two: `By logging in, you agree to our
                Terms and Conditions & Privacy Policy`,
            three: "Need Help? Get In Touch",
          }}
        />
        <Flex
          gap={"15px"}
          spacing={0}
          lineHeight="tight"
          border={"0px solid red"}
          ml={"20px"}
        >
          <Text
            cursor={"pointer"}
            mt={"1px"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            Offer
          </Text>
          <Icon
            as={FaShoppingCart}
            w={4}
            h={4}
            mt={1.5}
            _hover={{ cursor: "pointer" }}
          />

          <Text
            cursor="pointer"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            Need Help?
          </Text>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("#ff6f61", "white");
  return (
    <Stack
      direction={"row"}
      spacing={[1, 2, 3]}
      alignItems={"center"}
      m={"auto"}
      justifyContent={"center"}
    >
      {NAV_ITEMS.map((navItem, i) => (
        <Flex
          key={navItem.label}
          justifyContent={"center"}
          alignItems={"center"}
          display={["none", "none", "none", "none", "flex"]}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink to={navItem.href}>
                <Text
                  p={0}
                  border={"0px solid green"}
                  fontSize={["sm", "md", "md"]}
                  fontWeight={[400, 500, 700]}
                  fontFamily="Clear Sans"
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} bg="#FFFFFF">
      {AUTH_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <Divider />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
